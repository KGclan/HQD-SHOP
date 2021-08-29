import React from "react"
import { Dropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

function Nav() {
  return(
    <nav className="nav">
      <Link className="header__logo" to="main">
        HQD
      </Link>
      <div className="nav__link">
        <Link className="link__item" to="/product_line">Линейка</Link>
        <Link className="link__item" to="/overview">Обзоры</Link>
        <Link className="link__item" to="/signup">Регистрация</Link>
        <Link className="link__item" to="/login">Войти</Link>
      </div>
    </nav>
  )
}

export default Nav