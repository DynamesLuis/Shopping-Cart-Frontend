import { Outlet } from "react-router";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import { CartProvider } from "./context/CartContext";
import { ToastProvider } from "./context/ToastContext";

function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <div className="pt-5 px-10">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </ToastProvider>
  );
}

export default App;
