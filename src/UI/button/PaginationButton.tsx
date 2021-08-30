import React, { FC } from "react"

interface PaginationButtonProps {
  title: string
}

const PaginationButton: FC<PaginationButtonProps> = ({ title }) => {
  return(
    <button className="pagination-btn">{title}</button>
  )
}

export default PaginationButton