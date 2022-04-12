let counter = 0;
let button = document.querySelector(".myId");
console.log(counter);
button.addEventListener("click", addName);

function addName() {
    counter++;
    console.log(counter);
    

    if (counter > 0) {
        
        button.innerHTML = "Faith in writing"
    }

    if (counter > 1) {
        button.innerHTML = "A website"
    }

    if (counter > 2) {
        button.innerHTML = "by: Sanaz Feizi"
    }

    if (counter > 2) {
        counter = 0;
    }  
}
