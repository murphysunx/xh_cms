import { Spu, ISpuAPI } from '@/pages/product/spu/Spu';
import request from '../../utils/request';
import { SpuModelType } from '../type/spu';

export default {
  namespace: 'productSpus',
  state: {
    data: [],
  },
  effects: {
    *querySpus(_, { put, call }) {
      const endPointURI = `http://localhost:8080/product/spu/`;
      const spus = yield call(request, endPointURI);
      if (spus) {
        yield put({ type: 'loadSpus', payload: spus });
      }
    },
    *addSpu({ payload }, { put, call }) {
      const endPointURI = `http://localhost:8080/product/spu/`;
      const spu = yield call(request, endPointURI, {
        method: 'post',
        data: payload,
      });
      if (spu) {
        yield put({ type: 'pushSpu', payload: Spu.create(spu) });
      }
    },
    *deleteSpu({ payload }, { put, call }) {
      const endPointURI = `http://localhost:8080/product/spu/${payload}/`;
      const resp = yield call(request, endPointURI, { method: 'delete' });
      if (resp) {
        yield put({ type: 'removeSpu', payload });
      }
    },
  },
  reducers: {
    loadSpus(state, { payload: spus }) {
      const mySpus: Spu[] = spus.map((spu: ISpuAPI) => {
        const { pdt_id, pdt_name, pdt_desc, cat_id } = spu;
        return new Spu(pdt_id, pdt_name, pdt_desc, cat_id);
      });
      return {
        data: mySpus,
      };
    },
    pushSpu(state, { payload }) {
      if (!state) return { data: [payload] };
      const spus = [...state.data];
      spus.push(payload);
      return {
        data: spus,
      };
    },
    removeSpu(state, { payload }) {
      if (!state) return { data: [] };
      const spus = [...state.data].filter((spu) => spu.id !== payload);
      return { data: spus };
    },
  },
} as SpuModelType;
