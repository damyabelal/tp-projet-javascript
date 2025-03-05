import Ball from './ball';

/* TYPE Animation */
export default class Animation {

  constructor(canvas) {
      this.canvas = canvas;
      this.context = canvas.getContext('2d');
      this.ball = new Ball(50,50);
      this.running = false;
      this.req = null;
    }


  

}
