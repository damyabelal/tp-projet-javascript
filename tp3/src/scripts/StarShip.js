import Mobile from "./mobile";

export default class StarShip extends Mobile {
    constructor(x, y) {
        const imgSource = "src/scripts/assets/images/vaisseau-ballon-petit.png";
        const dx = 0;
        const dy = 8;
        super(x, y, imgSource, dx, dy);
        this.moving = "immobile"; // up, down, immobile
    }



}