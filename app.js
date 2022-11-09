// GLOBAL VARIABLES
var canvas;
var mandelbrotSetButton = document.querySelector("#mandelbrotset-button")
var juliasetButton = document.querySelector("#juliaset-button")
var burningshipButton = document.querySelector("#burningship-button")

// P5.js CANVAS SET UP AND DRAWING FUNCTIONS
function setup() {
    canvas = createCanvas(windowWidth - 500,windowHeight);
    canvas.parent("drawing-container");
}

function draw() {
}

function drawMandelbrotSet() {
    const w = 4;
    const h = (w * height) / width;

    // Start at negative half the width and height
    const xmin = -w/2;
    const ymin = -h/2;

    // Make sure we can write to the pixels[] array.
    // Only need to do this once since we don't do any other drawing.
    loadPixels();

    // Maximum number of iterations for each point on the complex plane
    const maxiterations = 100;

    // x goes from xmin to xmax
    const xmax = xmin + w;
    // y goes from ymin to ymax
    const ymax = ymin + h;

    // Calculate amount we increment x,y for each pixel
    const dx = (xmax - xmin) / (width);
    const dy = (ymax - ymin) / (height);

    // Start y
    let y = ymin;
    for (let j = 0; j < height; j++) {
        // Start x
        let x = xmin;
        for (let i = 0; i < width; i++) {

        // Now we test, as we iterate z = z^2 + cm does z tend towards infinity?
        let a = x;
        let b = y;
        let n = 0;
        while (n < maxiterations) {
            const aa = a * a;
            const bb = b * b;
            const twoab = 2.0 * a * b;
            a = aa - bb + x;
            b = twoab + y;
            // Infinty in our finite world is simple, let's just consider it 16
            if (dist(aa, bb, 0, 0) > 16) {
            break;  // Bail
            }
            n++;
        }

        // We color each pixel based on how long it takes to get to infinity
        // If we never got there, let's pick the color black
        const pix = (i+j*width)*4;
        const norm = map(n, 0, maxiterations, 0, 1);
        let bright = map(sqrt(norm), 0, 1, 0, 255);
        if (n == maxiterations) {
            bright = 0;
        } else {
            // Gosh, we could make fancy colors here if we wanted
            pixels[pix + 0] = bright;
            pixels[pix + 1] = bright;
            pixels[pix + 2] = bright;
            pixels[pix + 3] = 255;
        }
        x += dx;
        }
        y += dy;
    }
    updatePixels();
}

function drwaJuliaSet() {
    const w = 4;
    const h = (w * height) / width;

    let ca = -0.650492
    let cb = -0.478235

    // Start at negative half the width and height
    const xmin = -w/2;
    const ymin = -h/2;

    // Make sure we can write to the pixels[] array.
    // Only need to do this once since we don't do any other drawing.
    loadPixels();

    // Maximum number of iterations for each point on the complex plane
    const maxiterations = 100;

    // x goes from xmin to xmax
    const xmax = xmin + w;
    // y goes from ymin to ymax
    const ymax = ymin + h;

    // Calculate amount we increment x,y for each pixel
    const dx = (xmax - xmin) / (width);
    const dy = (ymax - ymin) / (height);

    // Start y
    let y = ymin;
    for (let j = 0; j < height; j++) {
        // Start x
        let x = xmin;
        for (let i = 0; i < width; i++) {

        // Now we test, as we iterate z = z^2 + cm does z tend towards infinity?
        let a = x;
        let b = y;
        let n = 0;
        while (n < maxiterations) {
            const aa = a * a;
            const bb = b * b;
            // Infinty in our finite world is simple, let's just consider it 16
            if (aa + bb > 4.0) {
                break; // Bail
              }
              let twoab = 2.0 * a * b;
              a = aa - bb + ca;
              b = twoab + cb;
              n++;
        }

        // We color each pixel based on how long it takes to get to infinity
        // If we never got there, let's pick the color black
        const pix = (i+j*width)*4;
        const norm = map(n, 0, maxiterations, 0, 1);
        let bright = map(sqrt(norm), 0, 1, 0, 255);
        if (n == maxiterations) {
            bright = 0;
        } else {
            // Gosh, we could make fancy colors here if we wanted
            pixels[pix + 0] = bright;
            pixels[pix + 1] = bright;
            pixels[pix + 2] = bright;
            pixels[pix + 3] = 255;
        }
        x += dx;
        }
        y += dy;
    }
    updatePixels(); 
}

function drawBurningShipSet() {
    const w = 4;
    const h = (w * height) / width;

    // Start at negative half the width and height
    const xmin = -1.8;
    const ymin = -0.08;

    // Make sure we can write to the pixels[] array.
    // Only need to do this once since we don't do any other drawing.
    loadPixels();

    // Maximum number of iterations for each point on the complex plane
    const maxiterations = 100;

    // x goes from xmin to xmax
    const xmax = -1.7;
    // y goes from ymin to ymax
    const ymax = 0.01;

    // Calculate amount we increment x,y for each pixel
    const dx = (xmax - xmin) / (width);
    const dy = (ymax - ymin) / (height);

    // Start y
    let y = ymin;
    for (let j = 0; j < height; j++) {
        // Start x
        let x = xmin;
        for (let i = 0; i < width; i++) {

        // Now we test, as we iterate z = z^2 + cm does z tend towards infinity?
        let a = x;
        let b = y;
        let n = 0;
        while (n < maxiterations) {
            const aa = a * a;
            const bb = b * b;
            const twoab = 2.0 * a * b;
            a = aa - bb + x;
            b = Math.abs(twoab) + y;
            // Infinty in our finite world is simple, let's just consider it 16
            if (dist(aa, bb, 0, 0) > 16) {
            break;  // Bail
            }
            n++;
        }

        // We color each pixel based on how long it takes to get to infinity
        // If we never got there, let's pick the color black
        const pix = (i+j*width)*4;
        const norm = map(n, 0, maxiterations, 0, 1);
        let bright = map(sqrt(norm), 0, 1, 0, 255);
        if (n == maxiterations) {
            bright = 0;
        } else {
            // Gosh, we could make fancy colors here if we wanted
            pixels[pix + 0] = bright;
            pixels[pix + 1] = bright;
            pixels[pix + 2] = bright;
            pixels[pix + 3] = 255;
        }
        x += dx;
        }
        y += dy;
    }
    updatePixels();
}  


// EVENT LISTENERS
mandelbrotSetButton.onclick = function () {
    clear();
    drawMandelbrotSet();
}

juliasetButton.onclick = function () {
    clear();
    drwaJuliaSet();
}

burningshipButton.onclick = function () {
    clear();
    drawBurningShipSet();
}