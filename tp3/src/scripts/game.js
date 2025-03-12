
export default class Game {

   #canvas;
   #starship;

   constructor(canvas) {
      this.#canvas = canvas;
      this.#starship = this.#starship;
   }

   /** donne accès au canvas correspondant à la zone de jeu */
   get canvas() {
      return this.#canvas;
   }
}



