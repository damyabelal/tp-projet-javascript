import Mobile from './mobile';
import saucerImg from './assets/images/flyingSaucer-petit.png';

export default class Saucer extends Mobile {

  constructor(x, y) {
    super(x, y, saucerImg, -3, 0);
    this.falling = false;
  }

  move(game) {
    this.x += this.deltaX;
    this.y += this.deltaY;
    if (this.x + this.image.width < 0) {
      game.removeSaucer(this); 
    }
    if (this.falling && this.y >= game.canvas.height - this.image.height) {
      game.removeSaucer(this);
    }
  }

  isFalling(){
    return this.falling;
  }
  
  fall() {
    this.falling = true;
    this.deltaX = 0;
    this.deltaY = 3; 
  }

}
