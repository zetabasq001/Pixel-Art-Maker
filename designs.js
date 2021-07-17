// Select color input
var color;
const colorInput = document.querySelector('#colorPicker');
colorInput.addEventListener('input', function(event){
  color = event.target.value;
});

// Select size input
var sizeSide;
const sizeInputHeight = document.querySelector('#inputHeight');
const sizeInputWidth = document.querySelector('#inputWidth');
function sizeInput(event){
  sizeSide = event.target.value;
}

sizeInputHeight.addEventListener('input', sizeInput);
sizeInputWidth.addEventListener('input', sizeInput);
// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!

}
