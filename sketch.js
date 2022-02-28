var myRec;
var img;
var creatureNameList;
var creatureTakoList;
var creatureKumanomiList;
var creatureKurageList;
var creatureHarisenbonList;
var liquid;
var bubble;
var flowfield;
var debug = true;
var sizeList = [100, 850, 720, 220, 190];

function setup() {
	createCanvas(1440, 900);
	imageMode(CENTER);
	fill(0, 0, 0, 255);

	liquid = new Liquid(0.1);
	bubble = [];
	for(var i = 0; i < 10; i++) {
		if(i%3 == 0) {
			bubble.push(new Bubble(0));
		} else if(i%3 == 1) {
			bubble.push(new Bubble(1));
		} else if(i%3 == 2) {
			bubble.push(new Bubble(2));
		}
	}

	// 動物の名前
	creatureNameList = ["タコ", "クマノミ", "クラゲ", "ハリセンボン"];

	creatureTakoList = [];
	creatureKumanomiList = [];
	creatureKurageList = [];
	creatureHarisenbonList = [];

}

function draw() {
	background(0);
	// 水槽
  	liquid.display();

	for(var i = 0; i < bubble.length; i++) {
		bubble[i].run();
	}
	fill(0);
	noStroke();
	rect(400, 795, 700, 100);
	rect(400, 0, 700, 110);

	// たこ
	for (var i = 0; i < creatureTakoList.length; i++) {

		// Is the Mover in the liquid?
	  	if (liquid.contains(creatureTakoList[i])) {
	    	// Calculate drag force
	    	var dragForce = liquid.calculateDrag(creatureTakoList[i]);
	    	// Apply drag force to Mover
	    	creatureTakoList[i].applyForce(dragForce);
	  	}

	  	// Gravity is scaled by mass here!
	  	var gravity = createVector(0, 0.1 * creatureTakoList[i].mass);
	  	// Apply gravity
	  	creatureTakoList[i].applyForce(gravity);
		creatureTakoList[i].run();

  	}

	// クマノミ
	for (var i = 0; i < creatureKumanomiList.length; i++) {

		// Is the Mover in the liquid?
		if (liquid.contains(creatureKumanomiList[i])) {
	    	// Calculate drag force
	    	var dragForce = liquid.calculateDrag(creatureKumanomiList[i]);
	    	// Apply drag force to Mover
	    	creatureKumanomiList[i].applyForce(dragForce);
	  	}

	  	// Gravity is scaled by mass here!
	  	var gravity = createVector(0, 0.1 * creatureKumanomiList[i].mass);
	  	// Apply gravity
	  	creatureKumanomiList[i].applyForce(gravity);
	  	creatureKumanomiList[i].run();

  	}

	// クラゲ
	for (var i = 0; i < creatureKurageList.length; i++) {
		// Is the Mover in the liquid?
		if (liquid.contains(creatureKurageList[i])) {
	    	// Calculate drag force
	    	var dragForce = liquid.calculateDrag(creatureKurageList[i]);
	    	// Apply drag force to Mover
	    	creatureKurageList[i].applyForce(dragForce);
	  	}

	  	// Gravity is scaled by mass here!
	  	var gravity = createVector(0, 0.1 * creatureKurageList[i].mass);
	  	// Apply gravity
	  	creatureKurageList[i].applyForce(gravity);
    	creatureKurageList[i].run();

  	}

	// ハリセンボン
	for (var i = 0; i < creatureHarisenbonList.length; i++) {

		// Is the Mover in the liquid?
		if (liquid.contains(creatureHarisenbonList[i])) {
	    	// Calculate drag force
	    	var dragForce = liquid.calculateDrag(creatureHarisenbonList[i]);
	    	// Apply drag force to Mover
	    	creatureHarisenbonList[i].applyForce(dragForce);
	  	}

	  	// Gravity is scaled by mass here!
	  	var gravity = createVector(0, 0.1 * creatureHarisenbonList[i].mass);
	  	// Apply gravity
	  	creatureHarisenbonList[i].applyForce(gravity);
	  	creatureHarisenbonList[i].run();

  	}

}

function showResult() {
	if(myRec.resultValue==true) {
		creatureName = myRec.resultString;
		// if(creatureNameList.indexOf(creatureName)) {
			// textSize(32);
			// fill(100);
			// textAlign(CENTER);
			// text(creatureName, width/2, height/4);

			judgeCreature(creatureName);
		// }
		console.log(myRec.resultString);
	}
}

function judgeCreature(name) {
	if(name == "タコ") {
		creatureTakoList.push(new creatureTako(img_tako, 1, random(width/2-200, width/2+150), 0));
	} else if(name == "クマノミ") {
		creatureKumanomiList.push(new creatureKumanomi(img_left_kumanomi, img_right_kumanomi, 1, random(width/2-200, width/2+150), 0));
	} else if(name == "クラゲ") {
		creatureKurageList.push(new creatureKurage(img_kurage, 0.9, random(width/2-200, width/2+150), 0));
	} else if(name == "ハリセンボン") {
		creatureHarisenbonList.push(new creatureHarisenbon(img_left_harisenbon, img_right_harisenbon, 0.5, random(width/2-200, width/2+150), 0));
	}
	// creatureTakoList.push(new creatureTako(img_tako, 1, random(width/2-200, width/2+150), height/4));
	// creatureKumanomiList.push(new creatureKumanomi(img_left_kumanomi, img_right_kumanomi, 1, random(width/2-200, width/2+150), height/4));
  	// creatureKurageList.push(new creatureKurage(img_kurage, 0.9, random(width/2-200, width/2+150), height/4));
	// creatureHarisenbonList.push(new creatureHarisenbon(img_left_harisenbon, img_right_harisenbon, 0.5, random(width/2-200, width/2+150), height/4));
}

function mouseClicked() {
	myRec = new p5.SpeechRec(); // new P5.SpeechRec object
	myRec.onResult = showResult;
	myRec.start();
	// judgeCreature("test");
}

function preload() {

	// // たこ
	img_tako = loadImage("./images/tako.png");
	// クマノミ
	img_left_kumanomi = loadImage("./images/left_kumanomi.png");
	img_right_kumanomi = loadImage("./images/right_kumanomi.png");
	// クラゲ
	img_kurage = loadImage("./images/kurage.png");
	// ハリセンボン
	img_left_harisenbon = loadImage("./images/left_harisenbon.png");
	img_right_harisenbon = loadImage("./images/right_harisenbon.png");

	// img = loadImage("");
}

function keyPressed() {
  if (key == ' ') {
    debug = !debug;
  }
}
