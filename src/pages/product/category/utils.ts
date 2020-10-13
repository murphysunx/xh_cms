import { Category } from './Category';

export const findTop3Cats = (cats: Category[]): Category[] => {
  return cats.length > 3 ? cats.slice(0, 3) : cats;
};
