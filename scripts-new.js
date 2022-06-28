const clearGrid = document.getElementById('btn-1')
const colorMode = document.getElementById('btn-2')
const blackWhiteMode = document.getElementById('btn-3')

//Lisener to clear the grid and resent the number of squares
// document.getElementById("clear-grid").addEventListener("click", function() {
//   const clearGrid = Array.from(document.getElementsByClassName('active-etch-block'));
//     clearGrid.forEach(clearGrid => {
//     clearGrid.classList.remove('active-etch-block');
//   });

let clearTheGrid = () => {
  const clearElements = Array.from(document.getElementsByClassName('active-etch-block'))
  clearElements.forEach(clearElements => {
    clearElements.classList.remove('active-etch-block')
  })
}

let gridInitialize = () => {
  for (let i = 0; i <= 256; i++) {
    let wrapper = document.getElementById('project-wrapper');
    let miniBlock = document.createElement('div');
    wrapper.appendChild(miniBlock)
    miniBlock.classList.add('miniBlock', 'grid-items')
    miniBlock.addEventListener('mouseover', () => {
      miniBlock.classList.add('active-etch-block')
    })
  }
}


clearGrid.addEventListener('click', clearTheGrid)
window.addEventListener('load', gridInitialize)
