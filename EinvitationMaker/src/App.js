import { Route, Routes } from "react-router-dom";
import "./App.css";
import EditingPage from "./components/EditingPage/EditingPage";
import Home from "./components/HomePage/Home";
import Category from "./components/CategoryPage/Category";
import Btemp1 from "./components/categories/Btemp1/Btemp1";
import Wtemp1 from "./components/categories/wedding/Wtemp1/Wtemp1";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/:id`} element={<Category />} />

          <Route path={`/editing`} element={<EditingPage />} />
          <Route path={`/Wtemp1`} element={<Wtemp1 />} />
          <Route path={`/Btemp1`} element={<Btemp1 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
