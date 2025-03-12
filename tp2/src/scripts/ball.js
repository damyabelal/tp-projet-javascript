
// la source de l'image à utiliser pour la balle
import ballImgSrc from './assets/images/ball.png';

/* TYPE Ball */
export default class Ball {

  static BALL_WIDTH = 48;
  static BALL_HEIGHT = 48;

  constructor(x, y, deltaX = +3, deltaY = -2) {
    this.image = this.#createImage(ballImgSrc);
    this.x = x;
    this.y = y;
    this.deltaX = deltaX;
    this.deltaY = deltaY;

  }

  move(canvas) {
    if (this.x + this.deltaX < 0 ||this.x +this.deltaX + Ball.BALL_WIDTH > canvas.width) {
      this.deltaX = -this.deltaX;
    }
    if (this.y + this.deltaY < 0 ||this.y + this.deltaY + Ball.BALL_HEIGHT > canvas.height) {
      this.deltaY = -this.deltaY;
    }
    this.x += this.deltaX;
    this.y += this.deltaY;
  }

  /* draw this ball, using the given drawing 2d context */
  draw(context) {
    // alert('vous devez coder la méthode draw() de Ball');
    context.drawImage(this.image, this.x, this.y);
  }


  /* crée l'objet Image à utiliser pour dessiner cette balle */
  #createImage(imageSource) {
	  const newImg = new Image();
  	newImg.src = imageSource;
  	return newImg;
  }
  get width() {
    return this.image.width;
  }
  get height() {
    return this.image.height;
  }

}

collisionWith(obstacle) {
  let x1 = this.x;
  let y1 = this.y;
  let x2 = this.x + this.width;
  let y2 = this.y + this.height;

  let x1Obstacle = obstacle.x;
  let y1Obstacle = obstacle.y;
  let x2Obstacle = obstacle.x + obstacle.width;
  let y2Obstacle = obstacle.y + obstacle.height;

  let p1X = Math.max(x1, x1Obstacle);
  let p1Y = Math.max(y1, y1Obstacle);
  let p2X = Math.min(x2, x2Obstacle);
  let p2Y = Math.min(y2, y2Obstacle);
  
  return p1X < p2X && p1Y < p2Y;
}


