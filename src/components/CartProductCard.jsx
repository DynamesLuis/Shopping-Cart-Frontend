import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";

export default function CartProductCard({ product }) {
  const { title, description, image, price, quantity } = product;
  const { increaseQuantity, decreaseQuantity, deleteFromCart } = useCart();
  const {showToast} = useToast();
  const itemSubtotal = price * quantity;

  const handleDeleteClick = (productId) => {
    deleteFromCart(productId);
    showToast("Product deleted from cart", "delete");
  }

  return (
    <div className="flex flex-col gap-4 sm:h-50 sm:flex-row">
      <div className="flex aspect-square w-full items-center justify-center rounded-md bg-gray-100 sm:h-full sm:w-auto">
        <img src={image} alt={title} className="h-4/5 w-4/5 object-contain" />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between gap-3 py-1">
        <div className="flex justify-between gap-2">
          <p className="font-bold text-lg sm:text-2xl">{title}</p>
          <p className="shrink-0 font-bold text-lg sm:text-2xl">
            ${itemSubtotal}
          </p>
        </div>

        <p className="text-start text-sm sm:text-base">{description}</p>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 px-2 py-1">
            <button
              onClick={() => decreaseQuantity(product.id)}
              className="cursor-pointer rounded-full bg-slate-100 p-1 transition-colors duration-300 hover:scale-105 hover:bg-slate-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-minus"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
              </svg>
            </button>
            <p className="min-w-4 text-center text-lg">{quantity}</p>
            <button
              onClick={() => increaseQuantity(product.id)}
              className="cursor-pointer rounded-full bg-slate-100 p-1 transition-colors duration-300 hover:scale-105 hover:bg-slate-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 5l0 14" />
                <path d="M5 12l14 0" />
              </svg>
            </button>
          </div>
          <button
            onClick={() => handleDeleteClick(product.id)}
            className="cursor-pointer text-red-500 hover:text-red-700"
          >
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-trash"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 7l16 0" />
              <path d="M10 11l0 6" />
              <path d="M14 11l0 6" />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
