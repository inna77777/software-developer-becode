/** @format */

// Exercise 6.1
// class Circle {
//   constructor(xPos, yPos, radius) {
//     this.xPos = xPos;
//     this.yPos = yPos;
//     this.radius = radius;
//   }
//   move(xOffset, yOffset) {
//     this.xPos += xOffset;
//     this.yPos += yOffset;
//   }
//   get surface() {
//     return Math.PI * this.radius * this.radius;
//   }
// }

// const myCircle = new Circle(5, 10, 3);
// console.log(`Initial Position: (${myCircle.xPos}, ${myCircle.yPos})`);
// console.log(`Initial Surface Area: ${myCircle.surface}`);

// myCircle.move(4, -2);
// console.log(`New Position: (${myCircle.xPos}, ${myCircle.yPos})`);
// console.log(
//   `Surface Area after moving (should be the same): ${myCircle.surface}`
// );

// Exercise 6.2
class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }

    collides(otherRectangle) {
        return !(
            this.topLeftXPos + this.width < otherRectangle.topLeftXPos || 
            otherRectangle.topLeftXPos + otherRectangle.width < this.topLeftXPos ||
            this.topLeftYPos + this.length < otherRectangle.topLeftYPos || 
            otherRectangle.topLeftYPos + otherRectangle.length < this.topLeftYPos 
        );
    }
}

// const rect1 = new Rectangle(2, 2, 5, 5);
// const rect2 = new Rectangle(4, 4, 6, 6);
// const rect3 = new Rectangle(10, 10, 2, 2);

// console.log("Collision between rect1 and rect2:", rect1.collides(rect2)); // true
// console.log("Collision between rect1 and rect3:", rect1.collides(rect3)); // false

// Exercise 6.3

const generateRandomRectangles = (num) => {
  const rectangles = [];
  for (let i = 0; i < num; i++) {
    const topLeftXPos = Math.floor(Math.random() * 1000);
    const topLeftYPos = Math.floor(Math.random() * 1000);
    const width = Math.floor(Math.random() * 100);
    const length = Math.floor(Math.random() * 100);
    rectangles.push(new Rectangle(topLeftXPos, topLeftYPos, width, length));
  }
  return rectangles;
};

const findCollisions = (rectangles) => {
  const collisions = [];
  for (let i = 0; i < rectangles.length; i++) {
    for (let j = i + 1; j < rectangles.length; j++) {
      if (rectangles[i].collides(rectangles[j])) {
        collisions.push([i, j]); 
      }
    }
  }
  return collisions;
};

const rectangles = generateRandomRectangles(20);
const collisions = findCollisions(rectangles);

console.log("Colliding rectangle pairs:");
collisions.forEach(([i, j]) => {
  console.log(`Rectangle ${i} collides with Rectangle ${j}`);
});
