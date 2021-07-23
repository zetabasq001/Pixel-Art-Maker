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

//When pixel is clicked, call toggleColor()
const table = document.getElementById('pixelCanvas');
table.addEventListener('click', toggleColor);

//Function toggles color on a square of grid
function toggleColor(event) {
  //Toggle one pixel per click
  if(event.target.nodeName === 'TD'){

    //Toggle pixel color on
    if(!event.target.hasAttribute('style')){

      event.target.toggleAttribute('style');
      event.target.style.backgroundColor = colorType;

    //Toggle pixel color off
    } else {

      event.target.toggleAttribute('style');
    }
  }
}

//Function builds table grid
function makeGrid(event) {
  //Erase any existing table grid
  while(table.hasChildNodes()){
    table.removeChild(table.childNodes[0]);
  }

  //Build a new table grid
  for(let height = 1; height <= sizeInputHeight.value; height++) {
    // build row
    const rowTag = document.createElement('tr');

    for(let width = 1; width <= sizeInputWidth.value; width++) {
      // build squares per row
      const datum = document.createElement('td');
      rowTag.appendChild(datum);
    }
    //Append row with columns on to table
    table.appendChild(rowTag);
  }
  //prevents reloading of web page when submitting size input
  event.preventDefault();
}
