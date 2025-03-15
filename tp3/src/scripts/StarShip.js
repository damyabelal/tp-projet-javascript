// starship.js
import Mobile from './mobile';

export default class StarShip extends Mobile {
  constructor(x, y, imageSrc = './assets/images/vaisseau-ballon-petit.png') {
    super(x, y, imageSrc, 0, 8); 
    this.moving = null;  
  }

  get up() {
    return this.moving === 'up';
  }

  get down() {
    return this.moving === 'down';
  }

  moveUp() {
    this.moving = 'up';
  }

  moveDown() {
    this.moving = 'down';
  }

  stopMoving() {
    this.moving = null; 
  }

  move(game) {
    if (this.up && this.y > 0) this.y -= this.deltaY;
    if (this.down && this.y < game.canvas.height - this.image.height) this.y += this.deltaY;
  }
}
