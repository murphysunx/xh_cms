import { CategoryState } from './category';
import { SpuState } from './spu';

export interface GlobalModelState {
  productCategories: CategoryState;
  productSpus: SpuState;
}
