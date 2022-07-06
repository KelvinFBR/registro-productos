import { getDataStorage } from "./get-product";

const template = document.querySelector("#row-product").content;
const bodyTable = document.querySelector("#body-table");

const saveProductStorage = (id, name, amount, price) => {
  let storageProducts = JSON.parse(localStorage.getItem("product"));
  storageProducts.push({
    ["id"]: id,
    ["name"]: name,
    ["price"]: price,
    ["amount"]: amount,
  });

  localStorage.setItem("product", JSON.stringify(storageProducts));
};

const createRowProduct = (id, name, amount, price) => {
  const cloneTemplate = template.cloneNode(true);

  cloneTemplate.querySelector(".id").textContent = id;
  cloneTemplate.querySelector(".name").textContent = name;
  cloneTemplate.querySelector(".amount").textContent = amount;
  cloneTemplate.querySelector(".price").textContent = price;
  bodyTable.appendChild(cloneTemplate);
};

const createRowProductStorage = (productosArr) => {
  bodyTable.textContent = "";
  productosArr.forEach((product) => {
    const { id, name, amount, price } = product;
    createRowProduct(id, name, amount, price);
  });
};

export { createRowProduct, createRowProductStorage, saveProductStorage };
