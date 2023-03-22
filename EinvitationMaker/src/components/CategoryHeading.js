import './Combined.css'
import leftArrow from './Templates/arrow-left.svg'
import { Link, Navigate } from "react-router-dom";

function CategoryHeading({setSelectedButton, single}) {

  // const changeURL = () => {
  //   Navigate(`/:category/:${setSelectedButton}`)
    
  // }
  // console.log("setSelectedButton :", setSelectedButton);
  // console.log("single :", single);


  return (
    <div className='categoryBar'>
      <div className='topCategoryBar'>
        <Link to={'/'}>
        <img src={leftArrow} alt='backArrow' id='backImage'></img>
        </Link>
        <h1>{single.title}</h1>
      </div>
      <div className='bottomCategoryBar'>
        <div className='insideBottomCategoryBar'>
        {single?.subHeading?.map((data, index) => {
          return <h2 id='subTitles' key={index} onClick={() => {setSelectedButton(data.title)} }>
            {data.title}</h2>
          })}
        </div>
      </div>
    </div>
  )
}

export default CategoryHeading
