const bodyVar = document.querySelector("body");
const colorBtn = document.querySelector("#colorBtn")

const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const four = document.querySelector(".four")
const five = document.querySelector(".five")
const six = document.querySelector(".six")
const seven = document.querySelector(".seven")
const eight = document.querySelector(".eight")
const nine = document.querySelector(".nine")
const ten = document.querySelector(".ten")
const eleven = document.querySelector(".eleven")
const twelve = document.querySelector(".twelve")
const thirteen = document.querySelector(".thirteen")

// Use a class to make all of these document objects?

const spanArray = [one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen]
const spanArrayOne = [one]


colorBtn.addEventListener("click", backColor);
colorBtn.addEventListener("click", letterColor);
// colorBtn.addEventListener("click", rainbowLog);


function backColor() {
    console.log('You did it!');
    bodyVar.style.background = intenseColor3();
}

function letterColor() {
  for (const letter of spanArray) {
      letter.style.color = intenseColor3()
  }    
}

//Note that this runs intenseColor3 for every iteration of the for loop.

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function intenseColor() {
  const colorsArray = ['#FF0000 ','#F99A00 ','#F9ED00','#21FC03 ','#1F04E0 ','#F900ED ']
  return colorsArray[Math.floor(Math.random()*6)]
}

function intenseColor2() {
  var letters = '0123456789ABCDEF';
  var color = '#F';
  for (var i = 0; i < 5; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function intenseColor3() {
  let r = rainbow(100,Math.floor(Math.random() *1000))
  //I'm not really clear on what these parameters actually do
  console.log(r)
  return r;
}

function rainbow(numOfSteps, step) {
  // @param numOfSteps: Total number steps to get color, means total colors
  // @param step: The step number, means the order of the color
  // This function generates vibrant, "evenly spaced" colours (i.e. no clustering). This is ideal for creating easily distinguishable vibrant markers in Google Maps and other apps.
  // Adam Cole, 2011-Sept-14
  // HSV to RBG adapted from: http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
  var r, g, b;
  var h = step / numOfSteps;
  var i = ~~(h * 6);
  var f = h * 6 - i;
  var q = 1 - f;
  switch(i % 6){
      case 0: r = 1; g = f; b = 0; break;
      case 1: r = q; g = 1; b = 0; break;
      case 2: r = 0; g = 1; b = f; break;
      case 3: r = 0; g = q; b = 1; break;
      case 4: r = f; g = 0; b = 1; break;
      case 5: r = 1; g = 0; b = q; break;
  }
  var c = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
  return (c);
}

function rainbowLog () {
  console.log(rainbow(1000,Math.floor(Math.random() *1000)))
}