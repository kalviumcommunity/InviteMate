import React from 'react'
import headingData from './CategoriesData'
import rightArrow from './Templates/arrow-right.svg'

function TemplateContainer() {
  return (
    <div className='templatesContainer'>
      <div>
          {headingData.map((data) => {
              <h1>{data.title}</h1>
          })}
          <div>
          <h4>Show more</h4>
          <img src={rightArrow} alt=''></img>
          </div>
      </div>
      <div className='onlyTemplateContainer'>
        <div></div>
      </div>     
    </div>
  )
}

export default TemplateContainer
