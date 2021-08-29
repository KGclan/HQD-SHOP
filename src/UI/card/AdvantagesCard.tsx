import React from "react"

interface AdvantegesCardProps {
  height: string
  width: string
  title: string
  body: string
}

function AdvantegesCard({ height, width, title, body }:AdvantegesCardProps ) {
  return(
    <div className="advanteges-card" style={{width, height}}>
      <h1 className="advanteges-card__title">{title}</h1>
      <p className="advanteges-card__body">{body}</p>
    </div>
  )
}

export default AdvantegesCard