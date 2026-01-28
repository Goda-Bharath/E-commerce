import { BrowserRouter, Route, Routes } from "react-router-dom";
import Allproducts from "./components/Allproducts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Men from "./components/Men";
import Women from "./components/women";  
import Kids from "./components/Kids";
import Bueaty from "./components/Bueaty";
import Contact from "./components/Contact";
import ProductDetails from "./components/product-details";
import ColorSelector from "./components/data1";
import Carousel from "./components/coursel";
import WhatsAppChat from "./components/Chatbot";
import Coustermercare from "./components/coustermercare";


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Carousel/>
      <Routes>
        <Route path="/" element={<Allproducts />} />
        <Route path="/men-dress" element={<Men />} />
        <Route path="/women-saress-dress" element={<Women />} />
        <Route path="/kids-dress" element={<Kids />} />
        <Route path="/bueaty-products" element={<Bueaty />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/customer-care" element={<Coustermercare />} />
        <Route path="/coustermer-care" element={<Coustermercare />} />
        <Route path="/" element={<ColorSelector/>}></Route>
      </Routes>
      <Footer />
      <WhatsAppChat/>
      <Contact />
    </BrowserRouter>
  );
}
export default App;
