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
        <Route path="about" element={<About />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="blog" element={<Blog />} />
        <Route path="heart" element={<Heart />} />
        <Route path="praduct" element={<Praduct />} />
        <Route path="profil" element={<Profil />} />
      </Routes>
    </>
  );
}

export default App;
