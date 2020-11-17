/*Задание 7
Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> */

const inputFontRange = document.querySelector("#font-size-control");
const textToTransform = document.querySelector("#text");

const processInput = () => {
  textToTransform.style.fontSize = `${inputFontRange.value}px`;
};

inputFontRange.addEventListener("input", processInput);
