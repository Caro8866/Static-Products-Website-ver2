const url = "https://kea-alt-del.dk/t7/api/brands";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleBrandList(data);
  });

function handleBrandList(data) {
  data.sort(function (a, b) {
    if (a.brandname < b.brandname) {
      return -1;
    }
    if (a.brandname > b.brandname) {
      return 1;
    }
    return 0;
  });
  data.forEach(showBrand);
}

function showBrand(product) {
  // GRAB TEMPLATE
  const template = document.querySelector("#categoryTemplate").content;

  // CLONE TEMPLATE
  const copy = template.cloneNode(true);

  // CHANE CONTENT
  copy.querySelector(
    "a"
  ).href = `productlist.html?brandname=${product.brandname}`;

  copy.querySelector("a > span").textContent = `${product.brandname}`;

  const firstLetter = product.brandname[0]; // Selecting first letter

  // GRAB PARENT
  const parent = document.querySelector(`#letter_${firstLetter} ol`); // Selecting Letter sections

  // APPEND
  if (parent) {
    parent.appendChild(copy);
  } else {
    console.log("no place in the DOM for", product); // Showing which brands cannot be shown due to name issues ex. null or other characters
  }
}
