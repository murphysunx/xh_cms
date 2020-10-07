import { Category } from '@/utils/category';
import request from '../../utils/request';

const delay = (miilisecond) => {
  return new Promise((resolve) => {
    setTimeout(resolve, miilisecond);
  });
};

export default {
  namespace: 'product_categories',
  state: {
    data: [],
  },
  effects: {
    *queryProductCategories(_, { put, call }) {
      const endPointURI = 'http://localhost:8080/product/category/';
      const cats = yield call(request, endPointURI);
      yield put({ type: 'loadProductCategories', payload: cats });
      yield call(delay, 3000);
    },
    *addProductCategory({ payload }, { put, call }) {
      const endPointURI = `http://localhost:8080/product/category/`;
      const { catName, parentCat } = payload;
      const cat = yield call(request, endPointURI, {
        method: 'post',
        data: { cat_name: catName, parent_id: parentCat },
      });
      yield put({ type: 'pushProductCategory', payload: cat });
      yield call(delay, 1000);
    },
    *deleteProductCategory({ payload }, { put, call }) {
      const endPointURI = `http://localhost:8080/product/category/${payload}`;
      yield call(request, endPointURI);
      yield put({ type: 'removeProductCategory', payload });
    },
  },
  reducers: {
    loadProductCategories(state, { payload: cats }) {
      // build hierachical categories
      const roots = cats
        .filter((cat) => {
          return cat.parent_id === null;
        })
        .map((cat) => new Category(cat.cat_id, cat.cat_name, cat.parent_id));
      const leaves = cats
        .filter((cat) => cat.parent_id !== null)
        .map((cat) => new Category(cat.cat_id, cat.cat_name, cat.parent_id));
      leaves.forEach((lev) => {
        const pat = roots.find((root) => root.catId === lev.catPid);
        pat.addChild(lev);
      });
      return {
        data: roots,
      };
    },
    pushProductCategory(state, { payload: cat }) {
      const cats = [...state.data];
      cats.push(cat);
      return {
        data: cats,
      };
    },
    removeProductCategory(state, { payload: cid }) {
      let cats = [...state.data];
      cats = cats.filter((c) => c.catId !== cid);
      return {
        data: cats,
      };
    },
  },
};
