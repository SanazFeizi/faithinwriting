/* show specific text according to the time*/

let today = new Date();
 let hour = today.getHours();
 let message;
 let messageContainer = document.getElementById("message");

 if (hour >=18) {
		message = " Can you buy chewing gum?"
	} else if (hour >=12) {
		message = "..."
	} else {
		message = "Can you hear me?"
	}

messageContainer.innerHTML = message;


/* show specific text according to the time*/ 
   
let day = new Date();
 let hour = today.getHours();
 let myId;
 let myIdContainer = document.getElementById("myId");

 if (hour >=18) {
		myId = " her laughter"
	} else if (hour >=12) {
		myId = "her face"
	} else {
		myId = "her eyes"
	}

myIdContainer.innerHTML = myId;


/*show/hide the last part of text according to the time*/

let currentTime = new Date()
 let currentday = today.getHours();
 let myDIV;
 let myDIVContainer = document.getElementById("myDIV");

 if(hour >=18)
	  {
		  document.getElementById("myDIV").style.display = 'block';
	  }
	 else if (hour >=12) {
		document.getElementById("myDIV").style.display = 'none';
	}
	  else {
		  document.getElementById("myDIV").style.display = 'block';
 }


