import React, { FC } from "react"
import { Link } from "react-router-dom"
import Button from "../UI/button/Button"

const HeaderInner: FC = () => {
  return(
    <div className="header-inner">
      <div className="container">
        <div className="row">
          <div className="header-inner__text col-sm-7 col-12">
            <h1 className="text__title">
              <span className="title__span">HQD</span> — измените ваше представление
              об электронных сигаретах
            </h1>
            <p className="text__body">
              Создаем продукты высокого стандарта с 2015 года.
              Тут вы можете преобрести любой товар бренда <span className="body__span">HQD</span>.
            </p>
            <Button name={"Товары"} url={"/main"}/>
          </div>
          <div className="header-inner__img col-sm-5 col-12">
            <img className="img__item" src="/img/header-background-img.png" alt="Cuvie" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderInner