import { Map } from 'immutable';

function getImmutableObject(object) {
  return Map(object);
}

const obj = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -91476132
};

const immutableMap = getImmutableObject(obj);
console.log(immutableMap);
