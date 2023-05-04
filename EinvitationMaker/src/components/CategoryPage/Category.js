import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar';
import CategoryHeading from './CategoryHeading';
import CategoryTemplateContainer from './CategoryTemplateContainer';
import { useLocation, useNavigate} from 'react-router-dom'
import headingData from '../CategoriesData';
// import { appContext } from '../AppContext';
// import Greeting from '../HomePage/Greeting';

function Category() {
  const navigate = useNavigate()
  const [single, setSingle] = useState([])
  const [selectedButton, setSelectedButton] = useState(null)
  const [loader, setLoader] = useState(false)

  // const [headingData, setHeadingData] = useState()


  const {state} = useLocation()
  // const { category } = useParams();
  // console.log(category)

  useEffect(()=>{
    // function fetchData(){
    // fetch( process.env.REACT_APP_POST_TO_BACKEND_SERVER+"/editing/all")
    // .then((res) => res.json())
    // .then((res) => {setHeadingData(res)})
    // .catch((err)=> console.log(err))
    // }

    // fetchData()
    // console.log(headingData)
    if(state === null) {
      navigate('/')
    } else {
      setSingle(headingData?.filter((singleData) => singleData.title === state.title)[0] )
    }
  },[])

  // useEffect(()=> {
  //   navigate(`/${category}`)
  // },[selectedButton])

  setTimeout(() => {
    setLoader(false);
  }, 1200);

  return (
    <>
    {console.log(single)}
    {/* <appContext.Provider value={{setSelectedButton, selectedButton, single, setLoader}}> */}
     {/* <Link to={`${selectedButton}`}>{console.log(single)} */}
     {/* {console.log(single, setLoader)} */}
      <div className='CategoryContainer'>
          <div className='nav'>
            <Navbar/>
          </div>
            <CategoryHeading setSelectedButton={setSelectedButton} selectedButton={selectedButton} single={single} setLoader={setLoader} />
          {/* </div> */}
          <CategoryTemplateContainer selectedButton={selectedButton} single={single} loader={loader} />
      </div>
     {/* </Link> */}
     {/* <div style={{display: 'none'}}><Greeting/></div> */}
    {/* </appContext.Provider> */}
    </>
  )
}

export default Category
