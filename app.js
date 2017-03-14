
var numsquares = 6;
var colors = [];
var pickedColor ;
var messageDisplay = document.querySelector("#message");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modebtns = document.querySelectorAll(".mode");




init();

function init(){

//modebtns eventlisteners
setupModeButtons();


setupSquareListeners();

reset();
}



function setupModeButtons(){
  for(var i = 0 ; i<modebtns.length ; i++){
  modebtns[i].addEventListener("click",function(){
    modebtns[0].classList.remove("selected");
    modebtns[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy " ? numsquares =3: numsquares=6;
    reset();
  });
}
}




function setupSquareListeners(){
  for(var i=0 ; i < squares.length ; i++){

  squares[i].addEventListener("click",function(){
    //grab color of clicked square
    var clickedColor = this.style.background;
  if (clickedColor === pickedColor) {
    messageDisplay.textContent = "Correct!";
    changeColors(clickedColor);
    h1.style.background = clickedColor;
    resetBtn.textContent = "Play Again?"
    }  else {
    this.style.background = "#232323";
    messageDisplay.textContent = "Try Again!";
  }
    
  });

}
}





function reset(){
  colors = generateRandomColors(numsquares);
  pickedColor = pickcolor();
  colorDisplay.textContent = pickedColor;
  resetBtn.textContent = "New Colors";
  messageDisplay.textContent = "";

  for(var i =0 ; i< squares.length ; i++){
    if(colors[i]){
      squares[i].style.display ="block";
      squares[i].style.background = colors[i];

    }
    else{
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "rgb(128, 21, 21)";
}




resetBtn.addEventListener("click",function(){
  reset();
})



function changeColors(color){
  //loop through all square
  for(var i = 0 ; i<squares.length ; i++){


  //change each color to match given color
  squares[i].style.background = color;
}
}



function pickcolor() {
  var random = Math.floor(Math.random()*colors.length); //pick a random color beween 0 and 1 but it doesn't pick 1
//math.floor to remove the decimal numbers
return colors[random];
}



function  generateRandomColors(num){
  //make an array
  var arr = [];
  //add num random colors to array
  for(var i = 0 ; i < num ; i++){
    //get random color and push into arr
arr.push(randomColor());

  }
  //return that array
  return arr;
}



function randomColor(){
  //pick a "red" from 0 to 255
  var red =Math.floor(Math.random() * 256);
  //pick a green from 0 to 255
  var green = Math.floor(Math.random() * 256);
  //pick a blue from 0 to 255
  var blue = Math.floor(Math.random() * 256);
  return "rgb("+ red +", "+green+", "+blue+")";
}


/*
easyBtn.addEventListener("click",function(){
hardBtn.classList.remove("selected");
easyBtn.classList.add("selected");
numsquares = 3;
colors = generateRandomColors(numsquares);
pickedColor = pickcolor();
colorDisplay.textContent = pickedColor;
for(var i = 0 ; i < squares.length ; i++){
  if(colors[i]){
    squares[i].style.background = colors[i];
  } else{
    squares[i].style.display = "none";
  }
}
});


hardBtn.addEventListener("click",function(){
easyBtn.classList.remove("selected");
hardBtn.classList.add("selected");
numsquares = 6;
colors = generateRandomColors(numsquares);
pickedColor = pickcolor();
colorDisplay.textContent = pickedColor;
for(var i = 0 ; i < squares.length ; i++){
  
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  }

});
*/

