let x = 0;
let y = 0;
function setup() {
	createCanvas(300, 400);
    background(100);
}

let size = 20;

function draw() {
//    for(let i = 0; i < width; i = i + size) {
//        rect(i, 0, size, size);
//        for(let j = 0; j < height; j = j + size) {
//            rect(i, j, size, size);
//        }
//    }
    
    fill(random(0, 255), random(0, 255), random(0, 255));
    rect(x, y, size, size);
    if (x < width) {
        x += size;
    } 
    if (x >= width) {
        y += size;
        x = 0;
    }
    if (y >= height) {
        x = 0;
        y = 0;
    }
}