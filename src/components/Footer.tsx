import React, { FC } from "react"
import { Link } from "react-router-dom"

const Footer: FC = () => {
  return(
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__row row">
          <div className="footer__logo col-3">
            <h1 className="logo">HQD</h1>
            <div className="social">
              <Link className="social__items" to="#">
                <img src="/img/icons/youtube.png" alt="" />
              </Link>
              <Link className="social__items" to="#">
                <img src="/img/icons/youtube.png" alt="" />
              </Link>
              <Link className="social__items" to="#">
                <img src="/img/icons/youtube.png" alt="" />
              </Link>
            </div>
          </div>
          <div className="footer__text col-6">
            <h3 className="text__title">
              Идеальное решение для потребителей 
              никотина, реальная альтернатива обычным сигаретам.
            </h3>
            <p className="text__body">
              Этот сайт служит для предоставления общей информации о компании HQD. 
              Сайт не используется в рекламных или маркетинговых целях. 
              Материалы на сайте не являются предложениями о 
              продаже или покупке какого-либо продукта компании HQD!
            </p>
          </div>
          <div className="footer__contacts col-3">
            <h3 className="contacts__title">Контакты</h3>
            <p className="contacts__phone">8 (495) 846-66-70 оптовый отдел</p>
            <p className="contacts__email">info@hqdpods.ru</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer