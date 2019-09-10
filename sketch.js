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
let heart;
let comment;
let send;
let bookmark;
let commentY = 605;

let rectWidth = 400;
let rectHeight = 400;

let profilePicRadius = 40;

function preload() {
  heart = loadImage('images/heart.png');
  comment = loadImage('images/comment.jpeg');
  send = loadImage('images/send.jpeg');
  bookmark = loadImage('images/bookmark.jpeg')
  helvetica = loadFont('HelveticaNeue-Light.otf')
  comicSans = loadFont('ComicSansMS.ttf');
}

function setup() {
  createCanvas(1280, 699, WEBGL);
  // noCursor();

  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  noStroke();
  
  textAlign(CENTER, CENTER);
  textFont(helvetica);
}

function draw() {
  let base = 100;

  background(50);
  //insta background
  fill(0,0,100);
  rect(base + 250, 319, 400, 637);

  //feed image
  fill(360 - mouseY / 2, 100, 100);
  rect(base + 250, 300, rectWidth, rectHeight);

  //profile name
  textSize(14);
  text('Betzilla_', base + 130, 70);

  //settings icon
  fill(0,0,0);
  ellipse(base + 405, 65, 3, 3);
  ellipse(base + 405, 70, 3, 3);
  ellipse(base + 405, 75, 3, 3);

  //profile icon
  ellipse(base + 90, 70, profilePicRadius, profilePicRadius);

  // like icon
  let iconHeight = 510;
  image(heart, base + 80, iconHeight, 30, 30);
  image(comment, base + 110, 512, 29, 26);
  image(send, base + 140, iconHeight, 30, 30);
  image(bookmark, base + 400, iconHeight, 27, 27);

  // comments
  let s = 'betzilla_happy hushed grin beam tears joy smile upside-down winking star-struck kissing face savoring zany squiting money-mouth hearts halo kiss money-mouth shushing thinking zipper-muth expressionless without mouth hugging tongue smirking unamused rolling eyes grimacing lying relieved pensive';
  textSize(12);
  textAlign(LEFT);
  fill(0,0,0);
  text(s, base + 255, commentY, 340, 70);
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}

function mouseMoved() {
  commentY = mouseY;
  rectWidth = mouseY / 2;
  rectHeight = mouseY / 2;
  profilePicRadius = mouseX / 10;
}