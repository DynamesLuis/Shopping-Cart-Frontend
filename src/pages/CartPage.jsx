import CartProductCard from "../components/CartProductCard";
import DescriptionPage from "../components/shared/DescriptionPage";
import TitlePage from "../components/shared/TitlePage";

export default function CartPage() {
  return (
    <div className="pt-20 text-center">
      <TitlePage title={"Your Cart"} />
      <DescriptionPage
        description={
          "Review your selected items below before proceeding to checkout make sure everything looks good"
        }
      />
      <div className="flex gap-5 mt-15">
        <div className="flex flex-col gap-10 flex-3">
          <CartProductCard />
          <CartProductCard />
          <CartProductCard />
        </div>
        <div className="flex flex-col gap-2 flex-2 text-start">
          <h3 className="font-bold">Summary</h3>
          <div className="flex justify-between">
            <p>Subtotal:</p>
            <p className="font-semibold">$1500</p>
          </div>
          <div className="flex justify-between">
            <p>Estimated delivery and Handling:</p>
            <p className="font-semibold">Free</p>
          </div>
          <div className="flex justify-between">
            <p>Estimated taxes:</p>
            <p className="font-semibold">$125</p>
          </div>
          <div className="flex justify-between">
            <p className="font-bold">Total</p>
            <p className="font-bold">$1625</p>
          </div>
          <button className="mt-5 cursor-pointer bg-black text-white px-1 py-2 rounded-full">Checkout</button>
        </div>
      </div>
    </div>
  );
}
