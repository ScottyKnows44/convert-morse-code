class Vec {
  constructor(x = 0, y = 0)
  {
    this.x = x;
    this.y = y;
  }
}

class Rect {
  constructor (w, h) {
    this.pos = new Vec;
    this.size = new Vec(w, h)
  }

  // get left, right, top, bottom, allows use to access positions of the left, right, top, and bottom parts of the ball.
  get left() {
    return this.pos.x - this.size.x / 2;
  }

  get right() {
    return this.pos.x + this.size.x / 2;
  }

  get top() {
    return this.pos.y - this.size.y / 2;
  }

  get bottom () {
    return this.pos.y + this.size.y / 2;
  }
}

class Ball extends Rect {
  constructor () {
    super(10, 10);
    this.vel = new Vec
  }
}

class Player extends Rect {
  constructor() {
    super(20, 100);
    this.score = 0;
  }
}

class Pong {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    
    this.ball = new Ball;  //makes the ball

    this.players = [
      new Player,     //makes the 2 players
      new Player,
    ];

    this.players[0].pos.x = 40;   //take the player on the left and set the x-position = 40 
    this.players[1].pos.x = this.canvas.width - 40; //take the player on the right and move it all the way to the right of the canvas and - it by 40
    this.players.forEach(player => {
      player.pos.y = this.canvas.height / 2;    //puts them in the middle by taking ther height of the canvas and / it by 2
    });

    // use requestAnimationFrame to update the balls position, its a function that takes a callback, then requests a call for the next time the animation is ready to draw

    let lastTime;
    const callback = (millis) => {
      if (lastTime) {     
        this.update((millis - lastTime) / 1000);   //last time page was loaded, converts it into seconds
      }
      lastTime = millis;
      requestAnimationFrame(callback);
    };
      callback();

      this.reset()
  }

  //draw() draws the black canvas, the ball, and the two players

  draw() {
    this.context.fillStyle = '#000';
    this.context.fillRect(0,0, this.canvas.width, this.canvas.height);  
  
    this.drawRect(this.ball);
    this.players.forEach(player =>this.drawRect(player))
  }
  
    // this collide function makes it so if the ball hits the player it will reverse the x-vel
  collide(player, ball) {
    if (player.left < ball.right && player.right > ball.left && player.top < ball.bottom && player.bottom > ball.top) {
      ball.vel.x = -ball.vel.x
    }

  }
  //draws the ball
  drawRect(rect) {
    this.context.fillStyle = '#fff';
    this.context.fillRect( rect.left, rect.top, rect.size.x, rect.size.y);
  }

  reset() {
    this.ball.pos.x = 200;   //ball starting position at x and y
    this.ball.pos.y = 200;
    this.ball.vel.x = 300;   //ball velocity for x and y 
    this.ball.vel.y = 300;
  }

   update(dt) {

    // moves the ball
  
    this.ball.pos.x += this.ball.vel.x * dt;
    this.ball.pos.y += this.ball.vel.y * dt;
  
    // doesnt make the ball go off the screen
  
    if (this.ball.left < 0 || this.ball.right > this.canvas.width) {
      const playerId = this.ball.vel.x < 0 || 0;
      // this.players[playerId].score++;
      this.reset();
    }
  
    if (this.ball.top < 0 || this.ball.bottom > this.canvas.height) {
      this.ball.vel.y = -this.ball.vel.y;
    }

    this.players[1].pos.y = this.ball.pos.y; //makes the "computer" player always follow the ball 

    this.players.forEach(player => this.collide(player, this.ball)) //calls the collide function for each player making both be able to bounce the ball

    this.draw();  //calls the draw function
  }
}

const canvas = document.getElementById('pong');
const pong = new Pong(canvas);

// makes the user control the player on the left with the mouse
canvas.addEventListener('mousemove', event => {
  pong.players[0].pos.y = event.offsetY;
});