/*-- bio card js --*/
const cards = getAll('[data-js=card]')
cards.forEach(card => {
  const content = card.querySelector('p')
  card.addEventListener('click', () => {
    content.classList.toggle('hidden')
  })
  
})
function getAll(selector) {
  return document.querySelectorAll(selector)
}