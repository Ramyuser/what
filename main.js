function setup() {
    canvas = createCanvas(640, 420)
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
img = "";
status = "";

function preload() {
    img = loadImage('flower cupcake.jpg');
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Cactus cupcake", 55, 190);
    noFill();
    stroke('#FF0000');
    rect(30, 0, 170, 180);
    fill('#03AC13');
    text("Flower cupcake", 340, 75);
    noFill();
    stroke('yellow');
    rect(200, 100, 225, 200);
    fill('#82EEFD');

}

function modelLoaded() {
    console.log("Modeled Loaded");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}