fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //Fang template
  const template = document.querySelector("#smallProductTemplate").content;

  //Lav en kopi
  const copy = template.cloneNode(true);

  //Ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldout");
    copy.querySelector(".brand").textContent = product.soldout;
  }
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".brand").textContent = product.brandname;
  copy.querySelector(".subcat").textContent = product.articletype;
  copy.querySelector(".price").textContent = product.price;
  if (product.discount) {
    copy.querySelector("article").classList.add("sales");
    copy.querySelector("article").classList.add("pricediscounted");
    copy.querySelector(".brand").textContent = product.discount;
  }

  copy.querySelector(".discount").textContent = product.discount;

  //Append
  document.querySelector("main").appendChild(copy);
}
