import { Spu } from '@/pages/product/spu/Spu';
import { Effect, Model } from 'dva';
import { Reducer } from 'umi';

export interface SpuState {
  data: Spu[];
}

export interface SpuModelType extends Model {
  namespace: string;
  state: SpuState;
  effects: {
    querySpus: Effect;
    addSpu: Effect;
    deleteSpu: Effect;
  };
  reducers: {
    loadSpus: Reducer<SpuState>;
    pushSpu: Reducer<SpuState>;
    removeSpu: Reducer<SpuState>;
  };
}
