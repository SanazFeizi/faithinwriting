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

  let count = 0
  let message = document.getElementById("myId");
  
  document.body.addEventListener("click", fulfilledWishes)
  
  function fulfilledWishes() {
      count++
      if (message.innerHTML === "fulfilled Wishes") {
          message.innerHTML = "sometimes";
          message.classList.add("cloud-texture");
      } else if (count >=3) {
          message.innerHTML = "are Discomfortable";
      } else {
          message.innerHTML = "fulfilled Wishes";
          if (message.classList.contains("cloud-texture")) {
              message.classList.remove("cloud-texture");
          }
      }
  }

  window.onscroll = function() {myFunction()};

  function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("myP").className = "test";
    } else {
      document.getElementById("myP").className = "";
    }
  }


  
 