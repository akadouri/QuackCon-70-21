let ids = [0, 1, 2, 3, 4, 5];
let observer = null;

function emitChange() {
  observer(ids);
}

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

export function canMoveKnight(toX, toY) {
  const [x, y] = knightPosition;
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}
/*
export function moveKnight(toX, toY) {
  knightPosition = [toX, toY];
  emitChange();
}*/
export function getID(pos) {
  return ids[pos];
}

export function moveModule(fromPos, toPos) {
  var swap = ids[toPos];
  ids[toPos] = ids[fromPos];
  ids[fromPos] = swap;
  emitChange();
}
