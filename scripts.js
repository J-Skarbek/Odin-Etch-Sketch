const wrapper = document.querySelector('.project-wrapper');
const miniBlock = document.createElement('div');


   for (let i = 0; i < 256; i++){
    wrapper.appendChild(miniBlock);
    miniBlock.classList.add('mini-block');
   }


