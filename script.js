var canvas = document.getElementById('canvas').getContext("2d");

var bg = new Bg(0, 0, 350, 620, "assets/bg.jpg");
var brain = new Brain(0, 0, 30, 30, "assets/brain.PNG")
var bg2 = new Bg(0, -620, 350, 620, "assets/bg.jpg");
var alien = new Alien(100, 350, 50, 60, "assets/alien1.PNG");
var spacealien = new Spacealien(50, 50, 50, 50, "assets/spacealien.png");
var spacealien2 = new Spacealien(50, 50, 50, 50, "assets/spacealien2.png");

var text_points = new Text();
var text_lifes = new Text();
var gameover = new Text();

var play = true;

document.addEventListener("keydown", function (event) {
    if (event.key === "a") {
        alien.dir_x = -3;
    }
    if (event.key === "d") {
        alien.dir_x = 3;
    }
    if (event.key === "w") {
        alien.dir_y = -4;
    }
    if (event.key === "s") {
        alien.dir_y = 4;
    }
});

document.addEventListener("keyup", function (event) {
    if (event.key === "a") {
        alien.dir_x = 0;
    }
    if (event.key === "d") {
        alien.dir_x = 0;
    }
    if (event.key === "w") {
        alien.dir_y = 0;
    }
    if (event.key === "s") {
        alien.dir_y = 0;
    }
}
);

function collides() {
    if (alien.collide(spacealien)) {
        spacealien.respaw();
        alien.lifes -= 1;
    }

    if (alien.collide(spacealien2)) {
        spacealien2.respaw();
        alien.lifes -= 1;
    }

    if (alien.collide(brain)) {
        brain.respaw();
        alien.pts += 1;
    }
}

function gameOver() {
    if (alien.lifes <= 0) {
        play = false;
    }
}

function draw() {
    bg.draw();
    bg2.draw();
    if (play) {
        alien.draw();
        spacealien.draw();
        spacealien2.draw();
        brain.draw();
        text_points.draw(alien.pts, 170, 70, "white");
        text_lifes.draw(alien.lifes, 50, 70, "white");
    }
    else {
        gameover.draw("Game Over", 115, 310);
    }
        
}

function update() {
    bg.move(3, 620, 0);
    bg2.move(3, 0, -620);
    if (play) {
        alien.move();
        alien.animation("alien", 4);
        spacealien.move();
        spacealien2.move();
        brain.move();
        collides();
        gameOver();
    }
}

function main() {
    canvas.clearRect(0, 0, 350, 620);
    update();
    draw();
}

setInterval(main, 10);
