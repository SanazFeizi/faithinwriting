let count=0;
let button = document.querySelector(".myWord")
console.log(count);


button.addEventListener("click", addBlackBorder);

function addBlackBorder() {
	button.classList.toggle("black-border");
	count++;
	console.log(count);

	if (count > 2) {
		button.classList.add("large-text")
        button.innerHTML = "you clicked me more than twice"
    }
}
	

