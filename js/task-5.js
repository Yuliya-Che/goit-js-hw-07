const nameInputRef = document.getElementById("name-input");
const nameOutputRef = document.getElementById("name-output");

function processUserInput(event) {
  if (event.target.value !== "") {
    nameOutputRef.textContent = event.target.value;
  } else {
    nameOutputRef.textContent = `незнакомец`;
  }
}
nameInputRef.addEventListener("input", processUserInput);
