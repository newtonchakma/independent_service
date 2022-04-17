
import './App.css';
import Header from './sharePages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Service from './Pages/Home/Service/Service';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/service" element={<Service></Service>}></Route>
     </Routes>
    </div>
  );
}

export default App;
