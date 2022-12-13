const canvasSketch = require('canvas-sketch');
const p5 = require('p5');
new p5()

let params = {
alpha: 3,
  breathingLoop: 10,
  red : 0,
  green : 0,
  blue : 0,
}

const settings = {
  pixelsPerInch: 300,
  p5: true,
  duration: 3,
  animate: true,
  dimensions: [512, 512],
  // bleed: 1 / 8,
};

canvasSketch(() => {
  return ({contex,
    width,
    height
  }) => {
      background(255, params.alpha);


  // textSize(15);
	noStroke();
	

  
  // Center of screen
  const px = width / 2;
  const py = height / 2;
  
  // We will scale everything to the minimum edge of the canvas
  const minDim = min(width, height);
  
  // Size is a fraction of the screen
  const size = minDim * 0.85;
  
  // Get time in seconds
  const time = millis() / 2000;
  
  // How long we want the loop to be (of one full cycle)
  const duration = params.breathingLoop;
  
  // Get a 'playhead' from 0..1
  // We use modulo to keep it within 0..1
  const playhead = time / duration % 1;

  // Get an animated value from 0..1
  // We use playhead * 2PI to get a full rotation
  const anim = sin(playhead * PI * 2) * 0.5 + 0.5;
  
  // Create an animated thickness for the stroke that
  const thickness = minDim * 0.08 * anim;
  
  // Turn off fill
fill(params.red+ 100, params.green+ 100, params.blue +100, 20)
  
  // Turn on stroke and make it white
  stroke(params.red, params.green, params.blue, 200)
  
  // Apply thickness
  strokeWeight(thickness);


  // Draw a circle centred at (px, py)
  //ellipse(px, py, size* anim * 1.8, size * anim * 1.8);
  ellipse(px, py, size* anim, size * anim);


  };
}, settings);
