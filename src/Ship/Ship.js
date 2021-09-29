export default ({ isHorizontal, name }) => {
  const alreadySunk = false;

  const lengthTable = {
    Carrier: 5,
    Battleship: 4,
    Cruiser: 3,
    Submarine: 3,
    Destroyer: 2,
  };
  const length = lengthTable[name];

  const hits = [];
  const hit = function addHit(pos) {
    if (pos >= length || pos < 0) return;
    hits.push(pos);
  };
  const isSunk = function checkIfSunk() {
    const sunk = hits.length === this.length;
    if (sunk && !this.alreadySunk) {
      const e = new CustomEvent('shipSunk', { detail: name });
      document.dispatchEvent(e);

      this.alreadySunk = true;
    }
    return sunk;
  };

  return { length, isHorizontal, name, isSunk, hit };
};
