const inputFontRange = document.querySelector("#font-size-control");
const textToTransform = document.querySelector("#text");

const processInput = () => {
  textToTransform.style.fontSize = `${inputFontRange.value}px`;
};

inputFontRange.addEventListener("input", processInput);
