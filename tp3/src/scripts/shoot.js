import Mobile from './mobile';
import shootImg from './assets/images/tir.png';

export default class Shoot extends Mobile {
  constructor(x, y) {
    super(x, y, shootImg, 8, 0);
  }

  collisionWith(mobile) {
    const p1x = Math.max(this.x, mobile.x);
    const p1y = Math.max(this.y, mobile.y);
    const p2x = Math.min(this.x + this.image.width, mobile.x + mobile.image.width);
    const p2y = Math.min(this.y + this.image.height, mobile.y + mobile.image.height);
    return p1x < p2x && p1y < p2y;
}

  findCollision(saucers) {
    return saucers.find(saucer => !saucer.isFalling() && this.collisionWith(saucer));

  }

}


