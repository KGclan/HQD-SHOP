import React from "react"
import { Link } from "react-router-dom"
import Nav from "./Nav"

function Header() {
  return(
    <header className="header">
      <Link className="header__logo" to="main">
        HQD
      </Link>
      <Nav />
    </header>
  )
}

export default Header