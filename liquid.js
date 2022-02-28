function Liquid(c) {
  this.top = sizeList[0];
  this.bottom = sizeList[1];
  this.center = sizeList[2];
  this.w_top = sizeList[3];
  this.w_bottom = sizeList[4];
  this.c = c;

  // Is the Mover in the Liquid?
  this.contains = function(m) {
    var l = m.pos;
    return l.x > this.center-this.w_bottom && l.x < this.center+this.w_bottom &&
           l.y > this.top && l.y < this.bottom;
  };

  // Calculate drag force
  this.calculateDrag = function(m) {
    // Magnitude is coefficient * speed squared
    var speed = m.vel.mag();
    var dragMagnitude = this.c * speed * speed;

    // Direction is inverse of velocity
    var dragForce = m.vel.copy();
    dragForce.mult(-1);

    // Scale according to magnitude
    dragForce.setMag(dragMagnitude);
    return dragForce;
  }

  this.display = function() {
    // 水槽の描写
  	strokeWeight(5);
  	strokeCap(ROUND);
  	stroke(0);
  	// drawingContext.setLineDash([1, 10]);
  	fill(192, 255, 192);


  	let gradientStroke = drawingContext.createLinearGradient(
  		width * 0.1,
  		height * 0.1,
  		width * 0.1,
  		height * 1.0
  	);
    
  	gradientStroke.addColorStop(0, color(0, 255, 255));
  	gradientStroke.addColorStop(0.6, color(170, 200, 255));
  	gradientStroke.addColorStop(1, color(150, 200, 255));
    
  	drawingContext.fillStyle = gradientStroke;

  	quad(this.center-this.w_top, this.top, this.center-this.w_bottom, this.bottom, this.center+this.w_bottom, this.bottom, this.center+this.w_top, this.top);
  }
}
