import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import Doc from './pages/Document/Doc'
import Notfound from './pages/Shared/Notfound/Notfound'
import Login from './pages/Login/Login'
import Register from './pages/Login/Register'
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import Reasons from './pages/Home/Reasons/Reasons';


function App() {
  return (
    <div className='App' >

      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/document' element={<Doc></Doc>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/reasons' element={<Reasons></Reasons>}></Route>

        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/*' element={<Notfound></Notfound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
