import React, { FC } from "react"
import Button from "../button/Button"

interface ProductCardProps {
  title: string
  url: string
}

const ProductCard: FC<ProductCardProps> = ({ title, url }) => {
  return(
    <div className="product-card col-4">
      <h1 className="product-card__title">{ title }</h1>
      <img className="product-card__img" src={ url } alt="Товар" />
      <Button
        url="#"
        name="Подробнее"
      />
    </div>
  )
}

export default ProductCard
