const count = document.getElementById("value");
const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const decrement = () => {
  counterValue--;
  count.textContent = counterValue;
};
const increment = () => {
  counterValue++;
  count.textContent = counterValue;
};

decBtn.addEventListener("click", () => {
  decrement(count);
});
incBtn.addEventListener("click", () => {
  increment(count);
});
