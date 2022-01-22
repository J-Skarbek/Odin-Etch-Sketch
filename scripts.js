const wrapper = document.querySelector('.project-wrapper');
// const clearGrid = Array.from(document.getElementsByClassName('active-etch-block'));
// let gridSizeTest = document.querySelector('.project-wrapper').style.gridTemplateRows = "repeat(25, 1fr)";
let miniBlock = document.createElement('div');
initGrid();

//standard B+W Grid
function initGrid(){
  for (let i = 0; i <= 2499; i++){
    let miniBlock = document.createElement('div');
    wrapper.appendChild(miniBlock);
    miniBlock.classList.add('miniBlock', 'grid-items');
    miniBlock.addEventListener('mouseover', () => {
    miniBlock.classList.add('active-etch-block');
    });
  };
};

function colorGenerator() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  
  const rgbBlocks = Array.from(document.getElementsByClassName('miniBlock'));
  rgbBlocks.forEach(rgbBlocks => {
    rgbBlocks.querySelector('.miniBlock').style.cssText = "background-color: rgb(" + r + "," + g + "," + b + ");";
  });
  // document.querySelector('.miniBlock').style.cssText = "background-color: rgb(" + r + "," + g + "," + b + ");";
    // const coloredBlocks = document.querySelector('.miniBlock').style.cssText = "background-color: rgb(" + r + "," + g + "," + b + ");";
  };



//Listener for colorizing the grid
document.getElementById("color-button").addEventListener("click", function(){
  const clearGrid = Array.from(document.getElementsByClassName('active-etch-block'));
  clearGrid.forEach(clearGrid => {
    clearGrid.classList.remove('active-etch-block')
  });
  colorGenerator();    
});

//Lisener to clear the grid and resent the number of squares
document.getElementById("clear-grid").addEventListener("click", function() {
  const clearGrid = Array.from(document.getElementsByClassName('active-etch-block'));
    clearGrid.forEach(clearGrid => {
    clearGrid.classList.remove('active-etch-block');
  });

  let sizeDeclaration = prompt("How big of a grid do you want? (max = 50)");
  if (sizeDeclaration > 50){    
    alert ("Error - too many squares! Pick a value less than 50.");
    sizeDeclaration = '';
    sizeDeclaration = prompt("How big of a grid do you want? (max = 50)");
    gridSizing();
  } else {
    gridSizing();
  };
 
  function gridSizing(){
    let gridDivNumeration = document.querySelector('.project-wrapper').style.cssText = "grid-template-rows:repeat(" + sizeDeclaration + ", 1fr); grid-template-columns:repeat(" + sizeDeclaration + ", 1fr);";
  };

});
