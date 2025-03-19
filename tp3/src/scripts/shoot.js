import Mobile from './mobile';
import shootImg from './assets/images/tir.png';

export default class Shoot extends Mobile {
  constructor(x, y) {
    super(x, y, shootImg, 8, 0);
  }
}