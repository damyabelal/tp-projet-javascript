
export default class Mobile {
    constructor(x, y, imageSrc, deltaX = 0, deltaY = 0) {
      this.x = x;
      this.y = y;
      this.image = new Image();
      this.image.src = imageSrc;
      this.deltaX = deltaX;
      this.deltaY = deltaY;
    }
  
    draw(context) {
      context.drawImage(this.image, this.x, this.y);
    }
  
    move() {
      this.x += this.deltaX;
      this.y += this.deltaY;
    }
  }
  