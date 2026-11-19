import { Outlet } from "react-router";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

function App() {
  return (
    <div className="pt-5 px-10">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
