
// background color //

let doc = document.getElementById('BC');

function hope(number) {
  return Math.floor(Math.random() * (number+1));
}

doc.onclick = function() {
  let rndCol = 'rgb(' + hope(255) + ',' + hope(255) + ',' + hope(255) + ')';
  document.body.style.backgroundColor = rndCol;
}



// --- hovers --- //


//justice //
let justice = document.getElementById("justice")

justice.addEventListener("mouseenter", showjusticeGif)
justice.addEventListener("mouseleave", hidejusticeGif)
function showjusticeGif() {
  document.querySelector(".justice").style.opacity = "1"
}
function hidejusticeGif() {
    document.querySelector(".justice").style.opacity = "0"

}


// society //
let society = document.getElementById("society")

society.addEventListener("mouseenter", showsocietyGif)
society.addEventListener("mouseleave", hidesocietyGif)
function showsocietyGif() {
  document.querySelector(".society").style.opacity = "1"
}
function hidesocietyGif() {
    document.querySelector(".society").style.opacity = "0"

}





// society - show/hide discrete-text //
let societyp = document.getElementById("society")

societyp.addEventListener("mouseenter", showdiscretetext)
societyp.addEventListener("mouseleave", hidediscretetext)
function showdiscretetext() {
  document.querySelector(".pt").style.opacity = "0"
}
function hidediscretetext() {
    document.querySelector(".pt").style.opacity = "1"

}










// gender //
let gender = document.getElementById("gender")

gender.addEventListener("mouseenter", showgenderGif)
gender.addEventListener("mouseleave", hidegenderGif)
function showgenderGif() {
  document.querySelector(".gender").style.opacity = "1"
}
function hidegenderGif() {
    document.querySelector(".gender").style.opacity = "0"

}


// freedom //
let freedom = document.getElementById("freedom")

freedom.addEventListener("mouseenter", showfreedomGif)
freedom.addEventListener("mouseleave", hidefreedomGif)
function showfreedomGif() {
  document.querySelector(".freedom").style.opacity = "1"
}
function hidefreedomGif() {
    document.querySelector(".freedom").style.opacity = "0"

}

// women //
let women = document.getElementById("women")

women.addEventListener("mouseenter", showwomenGif)
women.addEventListener("mouseleave", hidewomenGif)
function showwomenGif() {
  document.querySelector(".women").style.opacity = "1"
}
function hidewomenGif() {
    document.querySelector(".women").style.opacity = "0"

}

// human //
let human = document.getElementById("human")

human.addEventListener("mouseenter", showhumanGif)
human.addEventListener("mouseleave", hidehumanGif)
function showhumanGif() {
  document.querySelector(".human").style.opacity = "1"
}
function hidehumanGif() {
    document.querySelector(".human").style.opacity = "0"

}
