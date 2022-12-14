import Home from "./Home";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Missions from "./Missions";
import Gallery from "./Gallery";
import Blog from "./Blog";
import Footer from "./Footer";
import PageNotFound from "./PageNotFound";
import CopyRight from "./CopyRight";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Missions />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      <CopyRight />
    </div>
  );
}

export default App;
