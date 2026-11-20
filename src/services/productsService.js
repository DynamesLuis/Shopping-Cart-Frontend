const getProducts = async () => {
  const url = "https://fakestoreapi.com/products";
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const result = await response.json();
  return result;
};

export { getProducts };
