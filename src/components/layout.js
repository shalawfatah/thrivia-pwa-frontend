import * as React from "react"
import Footer from "./footer"
import Header from "./header"

const Layout = ({ children }) => {

  return (
    <section className="bg-color relative min-h-screen">
    <Header />
    {children}
    <Footer />
    </section>
  )
}

export default Layout
