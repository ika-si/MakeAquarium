function creatureTako(img_, m, x, y) {
  this.img = img_;
  this.mass = m;
  this.pos = createVector(x,y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 5);

  this.run = function() {
    this.update();
    this.display();
		this.checkEdges();
  }

  this.display = function() {
    image(this.img, this.pos.x, this.pos.y, this.img.width/8, this.img.height/8);
  };

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  // Newton's 2nd law: F = M * A
  // or A = F / M
  this.applyForce = function(force) {
    var f = p5.Vector.div(force,this.mass);
    this.acc.add(f);
  };

  this.checkEdges = function() {
    if (this.pos.y > sizeList[1]-2*this.img.height/8) {
      this.vel.y *= -0.9;  // A little dampening when hitting the bottom
      this.pos.y = sizeList[1]-2*this.img.height/8;
    }
  };

}
