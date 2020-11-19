const inputRef = document.querySelector("#validation-input");
const inputLength = inputRef.getAttribute("data-length");

inputRef.addEventListener("blur", validateInput);

function validateInput(event) {
  const userInput = event.target.value;
  inputRef.classList.remove("invalid");
  inputRef.classList.remove("valid");

  userInput.length === Number(inputLength)
    ? inputRef.classList.add("valid")
    : inputRef.classList.add("invalid");
}
