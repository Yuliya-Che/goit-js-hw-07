const totalCategories = document.querySelectorAll(".item");
console.log(`В списке ${totalCategories.length} категории.`);

totalCategories.forEach((category) =>
  console.log(`Категория: ${category.querySelector("h2").textContent}
Количество элементов: ${category.querySelectorAll("li").length}`)
);
