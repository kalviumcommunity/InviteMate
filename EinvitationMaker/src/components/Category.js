import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import CategoryHeading from './CategoryHeading';
import CategoryTemplateContainer from './CategoryTemplateContainer';
import {Link, useLocation, useNavigate, useParams} from 'react-router-dom'
import headingData from './CategoriesData';

function Category() {
  const navigate = useNavigate()
  const [single, setSingle] = useState([])
  const [selectedButton, setSelectedButton] = useState(null)
  const {state} = useLocation()
  const { category } = useParams();
  // console.log(category)

  useEffect(()=>{
    if(state === null) {
      navigate('/')
    } else {
      setSingle(headingData.filter((singleData) => singleData.title === state.title)[0] )
    }
  },[])

  // useEffect(()=> {
  //   navigate(`/${category}`)
  // },[selectedButton])

  return (
    // <Link to={`${selectedButton}`}>
      <div className='CategoryContainer'>
          <div className='nav'>
            <Navbar/>
          </div>
            <CategoryHeading setSelectedButton={setSelectedButton} single={single} />
          {/* </div> */}
          <CategoryTemplateContainer selectedButton={selectedButton} single={single} />
      </div>
    // </Link>
  )
}

export default Category
