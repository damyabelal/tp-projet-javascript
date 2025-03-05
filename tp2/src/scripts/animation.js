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

    animate = () => {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ball.move(this.canvas);
      this.ball.draw(this.context);
      this.req = window.requestAnimationFrame(this.animate.bind(this));
    }

    startAndStop() {
      if (this.running) {
        window.cancelAnimationFrame(this.req);
        this.running = false;
      } else {
        this.running = true;
        this.req = window.requestAnimationFrame(this.animate.bind(this));
    }
    
    }
    


  

}
