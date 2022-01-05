const wrapper = document.querySelector('.project-wrapper');
let miniBlock = document.createElement('div');

for (let i = 0; i <= 255; i++){
  let miniBlock = document.createElement('div');
  wrapper.appendChild(miniBlock);
  miniBlock.classList.add('miniBlock', 'grid-items');
  miniBlock.addEventListener('mouseover', () => {
  miniBlock.classList.add('active-etch-block');
  });
}

document.getElementById("clear-grid").addEventListener("click", function() {
  const clearGrid = document.getElementsByClassName('active-etch-block');
  for (let i = 0; i <= 255; i++){
    clearGrid.classList.remove('active-etch-block');
  }
});

// function clearGrid() {
//   miniBlock.classList.remove('active-etch-block');
// };

// document.getElementById("clear-grid").onclick = clearGrid();



// let etchBlocks = document.getElementsByClassName('miniBlock')[1];
// etchBlocks.addEventListener('mouseover', () => {
//   miniBlock.classList.add('active-etch-block');
// });


// etchBlocks.forEach((miniBlock) => {
//   miniBlock.addEventListener('mouseover', () => {
//     miniBlock.classList.add('active-etch-block');
//   });
// });


// const etchBlocks = document.querySelectorAll('.miniBlock');

// etchBlocks.addEventListener('mouseover', () => {
//   miniBlock.classList.add('active-etch-block');
// });


