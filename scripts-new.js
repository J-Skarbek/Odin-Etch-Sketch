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

window.addEventListener('load', gridInitialize)
