import request from '../../utils/request';

const delay = (miilisecond) => {
  return new Promise((resolve) => {
    setTimeout(resolve, miilisecond);
  });
}

export default {
  namespace: 'product_categories',
  state: {
    data: [],
  },
  effects: {
    *queryProductCategories(_, { put, call }) {
      const endPointURI = 'http://localhost:8000/product/category/';
      const cats = yield call(request, endPointURI);
      yield put({ type: 'loadProductCategories', payload: cats });
      yield call(delay, 3000);
    }
  },
  reducers: {
    loadProductCategories(state, { payload: cats }) {
      return {
        data: cats,
      };
    }
  }
}