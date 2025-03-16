export default class KeyManager {
   constructor() {
     this.up = false;
     this.down = false;
   }
 
   upPressed() {
     this.up = true;
   }
 
   upReleased() {
     this.up = false;
   }
 
   downPressed() {
     this.down = true;
   }
 
   downReleased() {
     this.down = false;
   }
 }
 