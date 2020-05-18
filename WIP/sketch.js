// python -m http.server 8000

function setup() {
    createCanvas(1000,800, WEBGL);
    noStroke();
}

function draw() {
    background(0);

    pointLight(150,100,0,500,0,200)
    directionalLight(0,102,255,-1,0,0)
    pointLight(255,255,109,0,0,300)
    rotateY(map(mouseX, 0,width, 0, PI));
    rotateX(map(mouseY,0,height,0, PI));
    box(200);
    rotateX(2);
    box(200);

}