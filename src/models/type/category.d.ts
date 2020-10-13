import { Category } from '@/pages/product/category/Category';
import { Effect, Model } from 'dva';
import { Reducer } from 'umi';

export interface CategoryState {
  data: Category[];
}

export interface CategoryModelType extends Model {
  namespace: string;
  state: CategoryState;
  effects: {
    queryProductCategories: Effect;
    addProductCategory: Effect;
    deleteProductCategory: Effect;
  };
  reducers: {
    loadProductCategories: Reducer<CategoryState>;
    pushProductCategory: Reducer<CategoryState>;
    removeProductCategory: Reducer<CategoryState>;
  };
}
