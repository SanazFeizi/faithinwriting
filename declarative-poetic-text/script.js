/*let today = new Date();
	let hour = today.getHours();
	let message;
	let messageContainer = document.getElementById("message");

	if (hour >=18) {
		message = "good evening :-)"
	} else if (hour >=12) {
		message = "good afternooon"
	} else {
		message = "good morn!"
	}

	messageContainer.innerHTML = message;*/


    
/*
let count = 0
let myId = document.getElementById("poem");

document.getElementById("poem").style.fontStyle = "italic";
document.body.addEventListener("click")

function myFunction() {
        document.getElementById("myId").style.fontStyle = "italic";
  }*/
  


  
  window.onscroll = function() {myFunction()};   

  function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("myP").className = "test";
    } else {
      document.getElementById("myP").className = "";
    }
  }



  let message = document.getElementById("myId");

let count = 0;
// declare a variable and set it to 0
document.body.addEventListener("click", fulfilledWishes)
// make sure the whole entire body of the html document is listening for someone to click on it, when someone does click on it, call the function called "theInternetIs"

window.addEventListener("scroll", fulfilledWishes)
// make sure the whole entire window is also listening for someone to do something, in this case, scroll
function fulfilledWishes() {
	// declare a new function called theInternetIs
	count++
	console.log(count)
	// everytime this function is called, add 1 to the count variable
	if (message.innerHTML === "fulfilled Wishes") {
		// check if the message variable, declared above, has text inside it that says "the internet is in the ground", if it does do the following:
		message.innerHTML = "sometime";
		//change the text to "the internet is in the clouds"
		message.classList.add("cloud-texture");
		//add a new class called "cloud-texture"
	} else if (count >=3) {
		// check if the count variable is larger than or equal to 3, if it is restart the counter and reset the default text
		message.innerHTML = "are Discomfortable";
		count = 0;
		// also check if the message has the cloud texture class still attached to it, and remove it if it does
		if (message.classList.contains("cloud-texture")) {
			message.classList.remove("cloud-texture");
		}
	} else {
		// if neither of the above conditionals are true, then do the following:
		message.innerHTML = "fulfilled Wishes";
		if (message.classList.contains("cloud-texture")) {
			message.classList.remove("cloud-texture");
		}
	}
}



  
 