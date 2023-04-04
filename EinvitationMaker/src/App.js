// import { Component } from 'react';
import {Route, Routes} from 'react-router-dom'
import './App.css';
import Category from './components/CategoryPage/Category';
// import Greeting from './components/Greeting';
import Btemp1 from './components/categories/Btemp1/Btemp1';
import Wtemp1 from './components/categories/wedding/Wtemp1/Wtemp1';
// import WedAnniv1 from './components/categories/WedAnniv1/WedAnniv';
// import Navbar from './components/Navbar';
// import Greeting from './components/Greeting';
// import TemplateContainer from './components/TemplateContainer';
import EditingPage from './components/EditingPage/EditingPage'
import Home from './components/HomePage/Home';






function App() {
  return (
    <>
      <div className="App">
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path={`/:id`} element={<Category/>} />
          {/* <Route path={`/:id/:s`} element={<Category/>} /> */}

          <Route path={`/editing`} element={<EditingPage/>}/>
          <Route path={`/Wtemp1`} element={<Wtemp1/>}/>
          <Route path={`/Btemp1`} element={<Btemp1/>}/>


          {/* <Route path={`/Wtemp1`} element={<Wtemp1/>}/> */}
          {/* <Route path={`/WedAnniv1`} element={<WedAnniv1/>}/> */}

          {/* <Route path='/Editing/:Editing' element={<EditingPage/>}/> */}

          {/* <Route path='/Editing' element={<EditingPage/>}></Route> */}
          {/* <Route path='/Btemp1' element={<Btemp1/>}></Route>
          <Route path='/Wtemp1' element={<Wtemp1/>}></Route>
          <Route path='/WedAnniv' element={<WedAnniv/>}></Route> */}

        </Routes>
      </div>
    </>
  );
}

export default App;
