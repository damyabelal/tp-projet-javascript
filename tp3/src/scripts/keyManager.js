/*
   A KeyManager can be used to store the pressed keys.
   It provides accessors for left, right, up and down keys.
   Methods leftPressed()/leftReleased() must be called when left key is pressed or releasee.
   Simular methods exist for right, up and down.
*/
export default class KeyManager {
    #up; 
    #down;
 
    constructor() {
       this.#up = false;
       this.#down = false;
    }

    get up() {
       return this.#up;
    }
    set up(value) {
       this.#up = value;
    }
    upPressed() {
       this.#up = true;
    }
    upReleased() {
       this.#up = false;
    }
 
    get down() {
       return this.#down;
    }
    set down(value) {
       this.#down = value;
    }
    downPressed() {
       this.#down = true;
    }
    downReleased() {
       this.#down = false;
    }
 
    oneKeyPressed() {
       return this.#up || this.#down;
    }
    noKeyPressed() {
       return ! this.oneKeyPressed();
    }
    
 }