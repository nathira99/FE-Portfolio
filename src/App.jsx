import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <div className="bg-gray-900 text-gray-100">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
