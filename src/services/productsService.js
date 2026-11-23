const getProducts = async (signal) => {
  const url = "https://fakestoreapi.com/products";
  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const result = await response.json();
  return result;
};

export { getProducts };
