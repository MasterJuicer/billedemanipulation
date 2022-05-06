let img;
function preload() {
  img = loadImage('billeder/hasbullaaaahh.jpg');
}

let slider;


function setup() {

    
    //selve slideren//
 
//slider = createSlider(255, 255, 100);
  //slider.position(195, 515);
  //slider.style('width', '200px');

    
    //Dette er knappen for grå-filteret//
    
createCanvas(400, 400);
image(img, 0, 0, 400, 400);
button = createButton("Gråfilter");
button.mouseClicked(grå);
button.size(150,50);
button.position(10,420);
button.style("font-family", "Bodoni");
button.style("font-size", "24px");

 //Dette er knappen for at gøre billedet mere sløret//
image(img, 0, 0, 400, 400);
button = createButton("Blur");
button.mouseClicked(hund);
button.size(150,50);
button.position(10,500);
button.style("font-family", "Bodoni");
button.style("font-size", "24px"); 
    
   
     //Dette er knappen for rød/gul-filter//
image(img, 0, 0, 400, 400);
button = createButton("Rød/gul");
button.mouseClicked(posterize);
button.size(150,50);
button.position(10,580);
button.style("font-family", "Bodoni");
button.style("font-size", "24px"); 
    
    
    
    //Dette er knappen for at restarte programmet//
button = createButton("Reset");
button.mouseClicked(fjern);
button.size(150,50);
button.position(10,660);
button.style("font-family", "Bodoni");
button.style("font-size", "24px");
    
}


//Dette er selve grå-filteret
function grå(){
    image(img, 0, 0, 400, 400);
  filter(GRAY);
}


//Blur-filteret//
function hund(){
    image(img, 0, 0, 400, 400);
    filter(BLUR, 6)
}

//Rød/gul funktion//
function posterize(){
    image(img, 0, 0, 400, 400);
    filter(POSTERIZE, 2)
}

//resetknappen//
function fjern(){
    image(img, 0, 0, 400, 400);
}


//Tegne-funktion//
function draw() {
  fill(144,192,203, 40)
  noStroke();
  circle(mouseX, mouseY, 15);
}
