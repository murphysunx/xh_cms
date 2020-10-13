import { Category, ICategoryAPI } from '@/pages/product/category/Category';
import request from '../../utils/request';
import { CategoryModelType } from '../type/category';

const delay = (miilisecond: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, miilisecond);
  });
};

export default {
  namespace: 'productCategories',
  state: {
    data: [],
  },
  effects: {
    *queryProductCategories(_, { put, call }) {
      const endPointURI = 'http://localhost:8080/product/category/';
      const cats = yield call(request, endPointURI);
      if (cats) {
        yield put({ type: 'loadProductCategories', payload: cats });
        yield call(delay, 3000);
      }
    },
    *addProductCategory({ payload }, { put, call }) {
      const endPointURI = `http://localhost:8080/product/category/`;
      const { catName, parentCat } = payload;
      const cat: ICategoryAPI = yield call(request, endPointURI, {
        method: 'post',
        data: { cat_name: catName, parent_id: parentCat },
      });
      if (cat) {
        const category = Category.create(cat);
        yield put({ type: 'pushProductCategory', payload: category });
        yield call(delay, 1000);
      }
    },
    *deleteProductCategory({ payload }, { put, call }) {
      const endPointURI = `http://localhost:8080/product/category/${payload}`;
      const resp = yield call(request, endPointURI, {
        method: 'delete',
      });
      if (resp) {
        yield put({ type: 'removeProductCategory', payload });
      }
    },
  },
  reducers: {
    loadProductCategories(state, { payload: cats }) {
      // build hierachical categories
      const roots = (cats as ICategoryAPI[])
        .filter((cat: ICategoryAPI) => {
          return cat.parent_id === null;
        })
        .map((cat) => Category.create(cat));
      const leaves = (cats as ICategoryAPI[])
        .filter((cat) => cat.parent_id !== null)
        .map((cat) => Category.create(cat));
      leaves.forEach((lev) => {
        const pat = roots.find((root) => root.id === lev.pid);
        if (pat) {
          pat.addChild(lev);
        }
      });
      return {
        data: roots,
      };
    },
    pushProductCategory(state, { payload: cat }) {
      if (!state) return { data: [cat] };
      const cats = [...state.data];
      cats.push(cat);
      return {
        data: cats,
      };
    },
    removeProductCategory(state, { payload: cid }) {
      if (!state) return { data: [] };
      let cats = [...state.data];
      cats = cats.filter((c) => c.id !== cid);
      return {
        data: cats,
      };
    },
  },
} as CategoryModelType;
