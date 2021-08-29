import React from "react"
import { Link } from "react-router-dom"
import HeaderInner from "./HeaderInner"
import Nav from "./Nav"

function Header() {
  return(
    <header className="header">
      <Nav />
      <HeaderInner/>
    </header>
  )
}

export default Header