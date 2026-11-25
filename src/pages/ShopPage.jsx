import { useEffect, useState } from "react";
import { getProducts } from "../services/productsService";
import { getCategories } from "../services/categoryService";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";
import ErrorMsg from "./ErrorMsg";
import ProductPageHeader from "../components/ProductPageHeader";

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === null || product.category === selectedCategory) &&
      product.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          getProducts(controller.signal),
          getCategories(controller.signal),
        ]);

        setProducts(productsData);
        setCategories(categoriesData);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  if (isLoading)
    return (
      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    );

  if (error) {
    return <ErrorMsg message={error} />;
  }

  return (
    <div className="pt-20">
      <ProductPageHeader
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryClick}
      />
      <div className="w-xs mt-2">
        <label htmlFor="search" className="relative flex items-center">
          <input
            type="text"
            name="search"
            id="search"
            onChange={handleSearchChange}
            value={searchQuery}
            className="w-full rounded-md py-2 px-3 border border-solid border-brack"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute right-1  pointer-events-none"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 10a7 7 0 1 0 14 0a7 7 0 0 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
        </label>
      </div>
      <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5">
        {filteredProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
