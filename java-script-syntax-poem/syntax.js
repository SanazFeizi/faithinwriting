/* showing different sentence according to the time*/

let today = new Date();
let hour = today.getHours();
let me;
let us;
let silence = document.getElementById("life");

if (hour >=18) {
   me = " Can you hear it?"
 } else if (hour >=12) {
   me = "Listen..."
 } else {
   me = "It is approaching slowly."
 }

silence.innerHTML = me;


/*changing the sentence color on hover*/

let we;
let you = document.getElementById("life");
console.log(you);

you.addEventListener("mouseover", laugh);
you.addEventListener("mouseout", live);

function laugh() {
    you.style.color = "rgb(50, 50, 50)";
  }

  function live() {
    you.style.color = "white";
}



/* changing the background color*/
let others
let children
let world = document.getElementById('life');

function hope(number) {
  return Math.floor(Math.random() * (number+1));
}

world.onclick = function() {
  let rndCol = 'rgb(' + hope(255) + ',' + hope(255) + ',' + hope(255) + ')';
  document.body.style.backgroundColor = rndCol;
}






