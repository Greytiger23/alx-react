import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  return List(page1).concat(page2));
}

export function mergeElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);
  return map1.merge(map2).toList();
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(concatElements(array1, array2));

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
console.log(mergeElements(obj1, obj2));
