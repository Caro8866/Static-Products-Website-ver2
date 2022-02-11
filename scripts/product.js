// const url = "https://kea-alt-del.dk/t7/api/products/2801";
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = "https://kea-alt-del.dk/t7/api/products/" + id;

// Step 1 Fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

// Step 2 Populate page

function showProduct(product) {
  console.log(product);
  // Breadcrumb
  document.querySelector(".breadcrumbs .brand").textContent = product.brandname;
  document.querySelector(".breadcrumbs .productName").textContent =
    product.productdisplayname;

  // Product Image
  document.querySelector(
    "img.productImage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;

  //PurchaseBox
  document.querySelector(".purchaseBox span.brand").textContent =
    product.brandname;
  document.querySelector(".purchaseBox .subCategory").textContent =
    product.articletype;
  document.querySelector(".purchaseBox h3").textContent =
    product.price + " DKK";

  // Product Info
  document.querySelector(".productInfo dl dd:nth-of-type(1)").textContent =
    product.productdisplayname;

  document.querySelector(".productInfo dl dd:nth-of-type(2)").textContent =
    product.basecolour;

  document.querySelector(".productInfo dl dd:nth-of-type(3)").textContent =
    product.id;

  // Brand Info
  document.querySelector(".brandInfo img").src = product.brandimage;
  document.querySelector(".brandInfo img").alt =
    product.brandname + " Brand Logo";
  document.querySelector(".brandInfo p").textContent = product.brandbio;
}
