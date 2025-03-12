import Ball from './ball';           // Peut être commenté après Ex1 Q2
import Animation from './animation';

import './assets/style/style-balles.css';

/* setup */
const init = () => {
  const canvas = document.getElementById("terrain");

  // commenter les 2 lignes suivantes après Ex1 Q2
  // const ball = new Ball(50,50);
  // document.getElementById("stopStartBall").addEventListener("click", () => ball.draw(canvas.getContext('2d')));

  const animation = new Animation(canvas);
  document.getElementById("stopStartBall").addEventListener("click", () => animation.startAndStop());

  document.getElementById("addBall").addEventListener("click", () => animation.addBall());
}

window.addEventListener("DOMContentLoaded", init);

//
console.log('le bundle a été généré');
