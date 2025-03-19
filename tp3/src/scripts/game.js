import StarShip from './StarShip.js';
import KeyManager from './keyManager.js';
import Saucer from './saucer.js';
import Shoot from './shoot.js';

export default class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.starship = new StarShip(40, this.canvas.height / 2);  
    this.saucers = [];
    this.req = null;
    this.keyManager = new KeyManager();
    this.shoots = [];
    this.score = 0;
  }

  animate() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); 

    // gestion des touches up et down
    if (this.keyManager.up){
      this.starship.moveUp();
    }
    else if (this.keyManager.down) {
      this.starship.moveDown();
    }
    else { 
      this.starship.stopMoving();
    }

    // gestion des tirs
    this.shoots = this.shoots.filter(shoot => { 
      const saucerHit = shoot.findCollision(this.saucers);
      if (saucerHit) {
        saucerHit.fall(); 
        this.score += 200; 
        this.updateScore();
        return false; 
      }
      return shoot.x < this.canvas.width; 
    });

    // on move , dessine les tirs
    this.shoots.forEach(shoot => {
      shoot.move();
      shoot.draw(this.context);
    });

    // on move , dessine les soucoupes
    this.saucers.forEach(saucer => {
      saucer.move(this);
      saucer.draw(this.context);
    });

    // on move , dessine le vaissau
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

  /*animateSaucer() {
    setInterval(() => {
      const y = Math.random() * (this.canvas.height - 50); 
      const saucer = new Saucer(this.canvas.width, y);  
      this.saucers.push(saucer);
    }, 2000); // genre on fait apparaitre un saucer chaque 2 secondes ce qui explique l'utilisation de 2000 dans le setInterval
  }
  */

  addSaucer() {
    const y = Math.random() * (this.canvas.height - 50); 
    const saucer = new Saucer(this.canvas.width, y);  
    this.saucers.push(saucer);
  }

  removeSaucer(saucer) {
    this.saucers = this.saucers.filter(s => s !== saucer);
  }

  fire() {
    const shoot = new Shoot(this.starship.x + this.starship.image.width, this.starship.y + this.starship.image.height / 2);
    this.shoots.push(shoot);
  }

  updateScore() {
    document.getElementById("score").textContent = this.score;
  }

  keyDownActionHandler(event) {
    switch (event.key) {
      case "ArrowUp":
      case "Up":
        this.keyManager.upPressed();
        break;
      case "ArrowDown":
      case "Down":
        this.keyManager.downPressed();
        break;
      case " ":
        this.fire();
        break;
      default:
        return;
    }
    event.preventDefault();
  }

  keyUpActionHandler(event) {
    switch (event.key) {
      case "ArrowUp":
      case "Up":
        this.keyManager.upReleased();
        break;
      case "ArrowDown":
      case "Down":
        this.keyManager.downReleased();
        break;
      default: return;
    }
    event.preventDefault();
  }
}

