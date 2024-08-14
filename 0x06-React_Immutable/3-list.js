import { List } from 'immutable';

export function getListObject(array) {
  return List(array);
}

export function addElementToList(list, element) {
  return list.push(element);
}

const arr = ['a', 'b', 'c'];
const immutableList = getListObject(arr);
console.log(immutableList);

const updatedList = addElement(immutableList, 'd');
console.log(updatedList);
