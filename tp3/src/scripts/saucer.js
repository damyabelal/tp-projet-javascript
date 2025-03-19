import Mobile from './mobile';
import saucerImg from './assets/images/flyingSaucer-petit.png';

export default class Saucer extends Mobile {

  constructor(x, y) {
    super(x, y, saucerImg, -3, 0);
    this.falling = false;
  }

  move(game) {
    this.x += this.deltaX;
    if (this.x + this.image.width < 0) {
      game.removeSaucer(this); 
    }
  }

  isFalling(){
    return this.falling;
  }
  
  fall() {
    this.falling = true;
    this.deltaX = 0;
    this.deltaY = -5; // 5 parceque on veut que la secoupe tombe vers le bas du coup on change sa cordonnée
  }

}


