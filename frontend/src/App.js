import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Industries from "@/pages/Industries";
import AboutUs from "@/pages/AboutUs";
import ContactUs from "@/pages/ContactUs";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main data-testid="site-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" richColors />
      </BrowserRouter>
    </div>
  );
}

export default App;
