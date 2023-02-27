// import {Route, Routes} from 'react-router-dom'
import './App.css';
// import Btemp1 from './components/birthday/Btemp1/Btemp1';
// import Wtemp1 from './components/categories/wedding/Wtemp1/Wtemp1';
// import WedAnniv1 from './components/categories/WedAnniv1/WedAnniv';
import Navbar from './components/Navbar';
import Greeting from './components/Greeting';
import TemplateContainer from './components/TemplateContainer';




function App() {
  return (
    <div className="App">
      {/* <Btemp1/> */}
      {/* <Wtemp1/> */}
      {/* <WedAnniv1/> */}

      <Navbar/>
      <Greeting/>
      <TemplateContainer/>
    </div>
  );
}

export default App;
