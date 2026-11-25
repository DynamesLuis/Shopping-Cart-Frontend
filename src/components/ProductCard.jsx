import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addTocart } = useCart();

  return (
    <div className="flex h-full flex-col group">
      <div className="flex h-52 items-center justify-center overflow-hidden rounded-lg bg-gray-100 p-4">
        <img
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          src={product.image}
          alt={product.title}
        />
      </div>

      <p className="mt-2 min-h-12 line-clamp-2 font-semibold">
        {product.title}
      </p>
      <div className="mt-2 flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#FFA41C"
          className="icon icon-tabler icons-tabler-filled icon-tabler-star"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" />
        </svg>
        <p className="flex items-center gap-1">
          {product.rating.rate}{" "}
          <span className="text-xs">({product.rating.count})</span>
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-semibold">${product.price}</p>
        <button
          onClick={() => addTocart(product)}
          className="cursor-pointer w-28 border-solid border-2 border-slate-500 rounded-full py-1 px-2 hover:bg-black hover:text-white hover:border-black transition-all duration-300 ease"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
