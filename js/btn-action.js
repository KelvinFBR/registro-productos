import { allCalc } from "./calc";
import { createRowProductStorage } from "./created-row";
import { getDataStorage } from "./get-product";

const form = document.getElementById("form");

const product = {
  id: "",
};

const realizeUpdate = () => {
  const btn = form.elements[3];

  btn.type = "reset";
  btn.textContent = "Actualizar";
  btn.addEventListener("click", () => {
    if (btn.textContent === "Actualizar") {
      let storageProduct = getDataStorage();
      storageProduct.forEach((prod) => {
        if (prod.id === product.id) {
          prod.name = form.name.value;
          prod.amount = form.amount.value;
          prod.price = form.price.value;
        }
      });

      localStorage.setItem("product", JSON.stringify(storageProduct));

      createRowProductStorage(getDataStorage());

      //* calcular los precios y las cantidades
      allCalc();

      btn.textContent = "Registrar";

      setTimeout(() => {
        btn.type = "submit";
      }, 1000);
    }
  });
};

const deleteProduct = (idProduct) => {
  let storageProduct = getDataStorage();
  storageProduct = storageProduct.filter((prod) => prod.id !== idProduct);

  localStorage.setItem("product", JSON.stringify(storageProduct));

  createRowProductStorage(getDataStorage());
};

const updateProduct = (idProduct) => {
  let storageProduct = getDataStorage();
  storageProduct = storageProduct.find((prod) => prod.id === idProduct);

  form.name.value = storageProduct.name;
  form.amount.value = storageProduct.amount;
  form.price.value = storageProduct.price;

  product.id = idProduct;
  realizeUpdate(idProduct);
};

export { deleteProduct, updateProduct, product };
