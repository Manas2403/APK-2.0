class Platform {
  constructor() {
    this.position = {
      x: innerWidth / 2,
      y: innerHeight - this.height / 2,
    };
    this.width = innerWidth;
    this.height = 80;
  }
  createPlatform(matter) {
    return matter.makeBlock(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

const createPlatform = (matter) => {
  return matter.makeBlock(
    this.position.x,
    this.position.y,
    this.width,
    this.height
  );
};

export { createPlatform };
