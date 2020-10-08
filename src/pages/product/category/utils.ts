import { Category } from '@/utils/category';

export const findTop3Cats = (cats: Category[]): Category[] => {
  return cats.length > 3 ? cats.slice(0, 4) : cats;
};
