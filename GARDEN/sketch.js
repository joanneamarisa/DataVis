let table, fullDate, day, today, listLength, Ground, flowerSpacing;
let DayCount;

let JoCount = 0;
let MomCount = 0;

let leafA, leafB;

var song;
var button;
var leafJo, leafMom, questionJo, questionMom, loveJo, loveMom, careMom, prayJo, prayMom;

let y = 0;

let leafCoordinates = []; // ARRAYS for coordinates
let careCoordinates = [];
let QCoordinates = [];
let loveCoordinates = [];
let prayCoordinates = [];
let flowerJoCoordinates = [];
let flowerMomCoordinates = [];

function preload() {
    // this is the 'materials' setup will need to work with before it actually works

  table = loadTable('datagardenB.csv', 'csv', 'header');
  leafJo = loadImage('elements-02.svg');
  leafMom = loadImage('elements-01.svg');
  questionJo = loadImage('elements-06.svg');
  questionMom = loadImage('elements-03.svg');
  loveJo = loadImage('elements-07.svg');
  loveMom = loadImage('elements-04.svg');
  careMom = loadImage('elements-05.svg');
  prayJo = loadImage('elements-10.svg');
  prayMom = loadImage('elements-09.svg');
  soundFormats('mp3');
  song = loadSound('Edelweiss(instrumental).mp3');
button = createButton('Play song');
  button.position(windowWidth-300, 105);
  button.mousePressed(togglePlaying);
}

function setup() {

  listLength = (table.getRowCount());
  createCanvas(windowWidth, windowHeight);

  frameRate(25);
  fullDate = (table.get(1, 'DATE'));
  day = fullDate.substring(0, 2);
  today = day;

}


