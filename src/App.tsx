import React from "react"
import { Routes, Route } from "react-router-dom"

import MainLayout from "./layouts/MainLayout"

import Main from "./pages/Main"
import Contacts from './pages/Contacts'
import About from "./pages/About"
import PageNotFound from "./pages/PageNotFound/PageNotFound"
import Projects from "./pages/Projects/Projects"
import Event from "./pages/Event"

import "./scss/global.scss"

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Main />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="Event/:id" element={<Event />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
