const counterElem = document.querySelector('#counter');
const minusElem = document.querySelector('#minus');
const plusElem = document.querySelector('#plus');

let count = 0;

function updateCounter() {
  counterElem.textContent = count;
}

minusElem.addEventListener('click', () => {
  if (count > 0) {
    count--;
    updateCounter();
  }
});

plusElem.addEventListener('click', () => {
  if (count < 10) {
    count++;
    updateCounter();
  }
});
                                           