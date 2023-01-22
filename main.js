const ratingState = document.getElementById('rating-state')
const thankYouState = document.getElementById('thank-you-state')
const ratingSelection = document.getElementById('rating-selection')

const ratingButton1 = document.getElementById('rating-button-1')
const ratingButton2 = document.getElementById('rating-button-2')
const ratingButton3 = document.getElementById('rating-button-3')
const ratingButton4 = document.getElementById('rating-button-4')
const ratingButton5 = document.getElementById('rating-button-5')
const submitButton = document.getElementById('submit-button')

// const handleSubmitClick = () => {
//   document.getElementById('rating-state').style.display = 'none'
// }
// submitButton.addEventListener('click', handleSubmitClick)

let selected = 0

ratingButton1.addEventListener('click', () => {
  ratingButton1.classList.add('active-rating-button')
  selected = 1
})

ratingButton2.addEventListener('click', () => {
  ratingButton2.classList.add('active-rating-button')
  selected = 2
})

ratingButton3.addEventListener('click', () => {
  ratingButton3.classList.add('active-rating-button')
  selected = 3
})

ratingButton4.addEventListener('click', () => {
  ratingButton4.classList.add('active-rating-button')
  selected = 4
})

ratingButton5.addEventListener('click', () => {
  ratingButton5.classList.add('active-rating-button')
  selected = 5
})
