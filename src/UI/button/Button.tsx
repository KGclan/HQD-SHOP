import React from "react"
import { Link } from "react-router-dom"

interface ButtonProps {
  url: string
  name: string
}

function Button({ url, name }: ButtonProps) {
  return(
    <button className="default-btn">
      <Link className="default-btn__text" to={url}>
        {name}
      </Link>
    </button>
  )
}

export default Button