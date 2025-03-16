import Game from './game.js';

const init = () => {
   const canvas = document.getElementById("stars"); 
   const game = new Game(canvas);
   game.start();  

   window.addEventListener('keydown', game.keyDownActionHandler.bind(game));
   window.addEventListener('keyup', game.keyUpActionHandler.bind(game));
};

window.addEventListener("DOMContentLoaded", init);

console.log('Le bundle a été généré');
