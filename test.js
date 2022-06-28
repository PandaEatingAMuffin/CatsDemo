
const selectElement2 = document.querySelector('.four');
selectElement2.addEventListener('change', (event) => {
  alert('Kasper is trots op je voortgang')
})

const checked = document.querySelector('#accept:checked') !== null;
console.log(checked);