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


colorBtn.addEventListener("click", backColor);
colorBtn.addEventListener("click", letterColor);

function backColor() {
    console.log('You did it!');
    bodyVar.style.background = getRandomColor();
    header.style.color = 'green';
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function letterColor() {
    for (const letter of spanArray) {
        letter.style.color = getRandomColor()
    }    
  }


console.log('test this')