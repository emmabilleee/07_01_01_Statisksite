fetch("https://kea-alt-del.dk/t7/api/products/1550")
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".img_product").src = `https://kea-alt-del.dk/t7/images/webp/640/${1550}.webp`;
  document.querySelector(".purchaseBox h3").textContent = product.productdisplayname;
  document.querySelector(".purchaseBox .brand").textContent = product.brandname;
  document.querySelector(".purchaseBox .subcat").textContent = product.articletype;
  document.querySelector(".purchaseBox .color").textContent = product.basecolour;
  document.querySelector(".purchaseBox .inventorynumber").textContent = product.relid;
  document.querySelector(".purchaseBox .price").textContent = product.price;
}
