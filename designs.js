//Select color input
const colorInput = document.getElementById('colorPicker');
let colorType = colorInput.value;

colorInput.addEventListener('input', function(event){
  colorType = event.target.value;
});

//Select size input
const sizeInputHeight = document.getElementById('inputHeight');
const sizeInputWidth = document.getElementById('inputWidth');
const sizeSubmit = document.getElementById('sizePicker')[2];

//When size is submitted by the user, call makeGrid()
sizeSubmit.addEventListener('click', makeGrid);
const table = document.getElementById('pixelCanvas');

table.addEventListener('click', toggleColor);

function toggleColor(event) {

  if(!event.target.hasAttribute('style')){

    event.target.toggleAttribute('style');
    event.target.style.backgroundColor = colorType;

  } else {

    event.target.toggleAttribute('style');
    
  }
}

function makeGrid(event) {
  // Your code goes here!

  while(table.hasChildNodes()){
    table.removeChild(table.childNodes[0]);
  }

  for(let height = 1; height <= sizeInputHeight.value; height++) {

    const rowTag = document.createElement('tr');

    for(let width = 1; width <= sizeInputWidth.value; width++) {
      const datum = document.createElement('td');
      rowTag.appendChild(datum);
    }

    table.appendChild(rowTag);
  }
  event.preventDefault();
}
