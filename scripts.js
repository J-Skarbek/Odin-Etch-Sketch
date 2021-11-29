const wrapper = document.querySelector('.project-wrapper');

for (let i = 0; i <= 255; i++){
  const miniBlock = document.createElement('div');
  wrapper.appendChild(miniBlock);
  miniBlock.classList.add('mini-block', 'grid-items');
}



// let i = 0;
// do {
//   wrapper.appendChild(miniBlock);
//   miniBlock.classList.add('mini-block');
//   i++;
// } while (i <= 10);


 