import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
