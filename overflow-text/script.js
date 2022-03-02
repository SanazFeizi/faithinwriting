let btn = document.getElementById('btn');


btn.addEventListener('click', function onClick(event) {
  //  change background color
  document.body.style.backgroundColor = 'gray';

  // optionally change text color
  // document.body.style.color = 'white';
});



btn.addEventListener("click", changeBackground);

function changeBackground() {
  document.body.style.backgroundColor = 'gray';
}