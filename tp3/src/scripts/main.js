// Importation de la classe Game
import Game from './game.js';

const init = () => {
   const canvas = document.getElementById("stars"); // Assurez-vous que l'ID correspond bien à votre canvas
   const game = new Game(canvas);

   game.start();  
};

window.addEventListener("DOMContentLoaded", init);

console.log('Le bundle a été généré');
