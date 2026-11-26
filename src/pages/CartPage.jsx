import CartProductCard from "../components/CartProductCard";
import DescriptionPage from "../components/shared/DescriptionPage";
import TitlePage from "../components/shared/TitlePage";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, totalPrice } = useCart();
  const delivery = 125;
  const total = (totalPrice + delivery).toFixed(2);

  return (
    <div className="pt-20 text-center">
      <TitlePage title={"Your Cart"} />
      <DescriptionPage
        description={
          "Review your selected items below before proceeding to checkout make sure everything looks good"
        }
      />
      <div className="mt-10 flex flex-col gap-10 lg:mt-15 lg:flex-row lg:gap-8">
        <div className="flex min-w-0 flex-1 flex-col gap-8">
          {cart.map((product) => {
            return <CartProductCard product={product} />;
          })}
        </div>
        <div className="flex flex-col gap-3 text-start lg:w-80 lg:flex-none">
          <h3 className="font-bold">Summary</h3>
          <div className="flex justify-between">
            <p>Subtotal:</p>
            <p className="font-semibold">${totalPrice}</p>
          </div>
          <div className="flex justify-between ga-4">
            <p className="min-w-0">Estimated delivery and Handling:</p>
            <p className="shrink-0 font-semibold">
              {delivery === 0 ? "Free" : `$${delivery}`}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="font-bold">Total</p>
            <p className="font-bold">${total}</p>
          </div>
          <button className="mt-5 cursor-pointer bg-black text-white px-1 py-2 rounded-full">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
