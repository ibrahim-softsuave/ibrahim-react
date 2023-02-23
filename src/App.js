import './App.css';
import { BrowserRouter,Routes, Route,} from "react-router-dom";
import Login from './components/login/login';
import Home from './pages/home';
import PaymentForm from './pages/payemt_form';
function App() {
  return (
    <div>
  <BrowserRouter>
  <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/payment-form' element={<PaymentForm/>}></Route>
   </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
