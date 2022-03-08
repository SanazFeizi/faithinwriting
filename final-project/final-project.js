let myWord = document.getElementById('H');
myWord.onclick = function() {
  document.getElementById('H-info').style.display = 'block';
}
myWord.onmouseout = function() {
  document.getElementById('H-info').style.display = 'none';
}