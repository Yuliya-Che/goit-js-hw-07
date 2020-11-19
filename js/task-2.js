const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsUl = document.getElementById("ingredients");

const ingredientsLi = ingredients.map((elem) => {
  const ingredient = document.createElement("li");
  ingredient.textContent = elem;
  return ingredient;
});

ingredientsUl.append(...ingredientsLi);
