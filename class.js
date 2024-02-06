class Obj {

    frame = 1;
    timer = 0;

    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        var img = new Image();
        img.src = this.color;
        canvas.drawImage(img, this.x, this.y, this.width, this.height);
    }

    animation(name, limit){
        this.timer +=1;
        if (this.timer > 10) {
            this.timer = 0;
            this.frame +=1;
        }
        if (this.frame > limit) {
            this.frame = 1;
        }
        
        this.color = "assets/" + name + this.frame + ".PNG";
    }
}

class Alien extends Obj {
    dir_x = 0;
    dir_y = 0;
    lifes = 3;
    pts = 0;

    move() {
        this.x += this.dir_x;
        this.y += this.dir_y;
    }

    collide(obj){
        if (this.x < obj.x + obj.width && 
            this.x + this.width > obj.x &&
            this.y < obj.y + obj.height &&
            this.y + this.height > obj.y)
            {
                return true;
            }
            else {
                return false;
            }

    }

}

class Spacealien extends Obj {

    move() {
        this.y += 4;
        if (this.y > 620) {
            this.y = -50;
            this.x = Math.random() * (400 - 0);
        }
    }

    respaw() {
        this.y = -150;
        this.x = Math.random() * (200 - 0);

    }
}

class Bg extends Obj {

    move(speed, limit, position){
        this.y += speed;

        if(this.y > limit) {
            this.y = position;
        }
    }

}

class Brain extends Spacealien {

}

class Text {
    draw(text, x, y, color){
        canvas.font = "22px Arial";
        canvas.fillStyle = color;
        canvas.fillText(text, x, y);
    }
}

