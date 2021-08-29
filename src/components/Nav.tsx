import React from "react"
import { Dropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

function Nav() {
  return(
    <nav className="nav">
      <Link className="nav__item" to="/product_line">Линейка</Link>
      <Link className="nav__item" to="/overview">Обзоры</Link>
      <Link className="nav__item" to="/signup">Регистрация</Link>
      <Link className="nav__item" to="/login">Войти</Link>
    </nav>
  )
}

export default Nav