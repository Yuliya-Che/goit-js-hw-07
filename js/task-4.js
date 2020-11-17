/* Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div > */
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
