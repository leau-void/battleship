import Ship from './Ship';
import './Ship.css';

const wrapShip = {};

wrapShip.carrier = ({ isHorizontal }) =>
  Ship({
    isHorizontal,
    name: 'Carrier',
  });

wrapShip.battleship = ({ isHorizontal }) =>
  Ship({
    isHorizontal,
    name: 'Battleship',
  });

wrapShip.cruiser = ({ isHorizontal }) =>
  Ship({
    isHorizontal,
    name: 'Cruiser',
  });

wrapShip.submarine = ({ isHorizontal }) =>
  Ship({
    isHorizontal,
    name: 'Submarine',
  });

wrapShip.destroyer = ({ isHorizontal }) =>
  Ship({
    isHorizontal,
    name: 'Destroyer',
  });

export default wrapShip;
