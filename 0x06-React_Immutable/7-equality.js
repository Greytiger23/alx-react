import { is, Map } from 'immutable';

export function areMapsEqual(map1, map2) {
  return is(map1, map2);
}

const map1 = Map({
  {
    firstName: 'Guillaume',
    lastName: 'Salva',
  }
});

const map2 = Map({
  {
    firstName: 'Guillaume',
    lastName: 'Salva',
  }
});

console.log(areMapsEqual(map1, map2));
