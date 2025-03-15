
import StarShip from './StarShip';

export default class Game {
  constructor(canvasId) {
    this.canvas = canvasId;
    this.context = this.canvas.getContext('2d');
    this.starship = new StarShip(40, this.canvas.height / 2);  
    this.req = null;
  }

  animate() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); 

    this.starship.move(this.canvas); 
    this.starship.draw(this.context); 

    this.req = window.requestAnimationFrame(this.animate.bind(this)); 
  }

  start() {
    this.animate(); 
  }

  stop() {
    window.cancelAnimationFrame(this.req); 
  }
}
