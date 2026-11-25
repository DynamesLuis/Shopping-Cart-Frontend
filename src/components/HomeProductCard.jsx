export default function HomeProductCard({ productData }) {
  return (
    <article className="group">
      <div className="overflow-hidden bg-neutral-100">
        <img
          src={productData.image}
          alt={productData.title}
          className="aspect-[4/5] w-full object-cover
            transition-transform duration-500
            group-hover:scale-105"
        />
      </div>

      <div className="mt-3 flex justify-between gap-2">
        <h3 className="text-sm font-medium">{productData.title}</h3>

        <p className="text-sm text-neutral-500">
          ${productData.price.toFixed(2)}
        </p>
      </div>
    </article>
  );
}