function draw() {
  
  clear();
  
  //BACKGROUND & TITLES
  background(245, 245, 220);
  push();
  textFont('garamond', 25);
  fill(0);
  text('A Garden of my Mothers Concerns', 60, 60);
  let subhead = 'is a visual representation of a mother-daughter conversation. Welcome to this space. This is a data visualisation of WhatsApp text messages shared between my mother and I, spanned across thirty days (March-April 2020). Hover anywhere over the garden to see what each element represents!';
  fill(0);
  textFont('garamond', 15);
  text(subhead, 60, 80, 375, 150);
  text('Song: Edelweiss by Irwin Kostal Press space to play!', windowWidth-300, 60, 225,200);
  let name = 'Joanne Amarisa (S3652802) Visualising Data Through Art RMIT University 2020'
  text(name, windowWidth-300, Ground-90, 200,100);
  pop();


  // THIS IS THE GROUND
  stroke(108, 78, 66, 140);
  strokeWeight(4);
  Ground = windowHeight - 70;
  line(0, Ground, windowWidth + 200, Ground);

  
  // HERE, WE BREAK UP THE ROWS AND DATES:
  
  for (let i = 1; i < listLength; i++) {
    fullDate = (table.get(i, 'DATE'));
    day = fullDate.substring(0, 2);

    
    //THESE ARE THE FLOWERS

    if (today != day) {
      push();
      let Flowerx = today * flowerSpacing;
      let Flowery = Ground - y - 30;

      
      //THESE ARE THE COLOURS OF THE FLOWERS

      if (JoCount >= (MomCount + JoCount) / 2) {
        translate(Flowerx, Flowery);
        scale(0.2);

        let Random = random(3, 3.1);
        let JoFlower = beginShape(LINES);
        for (let a = 0; a < 360; a += Random) {
          let FX = 100 * sin(a);
          let fx = 100 * cos(a);
          let FY = 100 * cos(a);
          let fy = 100 * sin(a);
          stroke(255, 80, 30);
          line(0, 0, FX * 1.5, FY * 1.5);
          stroke(255);
          strokeWeight(3);
          vertex(fx * 0.7, fy * 0.7);
        }
        endShape();

        pop();
        
         if (!checkFlowerJoCoordinates(Flowerx,Flowery)) {
				
				let flowerJoObject = {
					x: Flowerx,
					y: Flowery
				}
				flowerJoCoordinates.push(flowerJoObject);
			}   

      } else if (MomCount >= (MomCount + JoCount) / 2) {

        translate(Flowerx, Flowery);
        scale(0.2);

        let Random = random(5.3, 5.5);
        beginShape(LINES);
        for (let a = 0; a < 360; a += Random) {
          let FX = 100 * sin(a);
          let fx = 100 * cos(a);
          let FY = 100 * cos(a);
          let fy = 100 * sin(a);
          stroke(255, 200, 0);
          line(0, 0, FX * 1.5, FY * 1.5);
          stroke(255);
          strokeWeight(3);
          vertex(fx * 0.7, fy * 0.7);
        }
        endShape();

        pop();
        
        if (!checkFlowerMomCoordinates(Flowerx,Flowery)) {
				
				let flowerMomObject = {
					x: Flowerx,
					y: Flowery
				}
				flowerMomCoordinates.push(flowerMomObject);
			}   


      } else if (JoCount == MomCount) {

        translate(Flowerx, Flowery);
        scale(0.2);

        let Random = random(9, 9.05);

        beginShape(LINES);
        for (let a = 0; a < 360; a += Random) {
          let FX = 100 * sin(a);
          let fx = 100 * cos(a);
          let FY = 100 * cos(a);
          let fy = 100 * sin(a);
          stroke(0);
          line(0, 0, FX * 1.5, FY * 1.5);
          stroke(255);
          strokeWeight(3);
          vertex(fx * 0.7, fy * 0.7);
        }
        endShape();

        pop();

      }

      y = 0;
      JoCount = 0;
      MomCount = 0;
      today = day;
      
    }

    // THIS IS THE STEM, BROKEN BY EVERY LEAF
    let lineY = Ground - y;
    flowerSpacing = 48;
    stroke(94, 119, 3);
    strokeWeight(1.5);
    line((day * flowerSpacing), lineY, (day * flowerSpacing), lineY - 40);

    // "y" IS HEIGHT BETWEEN EACH LEAF
    y += 7.5;

    // THESE ARE THE NUMBER LABELS ON THE GROUND
    push();
    noStroke();
    fill(94,119,3);
    text(day, (today * flowerSpacing), (Ground + 30));
    pop();
    
    //THESE ARE YOUR LEAVES
    
    let Joanne = (table.get(i, 4));
    
    if (Joanne === 'TRUE') {
      JoCount++;
      fill(255);
      noStroke();
      // JO'S TEXTS GO LEFT 
      image(leafJo, day * flowerSpacing - 15, Ground - y, 15, 15);
  
      if (!checkLeafCoordinates(day * flowerSpacing - 15, Ground - y)) {
				
				let leafObject = {
					x: day * flowerSpacing - 15,
					y: Ground - y
				}
				leafCoordinates.push(leafObject);
			}

    } else {
      MomCount++
      fill(255);
      noStroke();
      // MOM'S TEXTS GO RIGHT
      image(leafMom, day * flowerSpacing, Ground - y, 15, 15);
      
      if (!checkLeafCoordinates(day * flowerSpacing, Ground - y)) {
				
				let leafObject = {
					x: day * flowerSpacing,
					y: Ground - y
				}
				leafCoordinates.push(leafObject);
			}   
    }

    // TAKE CARE: PURPLE FLOWERS
    let TakeCare = (table.get(i, 11));
    if (TakeCare === 'TRUE') {
      image(careMom, day * flowerSpacing, Ground - y, 18, 18);
      
       if (!checkCareCoordinates(day * flowerSpacing, Ground - y)) {
				
				let careObject = {
					x: day * flowerSpacing,
					y: Ground - y
				}
				careCoordinates.push(careObject);
			}   
    }

    // QUESTIONS: ORANGE FLOWERS
    let JQuestions = (table.get(i, 6));
    let MQuestions = (table.get(i, 12));
    if (JQuestions === 'TRUE') {
      image(questionJo, day * flowerSpacing - 18, Ground - y, 18, 18);
      
        if (!checkQCoordinates(day * flowerSpacing-18, Ground - y)) {
				
				let QObject = {
					x: day * flowerSpacing-18,
					y: Ground - y
				}
				QCoordinates.push(QObject);
			}   
    } else if (MQuestions === 'TRUE') {
      image(questionMom, day * flowerSpacing, Ground - y, 18, 18);
      if (!checkQCoordinates(day * flowerSpacing, Ground - y)) {
				
				let QObject = {
					x: day * flowerSpacing,
					y: Ground - y
				}
				QCoordinates.push(QObject);
			}   
    }

    // LOVE: PINK FLOWERS
    let JLove = (table.get(i, 7));
    let MLove = (table.get(i, 13));
    if (JLove === 'TRUE') {
      image(loveJo, day * flowerSpacing - 18, Ground - y, 18, 18);
      
      if (!checkLoveCoordinates(day * flowerSpacing-18, Ground - y)) {
				
				let loveObject = {
					x: day * flowerSpacing-18,
					y: Ground - y
				}
				loveCoordinates.push(loveObject);
			}   
      
    } else if (MLove === 'TRUE') {
      image(loveMom, day * flowerSpacing, Ground - y, 18, 18);
      
      if (!checkLoveCoordinates(day * flowerSpacing, Ground - y)) {
				
				let loveObject = {
					x: day * flowerSpacing,
					y: Ground - y
				}
				loveCoordinates.push(loveObject);
			}   
    }

    // PRAYERS: BLUE FLOWERS
    let JPray = (table.get(i, 8));
    let MPray = (table.get(i, 14));
    if (JPray === 'TRUE') {
      image(prayJo, day * flowerSpacing - 18, Ground - y, 18, 18);
      
      if (!checkPrayCoordinates(day * flowerSpacing-18, Ground - y)) {
				
				let prayObject = {
					x: day * flowerSpacing-18,
					y: Ground - y
				}
				prayCoordinates.push(prayObject);
			}   
    } else if (MPray === 'TRUE') {
      image(prayMom, day * flowerSpacing, Ground - y, 18, 18);
      
          if (!checkPrayCoordinates(day * flowerSpacing, Ground - y)) {
				
				let prayObject = {
					x: day * flowerSpacing,
					y: Ground - y
				}
				prayCoordinates.push(prayObject);
			} 
    }
  }
  
  HoverA(mouseX,mouseY);
  HoverB(mouseX,mouseY);
  HoverC(mouseX,mouseY);
  HoverD(mouseX,mouseY);
  HoverE(mouseX,mouseY);
  HoverF(mouseX,mouseY);
  HoverG(mouseX,mouseY);
  
 HoverDate(mouseX,mouseY);

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


//BELOW ARE HOVER FUNCTIONS

function HoverDate(mx, my) {
	let withinRadius = false;
	
	if (my > Ground && my < windowHeight) {
			withinRadius = true;
		}
	
	if (withinRadius) {
		let textFill = 255;
		fill(0, textFill);
		text('Every flower represents a day of dialogue', mouseX, mouseY);
	} else {textFill = 0;}

}

function checkLeafCoordinates(mx, my) {
	for (let i = 0; i < leafCoordinates.length; i++) {
		let leaf = leafCoordinates[i];
		if (leaf.x === mx && leaf.y === my) {
			return true;
		}
	}
	return false;
}

function HoverA(mx, my) {
	let withinRadius = false;
	let extraRadius = 15; // this is the hover area radius
	for (let i = 0; i < leafCoordinates.length; i++) {
		let leaf = leafCoordinates[i];
		if (mx > leaf.x - extraRadius && mx < leaf.x + extraRadius && my > leaf.y - extraRadius && my < leaf.y + extraRadius) {
			withinRadius = true;
			break;
		}
	}
	if (withinRadius) {
		let textFill = 255;
		
		fill(0, textFill);
		text('- A LEAF represents a text message*', mouseX, mouseY);
        text('*Leaves growing to the left represent my text message, and the right represent my mothers.', 60, 200);
	} else {textFill = 0;}

}

function checkCareCoordinates(mx, my) {
	for (let i = 0; i < careCoordinates.length; i++) {
		let care = careCoordinates[i];
		if (care.x === mx && care.y === my) {
			return true;
		}
	}
	return false;
}

function HoverB(mx, my) {
	let withinRadius = false;
	let extraRadius = 10; 
	for (let i = 0; i < careCoordinates.length; i++) {
		let care = careCoordinates[i];
		if (mx > care.x - extraRadius && mx < care.x + extraRadius && my > care.y - extraRadius && my < care.y + extraRadius) {
			withinRadius = true;
			break;
		}
	}
	if (withinRadius) {
		let textFill = 255;
		
		fill(0, textFill);
		text('- A PURPLE FLOWER is a message of "take care!"', mouseX, mouseY+20);
	} else {textFill = 0;}

}

function checkQCoordinates(mx, my) {
	for (let i = 0; i < QCoordinates.length; i++) {
		let Q = QCoordinates[i];
		if (Q.x === mx && Q.y === my) {
			return true;
		}
	}
	return false;
}

function HoverC(mx, my) {
	let withinRadius = false;
	let extraRadius = 10; 
	for (let i = 0; i < QCoordinates.length; i++) {
		let Q = QCoordinates[i];
		if (mx > Q.x - extraRadius && mx < Q.x + extraRadius && my > Q.y - extraRadius && my < Q.y + extraRadius) {
			withinRadius = true;
			break;
		}
	}
	if (withinRadius) {
		let textFill = 255;
		
		fill(0, textFill);
		text('- AN ORANGE FLOWER represents a question asked', mouseX, mouseY+20);
	} else {textFill = 0;}

}

function checkLoveCoordinates(mx, my) {
	for (let i = 0; i < loveCoordinates.length; i++) {
		let love = loveCoordinates[i];
		if (love.x === mx && love.y === my) {
			return true;
		}
	}
	return false;
}

function HoverD(mx, my) {
	let withinRadius = false;
	let extraRadius = 10; 
	for (let i = 0; i < loveCoordinates.length; i++) {
		let love = loveCoordinates[i];
		if (mx > love.x - extraRadius && mx < love.x + extraRadius && my > love.y - extraRadius && my < love.y + extraRadius) {
			withinRadius = true;
			break;
		}
	}
	if (withinRadius) {
		let textFill = 255;
		
		fill(0, textFill);
		text('- A PINK FLOWER represents a message of love', mouseX, mouseY+20);
	} else {textFill = 0;}

}

function checkPrayCoordinates(mx, my) {
	for (let i = 0; i < prayCoordinates.length; i++) {
		let pray = prayCoordinates[i];
		if (pray.x === mx && pray.y === my) {
			return true;
		}
	}
	return false;
}

function HoverE(mx, my) {
	let withinRadius = false;
	let extraRadius = 10; 
	for (let i = 0; i < prayCoordinates.length; i++) {
		let pray = prayCoordinates[i];
		if (mx > pray.x - extraRadius && mx < pray.x + extraRadius && my > pray.y - extraRadius && my < pray.y + extraRadius) {
			withinRadius = true;
			break;
		}
	}
	if (withinRadius) {
		let textFill = 255;
		
		fill(0, textFill);
		text('- A BLUE FLOWER represents a prayer emoji', mouseX, mouseY+20);
	} else {textFill = 0;}

}

function checkFlowerJoCoordinates(mx, my) {
	for (let i = 0; i < flowerJoCoordinates.length; i++) {
		let flowerJo = flowerJoCoordinates[i];
		if (flowerJo.x === mx && flowerJo.y === my) {
			return true;
		}
	}
	return false;
}

function HoverF(mx, my) {
	let withinRadius = false;
	let extraRadius = 20; 
	for (let i = 0; i < flowerJoCoordinates.length; i++) {
		let flowerJo = flowerJoCoordinates[i];
		if (mx > flowerJo.x - extraRadius && mx < flowerJo.x + extraRadius && my > flowerJo.y - extraRadius && my < flowerJo.y + extraRadius) {
			withinRadius = true;
			break;
		}
	}
	if (withinRadius) {
		let textFill = 255;
		
		fill(0, textFill);
		text('- RED FLOWERS symbolise days where I spoke the most', mouseX, mouseY+10);
	} else {textFill = 0;}

}

function checkFlowerMomCoordinates(mx, my) {
	for (let i = 0; i < flowerMomCoordinates.length; i++) {
		let flowerMom = flowerMomCoordinates[i];
		if (flowerMom.x === mx && flowerMom.y === my) {
			return true;
		}
	}
	return false;
}

function HoverG(mx, my) {
	let withinRadius = false;
	let extraRadius = 20; 
	for (let i = 0; i < flowerMomCoordinates.length; i++) {
		let flowerMom = flowerMomCoordinates[i];
		if (mx > flowerMom.x - extraRadius && mx < flowerMom.x + extraRadius && my > flowerMom.y - extraRadius && my < flowerMom.y + extraRadius) {
			withinRadius = true;
			break;
		}
	}
	if (withinRadius) {
		let textFill = 255;
		
		fill(0, textFill);
		text('- YELLOW FLOWERS symbolise days where my mother spoke the most', mouseX, mouseY+10);
	} else {textFill = 0;}

}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    button.html("Pause song");
  } else {
    song.pause();
    button.html("Play song");
  }
}

