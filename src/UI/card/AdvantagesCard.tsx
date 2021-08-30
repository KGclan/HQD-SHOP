import React from "react"

interface AdvantegesCardProps {
  height: string
  width: string
  title: string
  body: string
}

function AdvantegesCard({ height, width, title, body }:AdvantegesCardProps ) {
  return(
    <div className="card col-xl-4 col-12">
      <div className="advanteges-card" style={{width, height}}>
        <h1 className="advanteges-card__title">{title}</h1>
        <p className="advanteges-card__body">{body}</p>
      </div>
      <div className="advanteges-frame" style={{width, height}}></div>
    </div>
  )
}

export default AdvantegesCard