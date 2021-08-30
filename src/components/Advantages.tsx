import React, { FC } from "react"
import AdvantegesCard from "../UI/card/AdvantagesCard"

const Advanteges: FC = () => {
  return(
    <div className="advanteges">
      <h1 className="advanteges__title">Преимущества</h1>
      <div className="advanteges__container container">
        <div className="advanteges__row row">
          <AdvantegesCard 
            width="295px" 
            height="299px" 
            title="Меньше вреда" 
            body="Из-за отсутствия побочных продуктов горения,
             наша продукция наносит гораздо меньший
              вред вашему здоровью!" 
          />
          <AdvantegesCard 
            width="295px" 
            height="299px" 
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
    </div>
  )
}

export default Advanteges