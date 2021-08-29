import React from "react"
import AdvantegesCard from "../UI/card/AdvantagesCard"

function Home() {
  return(
    <div className="home">
      <h1 className="home__title">Преимущества</h1>
      <div className="home__container container">
        <AdvantegesCard 
            width="295px" 
            height="299px" 
            title="Меньше вреда" 
            body="Из-за отсутствия побочных продуктов горения,
             наша продукция наносит гораздо меньший
              вред вашему здоровью!" 
          />
          <AdvantegesCard 
            width="322px" 
            height="324px" 
            title="Продуманно" 
            body="Идеально подобранная крепость жидкости
            на правильном солевом никотине вкупе
            с правильной мощностью дает лучший потребительский опыт." 
          />
          <AdvantegesCard 
            width="295px" 
            height="299px" 
            title="Удобно" 
            body="Забудьте о зарядных устройствах, флаконе
            с жидкостью, сгоревшей
            вате, испарителях
            и кнопках." 
          />
      </div>
    </div>
  )
}

export default Home