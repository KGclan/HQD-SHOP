import React, { FC } from "react"
import { Link } from "react-router-dom"
import HeaderInner from "./HeaderInner"
import Nav from "./Nav"

const Header: FC = () => {
  return(
    <header className="header">
      <Nav />
      <HeaderInner/>
    </header>
  )
}

export default Header