function Bubble(num) {
    this.bubbleNum = num;
    this.size = random(30, 150);
    this.pos = createVector(random(sizeList[2]-sizeList[3]+100, sizeList[2]+ sizeList[3]-100),sizeList[0]+100);
    this.vel = createVector(0, random(-0.8, -0.1));

    this.run = function() {
        this.update();
        this.checkEdges();
        this.display();
    }

    this.display = function() {
        if(this.bubbleNum == 0) {
            strokeWeight(5);
            // strokeCap(ROUND);
            noFill();
            stroke(255);
            drawingContext.setLineDash([1, 10]);
        } else if(this.bubbleNum == 1) {
            strokeWeight(5);
            // strokeCap(ROUND);
            fill("skyblue");
            stroke(255);
            drawingContext.setLineDash([1, 10]);
        } else if(this.bubbleNum == 2) {
            strokeWeight(5);
            // strokeCap(ROUND);
            noFill();
            stroke("blue");
            drawingContext.setLineDash([1, 10]);
        }

        ellipse(this.pos.x, this.pos.y, this.size, this.size);
    };

    this.update = function() {
        this.pos.add(this.vel);
    };

    this.checkEdges = function() {
        if(this.pos.y+100 < sizeList[0]) {
            this.pos.y = sizeList[1];
            this.size = random(30, 150);
            this.vel = createVector(0, random(-0.8, -0.1));
        }
    };
    
}
