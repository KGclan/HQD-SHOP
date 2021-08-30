import React, { FC } from "react"
import ProductCard from "../UI/card/ProductCard"
import Pagination from "./Pagination"

const ProductLines: FC = () => {
  return(
    <div className="product-lines">
      <div className="product-lines__container container">
        <div className="product-lines__row row">
          <h1 className="product-lines__title col-12">Линейки товаров</h1>
          <ProductCard
            title="Cuvie"
            url="/img/products/cuvie.png"
          />
          <ProductCard
            title="Cuvie"
            url="/img/products/cuvie.png"
          />
          <ProductCard
            title="Cuvie"
            url="/img/products/cuvie.png"
          />
          <ProductCard
            title="Cuvie"
            url="/img/products/cuvie.png"
          />
          <ProductCard
            title="Cuvie"
            url="/img/products/cuvie.png"
          />
          <ProductCard
            title="Cuvie"
            url="/img/products/cuvie.png"
          />
          <ProductCard
            title="Cuvie"
            url="/img/products/cuvie.png"
          />
          <ProductCard
            title="Cuvie"
            url="/img/products/cuvie.png"
          />
          <ProductCard
            title="Cuvie"
            url="/img/products/cuvie.png"
          />
          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default ProductLines