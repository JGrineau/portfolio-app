import React, { useEffect, useRef } from 'react';
import './background.css';

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeHandler = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const setupCanvas = () => {
      canvas.width = width;
      canvas.height = height;
      resizeHandler();
    };

    window.addEventListener('resize', resizeHandler);
    window.addEventListener('load', setupCanvas);

    const balls = [];
    const numBalls = 200;

    class Ball {
      constructor(x, y, velx, vely, size, color) {
        this.x = x;
        this.y = y;
        this.velx = velx;
        this.vely = vely;
        this.size = size;
        this.color = color;
      }

      drawBall() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
      }

      updateBall() {
        if (this.x + this.size >= width || this.x - this.size <= 0) {
          this.velx = -this.velx;
        }

        if (this.y + this.size >= height || this.y - this.size <= 0) {
          this.vely = -this.vely;
        }
        this.x += this.velx * 0.5; // Adjust the multiplier to control the speed
        this.y += this.vely * 0.5; // Adjust the multiplier to control the speed
      }
    }

    function random(min, max) {
      const num = Math.floor(Math.random() * (max - min + 1)) + min;
      return num;
    }

    for (let i = 0; i < numBalls; i++) {
      const size = 1;
      const ball = new Ball(
        random(size, width - size),
        random(size, height - size),
        random(-0.1, 0.1), // Adjust the velocity range for slower horizontal movement
        random(-0.5, 0.5), // Adjust the velocity range for slower vertical movement
        size,
        'black'
      );
      balls.push(ball);
    }

    const loop = () => {
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < balls.length; i++) {
        balls[i].drawBall();
        balls[i].updateBall();
      }

      requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener('resize', resizeHandler);
      window.removeEventListener('load', setupCanvas);
    };
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default Background;
