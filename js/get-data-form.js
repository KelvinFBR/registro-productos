import { getDataStorage } from "./get-product";

const form = document.getElementById("form");

const getDataForm = (e, callback) => {
  e.preventDefault();
  let idProduct = JSON.stringify(new Date().getTime());
  //!   modificacion
  idProduct = idProduct.slice(9, 13);

  const data = new FormData(form);

  //* obtener datos del formulario
  const productName = data.get("name");
  const productAmount = data.get("amount");
  const productPrice = data.get("price");

  //* reiniciar formulario
  form.reset();

  return callback(idProduct, productName, productAmount, productPrice);
};

export { getDataForm };
