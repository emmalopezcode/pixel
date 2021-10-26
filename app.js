var win;
var selectedColor;
var colors = [];
var selectedSize;
var slider;
var out;

function setup() {
    win = { width: 1000, height: 700 };

    slider = document.getElementById("size");
    out = document.getElementById("sizeprint");
    var canvas = createCanvas(win.width, win.height);
    canvas.parent('sketch-holder');
    selectedSize = int(20);
    selectedColor = color('rgba(60,151,255,1)');
    background(230, 230, 240);
    noStroke();

}

function updateColor(value) {
    selectedColor = color(value)    
}

function mouseDragged() {
    if (mouseY > 600) {
        return;
    }
    drawPixel();

}

function mousePressed() {
    if (mouseY > 600) {
        colorSwitch();
    }
    else {
        drawPixel();
    }
}

function reset() {
    setup();
}

function keyPressed() {
    console.log(key)
    if (key == 'ArrowRight' && out.innerHTML < 100) {
        selectedSize++;
        slider.value++;
        out.innerHTML++;
    }
    if(key == 'ArrowLeft' && out.innerHTML > 0){
        selectedSize--;
        slider.value--;
        out.innerHTML--;
    }

}

function changeSize() {
    selectedSize = int(slider.value);
    out.innerHTML = slider.value;
}

function colorSwitch() {
    //depending on the exact range of the x and y mouse coordinates, a different color selection is made
    if (mouseY > 625 && mouseY < 675) {
        for (let i = 0; i < colors.length; i++) {
            if (mouseX > i * 100 + 75 && mouseX < i * 100 + 125) {
                selectedColor = colors[i];
            }
        }
    }
}

function drawSqr(c, x, y, w) {
    fill(c);
    rect(x, y + 600, w, w);
}

function drawPixel() {
    fill(selectedColor);

    //making the output x the floor of the division snaps the click to the nearest [lower] grid square
    //making it look like its pixelated
    var x = Math.floor(mouseX / selectedSize);
    var y = Math.floor(mouseY / selectedSize);
    rect(x * selectedSize, y * selectedSize, selectedSize, selectedSize);
}