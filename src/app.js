import "./libraries/p5.min";
import "./libraries/matter.min";
import "./libraries/p5-matter";

console.log("app.js");
const width = Math.max(innerWidth, innerHeight);
class Platform {
  constructor() {
    this.width = width * 6;
    this.height = 80;

    this.position = {
      x: this.width / 2,
      y: innerHeight - this.height / 2,
    };
  }
  createPlatform(matter) {
    return matter.makeBlock(
      this.position.x,
      this.position.y,
      this.width,
      this.height,
      {
        isStatic: true,
        restitution: 0,
      }
    );
  }
}

class Player {
  constructor() {
    this.width = 70;
    this.height = 70;

    this.position = {
      x: innerWidth / 3,
      y: innerHeight / 2,
    };
    this.velocity = {
      x: 5,
      y: 10,
    };
  }
  createPlayer(matter) {
    return matter.makeBall(
      this.position.x,
      this.position.y,
      this.width,
      this.height,
      {
        friction: 0,
        restitution: 1,
        mass: 10,
        force: 1,
      }
    );
  }
}

let platform,
  platformObj = new Platform();

let player,
  playerObj = new Player();

let bg, platformBg;

let multiplier;

let blocks = [];

const welcomePhrase = "Welcome to the world of APK 2022";

const random = (smallestValue, largestValue) => {
  return Math.floor(Math.random() * largestValue) + 1 + smallestValue;
};

function preload() {
  bg = loadImage("./../assets/img/bg-game.svg");
  platformBg = loadImage("./../assets/img/platform.svg");
  retroFont = loadFont("./../assets/fonts/ARCADECLASSIC.TTF");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  noStroke();

  matter.init();
  matter.changeGravity(0, 2);

  player = playerObj.createPlayer(matter);
  platform = platformObj.createPlatform(matter);

  for (let i = 0; i < welcomePhrase.length; i++) {
    if (welcomePhrase[i] === " ") {
      multiplier = width / 1.2;
    } else {
      multiplier = width / 5;
    }
    var welcomeBlock = matter.makeBlock(
      width / 1.8 + i * multiplier,
      random(0, innerHeight / 2),
      100,
      100,
      {
        friction: 0.2,
        restitution: 0,
        mass: 0.1,
      }
    );
    welcomeBlock.color = (random(0, 255), random(0, 255), random(0, 255));
    blocks.push(welcomeBlock);
  }
}

function draw() {
  background(bg);
  fill(255, 243, 176);
  player.show();

  image(
    platformBg,
    platform.getPositionX() - platformObj.width / 2,
    platform.getPositionY() - platformObj.height / 2,
    platformObj.width,
    platformObj.height
  );

  noFill();
  platform.show();

  for (let i = 0; i < welcomePhrase.length; ++i) {
    textSize(60);

    fill(0, 102, 153);
    textAlign(CENTER, CENTER);
    textFont(retroFont);
    text(
      welcomePhrase[i],
      blocks[i].getPositionX(),
      blocks[i].getPositionY() - 100
    );

    blocks[i].show();

    let blockPosition = blocks[i].getPositionX();

    if (player.getPositionX() > window.innerWidth * 0.1) {
      blocks[i].setPositionX(blockPosition - playerObj.velocity.x);
    }
  }

  let platformPosition = platform.getPositionX();

  if (player.getPositionX() > window.innerWidth * 0.1) {
    platform.setPositionX(platformPosition - playerObj.velocity.x);
  }
}

addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    if (player.body.position.y >= innerHeight / 2) {
      player.setVelocityY(-playerObj.velocity.y);
      if (player.getPositionX() < innerWidth / 2)
        player.setVelocityX(playerObj.velocity.x / 3);
    }
  }
});
addEventListener("touchstart", () => {
  if (player.body.position.y >= innerHeight / 2) {
    player.setVelocityY(-playerObj.velocity.y);
    if (player.getPositionX() < innerWidth / 2)
      player.setVelocityX(playerObj.velocity.x / 3);
  }
});

// addEventListener("resize", () => {
//   location.reload();
// });
