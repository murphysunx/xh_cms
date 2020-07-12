import request from '../../utils/request';

const delay = (miilisecond) => {
  return new Promise((resolve) => {
    setTimeout(resolve, miilisecond);
  });
};

export default {
  namespace: 'product_units',
  state: {
    data: [],
  },
  effects: {
    *queryProductUnits(_, { put, call }) {
      const endPointURI = 'http://localhost:8000/product/product_unit/';
      const units = yield call(request, endPointURI);
      yield put({ type: 'loadProductUnits', payload: units });
      yield call(delay, 3000);
    },
  },
  reducers: {
    loadProductUnits(state, { payload: units }) {
      return {
        data: units,
      };
    },
  },
};
