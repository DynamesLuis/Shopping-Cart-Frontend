const getProducts = async (signal, limit) => {
  const url = new URL("https://fakestoreapi.com/products");
  
  if (limit) {
    url.searchParams.set("limit", limit);
  }
  
  const response = await fetch(url, { signal });
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const result = await response.json();
  return result;
};

export { getProducts };
