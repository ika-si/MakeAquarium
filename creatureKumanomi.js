function creatureKumanomi(img_left, img_right, m, x, y) {
  this.img = img_left;
  this.imgLeft = img_left;
  this.imgRight = img_right;
  this.mass = m;
  this.pos = createVector(x,y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 5);

  this.swimLine = random(sizeList[0]+100, sizeList[1]-100);

  this.run = function() {
    this.changeDirection();
    this.update();
    this.display();
		this.checkEdges();
  }

  this.display = function() {
    image(this.img, this.pos.x, this.pos.y, this.img.width/12, this.img.height/12);
  };

  this.changeDirection = function() {
    if (this.swimLine < this.pos.y && this.vel.y != 0) {
      this.vel = createVector(-1, 0);
    }
    // console.log(this.vel);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  // Newton's 2nd law: F = M * A
  // or A = F / M
  this.applyForce = function(force) {
    if (this.swimLine > this.pos.y) {
      var f = p5.Vector.div(force,this.mass);
      this.acc.add(f);
    }
  };

  this.checkEdges = function() {
    var r1 = ((sizeList[2]-sizeList[4])-(sizeList[2]-sizeList[3]))/(sizeList[1]-sizeList[0]);
    var r2 = -((sizeList[2]+sizeList[4])-(sizeList[2]+sizeList[3]))/(sizeList[0]-sizeList[1]);
    var b1 = (sizeList[2]-sizeList[3]) - r1 * sizeList[0];
    var b2 = (sizeList[2]+sizeList[4]) - r2 * sizeList[0];
    if (this.pos.x < r1 * this.pos.y + b1 + 30) {
      this.vel = createVector(1, 0);
      this.img = this.imgRight;
    }
    if (this.pos.x > r2 * this.pos.y + b2) {
      this.vel = createVector(-1, 0);
      this.img = this.imgLeft;
    }

  };

}
