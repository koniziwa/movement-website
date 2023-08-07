import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main";
import Contacts from './pages/Contacts';
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Projects from "./pages/Projects/Projects";
import Mero from "./pages/Mero";

import "./scss/global.scss";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="mero" element={<Mero />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
