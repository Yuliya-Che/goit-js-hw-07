/*В HTML есть список категорий ul#categories.;
Напиши скрипт, который выполнит следующие операции.;
1) Посчитает и выведет в консоль количество категорий в ul#categories,
то есть элементов li.item.Получится 'В списке 3 категории.'.;
2) Для каждого элемента li.item в списке ul#categories, найдет и выведет
в консоль текст заголовка элемента(тега h2) и количество элементов
в категории(всех вложенных в него элементов li).;
Например для первой категории получится:

Категория: Животные;
Количество элементов: 4;
*/

// 1)
const totalCategories = document.querySelectorAll(".item");
console.log(`В списке ${totalCategories.length} категории.`);
// 2
const h2 = document.getElementById("categories").querySelectorAll("h2");
const ul = document.getElementById("categories").querySelectorAll("ul");

for (let i = 0; i < ul.length; i++) {
  console.log(
    `Категория: ${h2[i].textContent}\nКоличество элементов: ${
      ul[i].querySelectorAll("li").length
    }`
  );
}
