const clearGrid = document.getElementById('btn-1')
const colorMode = document.getElementById('btn-2')
const blackWhiteMode = document.getElementById('btn-3')
const wrapper = document.getElementById('project-wrapper')

let standardEtch = true
let colorEtch = false
let blackWhiteEtch = false

//Adds divs based on user input and/or on page initialization

const createEtchElements = (wrapper) => {
  const miniBlock = document.createElement('div');
  wrapper.appendChild(miniBlock)
  miniBlock.classList.add('miniBlock')
  if (standardEtch === true && colorEtch === false && blackWhiteEtch === false) {
      miniBlock.addEventListener('mouseover', () => {
        miniBlock.classList.add('active-etch-block')
      })
  } else if (colorEtch === true && standardEtch === false && blackWhiteEtch === false) {
      miniBlock.addEventListener('mouseover', colorize, {once: true})
  }
}

const clearTheGrid = () => {
  const clearElements = Array.from(document.getElementsByClassName('active-etch-block'))
  clearElements.forEach(clearElements => {
    clearElements.classList.remove('active-etch-block')
  })
  removeCells(wrapper)
}

const removeCells = (wrapper) => {
  while (wrapper.firstChild) {
    wrapper.removeChild(wrapper.firstChild)
  }
}

const gridInitialize = () => {
  for (let i = 0; i <= 255; i++) {
    createEtchElements(wrapper)
  }
}

const newGridInitialize = (cellSum) => {
  for (let i = 0; i < cellSum; i++) {
    createEtchElements(wrapper)
  }
}

const etchSizeDeclaration = () => {
  let sizeDeclaration = prompt("How big of a grid do you want? (max = 50)")
  validateInput(sizeDeclaration)
}

const validateInput = (sizeDeclaration) => {
  if (sizeDeclaration <= 50) {
    etchGridSizing(sizeDeclaration)
    let cellSum = sizeDeclaration * sizeDeclaration
    newGridInitialize(cellSum)
  } else {
    alert ("Error - too many squares! Pick a value less than 50.")
    let sizeDeclaration = prompt("How big of a grid do you want? (max = 50)")
    validateInput(sizeDeclaration)
  }
}

const etchGridSizing = (sizeDeclaration) => {
  let etchCells = document.querySelector('.project-wrapper').style.cssText = `grid-template-rows:repeat(${sizeDeclaration}, 1fr); grid-template-columns:repeat(${sizeDeclaration}, 1fr);`
  return etchCells
}

const normalModeActivate = () => {
  clearTheGrid()
  colorEtch = false
  standardEtch = true
  blackWhiteEtch = false
  etchSizeDeclaration()
}

const colorModeActivate = () => {
  clearTheGrid()
  colorEtch = true
  standardEtch = false
  blackWhiteEtch = false
  etchSizeDeclaration()
}

const darkenModeActivate = () => {
  clearTheGrid()
  colorEtch = false
  standardEtch = false
  blackWhiteEtch = true
  etchSizeDeclaration()
  const darkenBlocks = Array.from(document.getElementsByClassName('miniBlock'))
  darkenBlocks.forEach(block => {
      let opacityValue = 0;
      block.addEventListener('mouseover', (e) => {
        if (opacityValue <= 9) {
          ++opacityValue
          let alphaVal = opacityValue / 10
          e.target.style = `background-color: rgba(0,0,0,${alphaVal})`
        }
      })
  })
}

const colorize = (e) => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  e.target.style = `background-color: rgb(${r}, ${g}, ${b})`
}

window.addEventListener('load', gridInitialize)

clearGrid.addEventListener('click', clearTheGrid)
clearGrid.addEventListener('click', normalModeActivate)

colorMode.addEventListener('click', clearTheGrid)
colorMode.addEventListener('click', colorModeActivate)

blackWhiteMode.addEventListener('click', clearTheGrid)
blackWhiteMode.addEventListener('click', darkenModeActivate)