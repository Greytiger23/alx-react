import { List, Map } from 'immutable';

function concatElements(page1, page2) {
  return List(page1).concat(page2);
}

function mergeElements(page1, page2) {
  return List(Map(page1).merge(Map(page2)).values());
}

export { concatElements, mergeElements };
