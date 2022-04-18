
import './App.css';
import Header from './sharePages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Login from './Pages/Login/Login';
import Services from './Pages/Home/Services/Services';
import Register from './Pages/Login/Register/Register';


function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
       <Route path="/home" element={<Home></Home>}></Route>
       <Route path="/services" element={<Services></Services>}></Route>
      <Route path="/services/:servicesId" element={<ServiceDetail></ServiceDetail>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
    {/*   <Route path="/*" element={<NotFound></NotFound>}></Route> */}
     </Routes>
    </div>
  );
}

export default App;
