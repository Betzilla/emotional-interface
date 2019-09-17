// P_1_0_01
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * changing colors and size by moving the mouse
 *
 * MOUSE
 * position x          : size
 * position y          : color
 *
 * KEYS
 * s                   : save png
 */
'use strict';
let base = 300;

let backgroundCol = 50;

let heart;
let comment;
let send;
let bookmark;
let feed;
let feedImg;

let ada;
let eve;
let mink;
let mona;
let pearl;
let swinger;

let commentY = 585;

let rectWidth = 400;
let rectHeight = 400;
let rectX = base + 50;
let rectY = 100;

let profilePicRadius = 40;
let textSpace = 12;
let commentSize = 12;

let colorWidth = 360;
let colorHeight = 100;

let pressedTextX = 0;
let pressedTextY = 0;
let pressedTextSize = 0;
var minText = 5;
var maxText = 70;

//shapes
var tileCount = 10;

var tileWidth;
var tileHeight;
var shapeSize = 50;
var newShapeSize = shapeSize;
var shapeAngle = 0;
var maxDist;
var currentShape;
var shapes;

var sizeMode = 0;

var shift;

var dropImgBool = false;

var ladyImages;

let s = 'Lift4Lyfe Another Monday at the gym. Working those biceps buddy! ;) :eggplant: #muscles';

function preload() {
  // heart = loadImage('images/heart.png');
  // comment = loadImage('images/comment.jpeg');
  // send = loadImage('images/send.jpeg');
  // bookmark = loadImage('images/bookmark.jpeg')
  heart = createImg('images/heart.png');
  comment = createImg('images/comment.jpeg');
  send = createImg('images/send.jpeg');
  bookmark = createImg('images/bookmark.jpeg');
  feedImg = createImg('images/muscle.png');

  // ada = loadImage('images/ada.jpg');
  // eve = loadImage('images/eve.jpg');
  // mink = loadImage('images/mink.jpg');
  // mona = loadImage('images/mona.jpg');
  // pearl = loadImage('images/pearl.jpg');
  // swinger = loadImage('images/swinger.jpg');
  ada = createImg('images/ada.jpg');
  eve = createImg('images/eve.jpg');
  mink = createImg('images/mink.jpg');
  mona = createImg('images/mona.jpg');
  pearl = createImg('images/pearl.jpg');
  swinger = createImg('images/swinger.jpg');
  ladyImages = [ada, eve, mink, mona, pearl, swinger]
}

function setup() {
  createCanvas(1280, 699);
  // noCursor();

  image(feedImg, 0, 0);

  colorMode(HSB, colorWidth, colorHeight, 100);
  rectMode(CENTER);
  noStroke();
  
  textAlign(CENTER, CENTER);
}

function draw() {
  background(backgroundCol,100,100);
   // rotate(PI / roateAngle);
  //insta background
  fill(0,0,100);
  rect(base + 250, 319, 400, 637);

  //feed image
  // fill(360 - mouseY / 2, 100, 100);
  // rect(base + 250, 300, rectWidth, rectHeight);
  image(feedImg, rectX, rectY, rectWidth, rectHeight);

  //profile name
  textSize(14);
  fill(0,0,0);
  text('Lift4Lyfe', base + 130, 55);

  //settings icon
  fill(0,0,0);
  ellipse(base + 405, 50, 3, 3);
  ellipse(base + 405, 55, 3, 3);
  ellipse(base + 405, 60, 3, 3);

  //profile icon
  ellipse(base + 90, 55, profilePicRadius, profilePicRadius);

  // icons
  let iconHeight = 510;
  image(heart, base + 77, iconHeight, 32, 32);
  image(comment, base + 110, 512, 29, 26);
  image(send, base + 140, iconHeight, 30, 30);
  image(bookmark, base + 400, iconHeight, 27, 30);

  // comments
  s;
  textSize(commentSize);
  textAlign(LEFT);
  textLeading(textSpace);
  fill(0,0,0);
  text(s, base + 255, commentY, 350, 70);

  // glitchy shifty effect
  if (shift) {
  	  var x1 = random(width);
	  var y1 = random(height);

	  var x2 = round(x1 + random(-100, 100));
	  var y2 = round(y1 + random(-100, 100));
	  var w = 350;
	  var h = 150;

  	set(x2, y2, get(x1, y1, w, h));
  }

  if (dropImgBool) {
  	dropImg();
  }

  //mousePressed text
  textSize(pressedTextSize);
  fill(100,10,0);
  text('LIKE',pressedTextX,pressedTextY);
}

function mouseMoved() {
  //commentY = mouseY;
  // rectWidth = mouseY / 1.5;
  // rectHeight = mouseX / 1.5;

  backgroundCol = random(0,100);

  rectX = base + mouseY*0.1 +50 ;
  rectY = mouseX *0.1;

  profilePicRadius = mouseX / 10;
  textSpace = mouseX/60;
  commentSize = mouseX/30;
}

function mousePressed() {
	pressedTextX = mouseX;
	pressedTextY = mouseY;
	pressedTextSize = random(minText, maxText);
	shift = true;
	dropImgBool = true;
	feedImg = ladyImages[Math.round(random(0,5))];
	s = 'Lift4Lyfe is happy hushed grin beam tears joy smile upside-down winking star-struck kissing face savoring zany squiting money-mouth hearts halo kiss money-mouth shushing thinking zipper-muth expressionless without mouth hugging tongue smirking unamused rolling eyes grimacing lying relieved pensive';
}

function blurryShifty() {
	set(x2, y2, get(x1, y1, w, h));
}

let startX = 300
let startY = 300
function dropImg() {
	//image(comment, startX, startY, 100, 100);
	textSize(100);
	text('SHARE', startX, startY);
	startX = startX + 100;
	if (startX % 900 === 0) {
		startY = startY + 100;
		startX = 0;
	}
	if (startY % 700 === 0) {
		startY = 0;
	}
}

function mouseReleased() {
  dropImgBool = false
}

