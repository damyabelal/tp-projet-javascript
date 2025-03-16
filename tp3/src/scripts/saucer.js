import Mobile from './mobile';
import saucerImg from './assets/images/flyingSaucer-petit.png';

export default class Saucer extends Mobile {

  constructor(x, y) {
    super(x, y, saucerImg, -3, 0);
  }

  move(game) {
    this.x += this.deltaX;
    if (this.x + this.image.width < 0) {
      game.removeSaucer(this); 
    }
  }
}


