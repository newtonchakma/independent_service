
import './App.css';
import Header from './sharePages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Pages/ServiceDetail/NotFound/NotFound';


function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
       <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/service/:serviceId" element={<ServiceDetail></ServiceDetail>}></Route>
    {/*   <Route path="/*" element={<NotFound></NotFound>}></Route> */}
     </Routes>
    </div>
  );
}

export default App;
