const getCategories = async (signal) => {
  const url = "https://fakestoreapi.com/products/categories";
  const response = await fetch(url, {signal});

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const result = await response.json();
  return result;
};

export { getCategories };
