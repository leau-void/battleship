export default ({ isHorizontal, name }) => {
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
    this.hits.push(pos);
  };
  const isSunk = function checkIfSunk() {
    return this.hits.length === this.length;
  };

  return { length, isHorizontal, name, hits, isSunk, hit };
};
