
export default class Mobile {

    constructor(x, y, imgSource, dx = 0, dy = 0) {
        this.x = x;
        this.y = y;
        this.imgSource= imgSource;
        this.dx = dx;   
        this.dy = dy;

    }

draw(context) {
    const img = new Image();
    img.src = this.image;
    img.onload = () => {
        context.drawImage(img, this.x, this.y);
    };
}

move() {
    this.x += this.dx;
    this.y += this.dy;
}

}