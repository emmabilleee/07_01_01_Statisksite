fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  cats.forEach(showCategory);
}

function showCategory(cat) {
  console.log(cat);
  //Fang template
  const template = document.querySelector("template").content;

  //Lav en kopi
  const clone = template.cloneNode(true);

  //Ændre indhold
  clone.querySelector(".text_cl").textContent = cat.category;
  clone.querySelector("a").href = `productlist.html?category=${cat.category}`;

  //Append
  document.querySelector(".categorylist").appendChild(clone);
}
