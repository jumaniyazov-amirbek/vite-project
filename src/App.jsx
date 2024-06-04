import Header from "./Home/Header/Header";
import Mainn from "./Home/Mainn";
import Footer from "./Home/Footer/Footer";
import About from "./Home/page/About";
import ContactUs from "./Home/page/ContactUs";
import Blog from "./Home/page/Blog";
import Heart from "./Home/page/Heart";
import Praduct from "./Home/page/Praduct";
import Profil from "./Home/page/Profil";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Mainn />
      <Footer />
      <Routes>
        <Route path="About" element={<About />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="Heart" element={<Heart />} />
        <Route path="Praduct" element={<Praduct />} />
        <Route path="Profil" element={<Profil />} />
      </Routes>
    </>
  );
}

export default App;
