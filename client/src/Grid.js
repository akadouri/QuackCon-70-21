//ids correspond to modules in Spot.js
let ids = [0, -1, -1, -1, -1, -1];
let observer = null;

//black magic
function emitChange() {
  observer(ids);
}

//never used?
export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();

  return () => {
    observer = null;
  };
}

export function getID(pos) {
  return ids[pos];
}

export function moveModule(fromPos, toPos) {
  var swap = ids[toPos];
  ids[toPos] = ids[fromPos];
  ids[fromPos] = swap;
  emitChange();
}
