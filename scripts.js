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
  const clearGrid = Array.from(document.getElementsByClassName('active-etch-block'));
    clearGrid.forEach(clearGrid => {
    clearGrid.classList.remove('active-etch-block');
  })
});

