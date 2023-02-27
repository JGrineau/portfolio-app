import React from 'react'
import './background.css'


const Background = () => {
  const canvas = document.querySelector("canvas");

// gets the width and height of browser viewport
const width = window.innerWidth;
const height = window.innerHeight;

//   set the width and height of canvas equal to browser viewport
canvas.width = width;
canvas.height = height;

//   call the getContext method to draw 2d shape
const ctx = canvas.getContext("2d");

// create Ball class
class Ball {
  constructor(x, y, velx, vely, size, color) {
    this.x = x; // horizontal position of the ball
    this.y = y; // vertical position of the ball
    this.velx = velx; // velocity x added to coordinate x when we animate our ball
    this.vely = vely; // velocity y added to coordinate y
    this.size = size; // size is a radius of the ball
    this.color = color; // fill ball shape with given color
  }

  // create draw func
  drawBall() {
    ctx.beginPath(); // start drawing
    ctx.fillStyle = this.color; 
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill(); // finish drawing
  }

  // create update func
  updateBall() {
    if (this.x + this.size >= width || this.x - this.size <= 0) {
      this.velx = -this.velx;
    }

    if (this.y + this.size >= height || this.y - this.size <= 0) {
      this.vely = -this.vely;
    }
    this.x += this.velx;
    this.y += this.vely;
  }
}

//   create random number generator func
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

const balls = [];

while (balls.length < 300) {
  let size = 1;
  const ball = new Ball(
    random(size, width - size),
    random(size, height - size),
    random(-0.5, 0.5),
    random(-1, 1),
    size,
    `black`
  );

  balls.push(ball);
}

//   create loop func
function loop() {
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, width, height);

  // run necessary func
  for (let i = 0; i < balls.length; i++) {
    balls[i].drawBall();
    balls[i].updateBall();
  }
  requestAnimationFrame(loop);
}

loop();

  return (
    <div>
      <canvas></canvas>
      
    </div>
  )
}

export default Background

