import { useEffect, useState } from "react";
import HomeProductCard from "../components/HomeProductCard";
import { getProducts } from "../services/productsService";
import ProductSkeleton from "../components/ProductSkeleton";
import ErrorMsg from "./ErrorMsg";
import collection from "../assets/collection.avif";

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const productsData = await getProducts(controller.signal, 4);

        setFeaturedProducts(productsData);
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
    <div className="bg-white text-neutral-900">
      <section
        className="mx-auto grid max-w-7xl gap-10
        px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24"
      >
        <div className="space-y-6">
          <span
            className="text-xs font-medium uppercase
            tracking-[0.25em] text-neutral-500"
          >
            New Collection 2026
          </span>

          <h2
            className="max-w-lg text-4xl font-medium
            leading-tight tracking-tight sm:text-5xl md:text-7xl"
          >
            Simplicity is the ultimate sophistication.
          </h2>

          <p
            className="max-w-md text-base leading-relaxed
            text-neutral-500"
          >
            Discover timeless essentials designed for everyday living. Less
            clutter, more meaning.
          </p>

          <a
            href="/shop"
            className="inline-flex items-center gap-3 bg-neutral-900
              px-7 py-4 text-sm text-white transition
              hover:bg-neutral-700"
          >
            Explore Collection
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div
          className="h-[400px] overflow-hidden bg-neutral-100
          md:h-[520px]"
        >
          <img
            src={collection}
            alt="Featured collection"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span
              className="text-xs uppercase tracking-widest
              text-neutral-500"
            >
              Carefully selected
            </span>

            <h2 className="mt-2 text-3xl font-medium tracking-tight">
              Featured Products
            </h2>
          </div>

          <a
            href="/shop"
            className="hidden text-sm underline
              underline-offset-4 sm:block"
          >
            View all products →
          </a>
        </div>

        <div
          className="grid grid-cols-2 gap-5
          md:grid-cols-4 md:gap-7"
        >
          {featuredProducts.map((product) => (
            <HomeProductCard key={product.id} productData={product} />
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div
          className="flex flex-col items-center justify-center
          bg-neutral-100 px-6 py-20 text-center"
        >
          <span
            className="text-xs uppercase tracking-[0.3em]
            text-neutral-500"
          >
            Our Philosophy
          </span>

          <h2
            className="mt-5 text-4xl font-medium
            tracking-tight md:text-6xl"
          >
            Less, but better.
          </h2>

          <p
            className="mt-5 max-w-xl text-sm leading-relaxed
            text-neutral-500 md:text-base"
          >
            We believe in thoughtful design, timeless pieces and products that
            make everyday life better.
          </p>

          <a
            href="/shop"
            className="mt-8 border border-neutral-900
              px-7 py-3 text-sm transition
              hover:bg-neutral-900 hover:text-white"
          >
            Discover more
          </a>
        </div>
      </section>
    </div>
  );
}
