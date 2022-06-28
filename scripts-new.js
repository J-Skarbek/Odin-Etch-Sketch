const clearGrid = document.getElementById('btn-1')
const colorMode = document.getElementById('btn-2')
const blackWhiteMode = document.getElementById('btn-3')

let createEtchElements = () => {
  let wrapper = document.getElementById('project-wrapper');
  let miniBlock = document.createElement('div');
  wrapper.appendChild(miniBlock)
  miniBlock.classList.add('miniBlock', 'grid-items')
  miniBlock.addEventListener('mouseover', () => {
    miniBlock.classList.add('active-etch-block')
  })
}

let clearTheGrid = () => {
  const clearElements = Array.from(document.getElementsByClassName('active-etch-block'))
  clearElements.forEach(clearElements => {
    clearElements.classList.remove('active-etch-block')
  })
  // let gridDivs = document.getElementById('project-wrapper');
  // while (gridDivs.firstChild) {
  //   gridDivs.removeChild(miniBlock)
  // }
}

let gridInitialize = () => {
  for (let i = 0; i <= 256; i++) {
    createEtchElements()
  }
}

let newGridInitialize = (cellSum) => {
  for (let i = 0; i <= cellSum; i++) {
    createEtchElements()
  }
}

let etchSizeDeclaration = () => {
  let sizeDeclaration = prompt("How big of a grid do you want? (max = 50)")
  if (sizeDeclaration > 50){    
    alert ("Error - too many squares! Pick a value less than 50.")
    sizeDeclaration = ''
    sizeDeclaration = prompt("How big of a grid do you want? (max = 50)")
    etchGridSizing(sizeDeclaration)
    let cellSum = sizeDeclaration * sizeDeclaration
    newGridInitialize(cellSum)
  } else {
    etchGridSizing(sizeDeclaration)
    let cellSum = sizeDeclaration * sizeDeclaration
    newGridInitialize(cellSum)
  }
}

let etchGridSizing = (sizeDeclaration) => {
  let etchCells = document.querySelector('.project-wrapper').style.cssText = "grid-template-rows:repeat(" + sizeDeclaration + ", 1fr); grid-template-columns:repeat(" + sizeDeclaration + ", 1fr);"
  return etchCells
}

let etchCellCreation = () => {
  let sum = sizeDeclaration * sizeDeclaration
  return sum
}

// let colorModeActivate = () => {
//   clearTheGrid()

// }

window.addEventListener('load', gridInitialize)
clearGrid.addEventListener('click', clearTheGrid)
clearGrid.addEventListener('click', etchSizeDeclaration)