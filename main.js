const ratingState = document.getElementById('rating-state')
const thankYouState = document.getElementById('thank-you-state')
const ratingSelection = document.getElementById('rating-selection')

const ratingButton1 = document.getElementById('rating-button-1')
const ratingButton2 = document.getElementById('rating-button-2')
const ratingButton3 = document.getElementById('rating-button-3')
const ratingButton4 = document.getElementById('rating-button-4')
const ratingButton5 = document.getElementById('rating-button-5')

const ratingButtons = [
  ratingButton1,
  ratingButton2,
  ratingButton3,
  ratingButton4,
  ratingButton5,
]

let selected = 0

document.getElementById('submit-button').addEventListener('click', () => {
  if (selected === 0) return
  ratingState.style.display = 'none'
  thankYouState.style.display = 'block'
})

const undoSelection = () => {
  ratingButtons.forEach((ratingButton) => {
    ratingButton.classList.remove('active-rating-button')
  })
}

ratingButton1.addEventListener('click', () => {
  if (selected !== 0) {
    undoSelection()
  }
  ratingButton1.classList.add('active-rating-button')
  selected = 1
  ratingSelection.innerHTML = selected
})

ratingButton2.addEventListener('click', () => {
  if (selected !== 0) {
    undoSelection()
  }
  ratingButton2.classList.add('active-rating-button')
  selected = 2
  ratingSelection.innerHTML = selected
})

ratingButton3.addEventListener('click', () => {
  if (selected !== 0) {
    undoSelection()
  }
  ratingButton3.classList.add('active-rating-button')
  selected = 3
  ratingSelection.innerHTML = selected
})

ratingButton4.addEventListener('click', () => {
  if (selected !== 0) {
    undoSelection()
  }
  ratingButton4.classList.add('active-rating-button')
  selected = 4
  ratingSelection.innerHTML = selected
})

ratingButton5.addEventListener('click', () => {
  if (selected !== 0) {
    undoSelection()
  }
  ratingButton5.classList.add('active-rating-button')
  selected = 5
  ratingSelection.innerHTML = selected
})
