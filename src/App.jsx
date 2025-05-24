import React from "react"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"

import { Outlet } from "react-router-dom"


function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>

  )
}




export default App
