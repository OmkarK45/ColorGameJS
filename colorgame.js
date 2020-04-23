
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");

var hardBtn = document.querySelector("#hardBtn");
easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    numSquares  = 3;
    hardBtn.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i =0; i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    numSquares = 6;
    easyBtn.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i =0; i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
        }
    
});


resetButton.addEventListener("click", function(){
    // generate all new colors
    // stopConfetti();
    colors = generateRandomColors(numSquares);
    // pick new color from array
    pickedColor = pickColor();
    // change color display
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors"
    // change colors of sqaures
    messageDisplay.textContent = ""; 
    for(var i=0; i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++){
    
    // add initial colors
    squares[i].style.backgroundColor = colors[i];

    // add click listeners
    squares[i].addEventListener("click", function(){
    // alert("clicked");
    
    // grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    // compare color to pickedColor
    if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct";
        
        resetButton.textContent = "Play Again ?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
    }    
    else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
    }
    });
}

function changeColors(color){
    // loop through all squares
    for(var i = 0; i<squares.length; i++){
    // change each color to given color 
        squares[i].style.backgroundColor = color;
    }

}

function pickColor(){
   var random =  Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num){
    // make an array
    var arr = [];

    // add num random colors to array
    for(var i=0; i<num; i++){
        // get randodm color and push into array 
        arr.push(randomColor());
    }
    // return that array
    return arr;
}

function randomColor(){
    // Pick a "red" from 0 to 255
    var r = Math.floor(Math.random()*256);
    // Pick a "green" from 0 to 255
    var g = Math.floor(Math.random()*256);
    // Pick a "blue" from 0 to 255
    var b = Math.floor(Math.random()*256);
    return "rgb("+ r + ", "+ g + ", "+ b + ")";
}