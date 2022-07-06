import { deleteProduct, updateProduct } from "./js/btn-action";
import { allCalc } from "./js/calc";
import {
  createRowProduct,
  createRowProductStorage,
  saveProductStorage,
} from "./js/created-row";
import { getDataForm } from "./js/get-data-form";
import { fetchData, getDataStorage } from "./js/get-product";

const form = document.getElementById("form");

//* init
window.addEventListener("load", async () => {
  //* para peticiones de una api
  //   await fetchData();

  if (!localStorage.getItem("product")) {
    localStorage.setItem("product", JSON.stringify([]));
  }

  createRowProductStorage(getDataStorage());

  //* calcular los precios y las cantidades
  allCalc();
});

//* Agregar producto a la tabla
form.addEventListener("submit", (e) => {
  getDataForm(e, (id, name, amount, price) => {
    createRowProduct(id, name, amount, price);
    saveProductStorage(id, name, amount, price);

    //* calcular los precios y las cantidades
    allCalc();
  });
});

//* eliminar y actualizar producto
document.addEventListener("click", (e) => {
  if (e.target.matches("#btn-delete") || e.target.matches("#btn-update")) {
    let idProduct =
      e.target.parentElement.parentElement.querySelector(".id").textContent;

    if (e.target.matches("#btn-delete")) {
      deleteProduct(idProduct);

      //* calcular los precios y las cantidades
      allCalc();
    }

    if (e.target.matches("#btn-update")) {
      updateProduct(idProduct);
    }
  }
});
