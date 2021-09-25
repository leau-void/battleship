import shipFactory from './shipFactory';

const wrapShip = {};

wrapShip.carrier = ({ isHorizontal }) =>
  shipFactory({
    isHorizontal,
    name: 'Carrier',
  });

wrapShip.battleship = ({ isHorizontal }) =>
  shipFactory({
    isHorizontal,
    name: 'Battleship',
  });

wrapShip.cruiser = ({ isHorizontal }) =>
  shipFactory({
    isHorizontal,
    name: 'Cruiser',
  });

wrapShip.submarine = ({ isHorizontal }) =>
  shipFactory({
    isHorizontal,
    name: 'Submarine',
  });

wrapShip.destroyer = ({ isHorizontal }) =>
  shipFactory({
    isHorizontal,
    name: 'Destroyer',
  });

export default wrapShip;
