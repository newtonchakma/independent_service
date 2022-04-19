
import './App.css';
import Header from './sharePages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
/* import Services from './Pages/Home/Services/Services'; */
import Register from './Pages/Login/Register/Register';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './sharePages/NotFound/NotFound';
import Checkout from './Pages/Checkout/Checkout';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';


function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/home" element={<Home></Home>}></Route>
      <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
      <Route path='/checkout' element={
        <RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>
      }></Route>
     <Route path='/blogs' element={<Blogs></Blogs>}></Route>
     <Route path='/about' element={<About></About>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
     </Routes>
    </div>
  );
}

export default App;
