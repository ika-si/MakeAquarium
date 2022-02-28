function creatureKurage(img_, m, x, y, top, bottom) {
  this.img = img_;
  this.mass = m;
  this.pos = createVector(x,y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 5);

  // this.swimLine = random(sizeList[0]+100, sizeList[1]-100);
  this.swimLineTop = random(350, 450);
  this.swimLineBottom = random(600, 700);
  this.swimLineMiddle = (this.swimLineTop+this.swimLineBottom)/2;
  this.flag1 = false;
  this.flag2 = false;

  this.run = function() {
    this.changeDirection();
    this.update();
		this.checkEdges();
    this.display();
  }

  this.display = function() {
    image(this.img, this.pos.x, this.pos.y, this.img.width/12, this.img.height/12);
  };

  this.changeDirection = function() {
    if (this.swimLineBottom < this.pos.y && this.vel.y != 0) {
      this.vel = createVector(random(-0.5, 0.5), -2);
      this.flag1 = true;
      // console.log(1);
    }
    if (this.swimLineMiddle < this.pos.y && this.flag2) {
      this.vel.y = -1.5;
      this.flag1 = false;
      this.flag2 = false;
      // console.log(2);
    }
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  // Newton's 2nd law: F = M * A
  // or A = F / M
  this.applyForce = function(force) {
    if (sizeList[0] > this.pos.y || this.swimLineTop > this.pos.y) {
      var f = p5.Vector.div(force,this.mass);
      this.acc.add(f);
    }
    if(this.swimLineMiddle - 10 > this.pos.y && this.flag1) {
      var f = p5.Vector.div(force,this.mass);
      this.acc.add(f);
      this.flag2 = true;
      // console.log(0);
    }
  };

  this.checkEdges = function() {
    var r1 = ((sizeList[2]-sizeList[4])-(sizeList[2]-sizeList[3]))/(sizeList[1]-sizeList[0]);
    var r2 = -((sizeList[2]+sizeList[4])-(sizeList[2]+sizeList[3]))/(sizeList[0]-sizeList[1]);
    var b1 = (sizeList[2]-sizeList[3]) - r1 * sizeList[0];
    var b2 = (sizeList[2]+sizeList[4]) - r2 * sizeList[0];
    if (this.pos.x < r1 * this.pos.y + b1 + 30) {
      this.vel = createVector(random(0.1, 0.5), -1);
    }
    if (this.pos.x > r2 * this.pos.y + b2) {
      this.vel = createVector(random(-0.5, -0.1), -1);
    }

  };

}
