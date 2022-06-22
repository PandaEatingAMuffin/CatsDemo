
const selectElement = document.querySelector('.ice-cream');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  result.textContent = `You like ${event.target.value}`;
});

window.addEventListener('load', (event) => {
  alert('Je ziel wordt hierbij in beslag genomen door de almachtige Keppelupu')
})