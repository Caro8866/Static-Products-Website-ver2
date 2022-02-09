const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
  .then(function (res) {
    return res.json();
  })

  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);

  // GRAB TEMPLATE
  const template = document.querySelector("#productTemplate").content;

  // CLONE TEMPLATE
  const copy = template.cloneNode(true);

  // CHANE CONTENT
  // image src & alt
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  copy.querySelector("img").alt = product.productdisplayname;

  // h3 display name
  copy.querySelector("h3").textContent = product.productdisplayname;

  // subtitle
  copy.querySelector(
    ".subtitle"
  ).textContent = `${product.articletype} | ${product.brandname}`;

  // price
  copy.querySelector(".price").textContent = `${product.price} DKK`;
  //sold out
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  // discounted price
  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
    copy.querySelector(".discounted p").textContent =
      Math.ceil((product.discount / 100) * product.price) + "DKK";
  }
  // GRAB PARENT
  const parent = document.querySelector("main");

  // APPEND
  parent.appendChild(copy);
}
