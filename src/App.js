import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import Doc from './pages/Document/Doc'
import Notfound from './pages/Shared/Notfound/Notfound'
import Login from './pages/Login/login'


function App() {
  return (
    <div className='App' >

      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/document' element={<Doc></Doc>}></Route>
        <Route path='/service/:checkout' element={<Checkout></Checkout>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
