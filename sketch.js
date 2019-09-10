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
var blurImg;
var colors = [];
var sortMode = null;

function preload() {
  //img = loadImage('heart.png');
  img = createImg('heart.png');
  createImg('heart.png', setImage);
}

function setup() {
  createCanvas(1280, 699);
  // noCursor();

  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  noStroke();
  
  textAlign(CENTER, CENTER);
}

function draw() {
  let base = 100;

  background(50);
  //insta background
  fill(0,0,100);
  rect(base + 250, 350, 400, 637);

  //feed image
  fill(360 - mouseY / 2, 100, 100);
  rect(base + 250, 225, mouseX/2, mouseX/2);

  //profile name
  textSize(14);
  text('Betzilla_', base + 130, 83);

  //settings icon
  fill(0,0,0);
  ellipse(base + 405, 75, 3, 3);
  ellipse(base + 405, 80, 3, 3);
  ellipse(base + 405, 85, 3, 3);

  //profile icon
  ellipse(base + 90, 80, mouseX/10, mouseX/10);

  // like icon
  image(img, base + 100, 370);

  // comments
  let s = 'betzilla_happy hushed grin beam tears joy smile upside-down winking star-struck kissing face savoring zany squiting money-mouth hearts halo kiss money-mouth shushing thinking zipper-muth expressionless without mouth hugging tongue smirking unamused rolling eyes grimacing lying relieved pensive';
  textSize(14);
  textAlign(LEFT);
  fill(0,0,0);
  text(s, base + 255, mouseY + 80, 330, 70);

  // blur image
  var tileCount = floor(width / max(mouseX, 5));
  var rectSize = width / tileCount;

  blurImg.loadPixels();
  colors = [];

  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      var px = int(gridX * rectSize);
      var py = int(gridY * rectSize);
      var i = (py * blurImg.width + px) * 4;
      var c = color(blurImg.pixels[i], blurImg.pixels[i + 1], blurImg.pixels[i + 2], blurImg.pixels[i + 3]);
      colors.push(c);
    }
  }

  gd.sortColors(colors, sortMode);

  var i = 0;
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      fill(colors[i]);
      rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
      i++;
    }
  }
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}

function keyReleased() {
  if (key == 'c' || key == 'C') writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  if (key == '1') loadImage('data/pic1.jpg', setImage);
  if (key == '2') loadImage('data/pic2.jpg', setImage);
  if (key == '3') loadImage('data/pic3.jpg', setImage);
  if (key == '4') loadImage('data/pic4.jpg', setImage);

  if (key == '5') sortMode = null;
  if (key == '6') sortMode = gd.HUE;
  if (key == '7') sortMode = gd.SATURATION;
  if (key == '8') sortMode = gd.BRIGHTNESS;
  if (key == '9') sortMode = gd.GRAYSCALE;
}

function setImage(loadedImageFile) {
  blurImg = loadedImageFile;
}
