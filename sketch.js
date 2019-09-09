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
let img;
let comment;

function preload() {
  img = loadImage('heart.png');
}

function setup() {
  createCanvas(1280, 768);
  // noCursor();

  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  noStroke();
  
  textAlign(CENTER, CENTER);
}

function draw() {
  background(100);
  //insta background
  fill(0,0,100);
  rect(650, 250, 220, 400);

  //feed image
  fill(360 - mouseY / 2, 100, 100);
  rect(650, 225, mouseX/2, mouseX/2);

  //profile name
  textSize(14);
  text('Betzilla_', 600, 83);

  //settings icon
  fill(0,0,0);
  ellipse(745, 75, 3, 3);
  ellipse(745, 80, 3, 3);
  ellipse(745, 85, 3, 3);

  //profile icon
  ellipse(570, 80, mouseX/20, mouseX/20);

  // like icon
  image(img, width/2, height/2);
  image(comment, width/4, height/4);

  // comments
  // let time = millis();
  // rotateX(time / 1000);
  // rotateZ(time / 1234);
  let s = 'betzilla_happy hushed grin beam tears joy smile upside-down winking star-struck kissing face savoring zany squiting money-mouth hearts halo kiss money-mouth shushing thinking zipper-muth expressionless without mouth hugging tongue smirking unamused rolling eyes grimacing lying relieved pensive';
  textSize(10);
  textAlign(LEFT);
  fill(0,0,0);
  text(s, 655, mouseY, 220, 70);
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
