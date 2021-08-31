import React, { FC, useEffect, useState } from "react"
import ApiServise from "../API/ApiServise"
import ProductCard from "../UI/card/ProductCard"
import Pagination from "./Pagination"

const ProductLines: FC = () => {

  const [hqds, setHqds] = useState([])
  
  async function allHqd() {
    const response = await ApiServise.getAll()
    setHqds(response.data)
  }

  useEffect(() => {
    allHqd()
  }, [])

  return(
    <div className="product-lines">
      <div className="product-lines__container container">
        <div className="product-lines__row row">
          <h1 className="product-lines__title col-12">Линейки товаров</h1>
          {
            hqds.map( hqd =>
              <ProductCard
                title={hqd["name"]}
                url={hqd["img"]}
              />
              )
          }
            <Pagination />
        </div>
      </div>
    </div>
  )
}

export default ProductLines