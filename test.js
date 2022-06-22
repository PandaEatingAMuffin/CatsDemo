
const selectElement = document.querySelector('.ice-cream');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  result.textContent = `You like ${event.target.value}`;
});

window.addEventListener('load', (event) => {
  alert('Je ziel wordt hierbij in beslag genomen door de almachtige Keppelupu')
})

const selectElement = document.querySelector('.bigcheck');
selectElement.addEventListener('change', (event) => {
  alert('Keppelupu is trots op je voortgang')
})