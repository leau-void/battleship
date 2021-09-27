import Ship from './Ship';
import './Ship.css';

const wrapCreateShips = () => [
  Ship({
    isHorizontal: false,
    name: 'Carrier',
  }),

  Ship({
    isHorizontal: false,
    name: 'Battleship',
  }),

  Ship({
    isHorizontal: false,
    name: 'Cruiser',
  }),

  Ship({
    isHorizontal: false,
    name: 'Submarine',
  }),

  Ship({
    isHorizontal: false,
    name: 'Destroyer',
  }),
];

export default wrapCreateShips;
