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
      const { catName } = payload;
      // FIXME add parent id
      const cat = yield call(request, endPointURI, {
        method: 'post',
        data: { cat_name: catName },
      });
      yield put({ type: 'pushProductCategory', payload: cat });
      yield call(delay, 1000);
    },
  },
  reducers: {
    loadProductCategories(state, { payload: cats }) {
      return {
        data: cats,
      };
    },
    pushProductCategory(state, { payload: cat }) {
      state.data.push(cat);
      return state;
    },
  },
};
