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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const filteredProducts =
    selectedCategory === null
      ? products
      : products.filter((product) => product.category === selectedCategory);

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
      <div className="mt-15 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5">
        {filteredProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
