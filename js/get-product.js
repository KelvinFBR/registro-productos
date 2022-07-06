const fetchData = async () => {
  try {
    const res = await fetch("./js/productos.json");
    const data = await res.json();

    if (!localStorage.getItem("product")) {
      localStorage.setItem("product", JSON.stringify(data));
    }
  } catch (error) {
    console.log(error);
  }
};

const getDataStorage = () => {
  if (localStorage.getItem("product")) {
    return JSON.parse(localStorage.getItem("product"));
  }
};

export { fetchData, getDataStorage };
