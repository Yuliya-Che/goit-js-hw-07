const nameInputRef = document.getElementById("name-input");
const nameOutputRef = document.getElementById("name-output");

nameInputRef.addEventListener("input", (event) => {
  nameOutputRef.textContent =
    event.target.value !== "" ? event.target.value : "незнакомец";
});
