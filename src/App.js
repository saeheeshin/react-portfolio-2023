import "./app.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/global/header/header.component";
import Footer from "./components/global/footer/footer.component";

import PageHome from "./pages/home/home.page";
import PagePortfolio from "./pages/portfolio/portfolio.page";
import PageResume from "./pages/resume/resume.page";
import PageAbout from "./pages/about/about.page";
import PageError from "./pages/error/error.page";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div id="main-content">
        <main>
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/portfolio" element={<PagePortfolio />} />
            <Route path="/resume" element={<PageResume />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="*" element={<PageError />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
