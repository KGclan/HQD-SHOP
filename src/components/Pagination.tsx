import React, { FC } from "react"
import PaginationButton from "../UI/button/PaginationButton"

const Pagination: FC = () => {
  return(
    <div className="pagination col-12">
      <PaginationButton title="1"/>
      <PaginationButton title="2"/>
      <PaginationButton title="3"/>
    </div>
  )
}

export default Pagination