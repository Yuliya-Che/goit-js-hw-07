// В HTML есть пустой список ul#ingredients.
/* <ul id="ingredients"></ul> */
// В JS есть массив строк.
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст
// отдельный li, после чего вставит все li за одну операцию в список
// ul.ingredients.Для создания DOM - узлов используй document.createElement().;

const ingredientsUl = document.getElementById("ingredients");

const ingredientsLi = ingredients.map((elem) => {
  const ingredient = document.createElement("li");
  ingredient.textContent = elem;
  // console.log(ingredient);
  return ingredient;
});

ingredientsUl.append(...ingredientsLi);
// console.log(ingredientsUl);
