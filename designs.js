//Select color input
let color = '#000000';
const colorInput = document.getElementById('colorPicker');

colorInput.addEventListener('input', function(event){
  color = event.target.value;
});

//Select size input
const sizeInputHeight = document.getElementById('inputHeight');
const sizeInputWidth = document.getElementById('inputWidth');
const sizeSubmit = document.getElementById('sizePicker')[2];

//When size is submitted by the user, call makeGrid()
sizeSubmit.addEventListener('click', makeGrid);

function makeGrid(event) {
  // Your code goes here!
  const table = document.getElementById('pixelCanvas');
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
