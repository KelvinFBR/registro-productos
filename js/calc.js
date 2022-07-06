import { getDataStorage } from "./get-product";

const totalPrice = document.querySelector("#total-price");
const totalAmount = document.querySelector("#total-amount");

const calcPrice = () => {
  const prices = [];

  getDataStorage().forEach((product) => {
    prices.push(product.price * 1);
  });

  totalPrice.textContent = prices.reduce(
    (actual, current) => current + actual,
    0
  );
};
const calcAmount = () => {
  const amounts = [];

  getDataStorage().forEach((product) => {
    amounts.push(product.amount * 1);
  });

  totalAmount.textContent = amounts.reduce(
    (actual, current) => current + actual,
    0
  );
};

const allCalc = (e) => {
  //* calcular los precios y las cantidades
  calcPrice();
  calcAmount();
};

export { allCalc };
