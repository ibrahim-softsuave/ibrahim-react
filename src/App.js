import './App.css';
import { BrowserRouter,Routes, Route,} from "react-router-dom";
import Header from './components/header';
import Home from './pages/home';
import PaymentForm from './pages/payemt_form';
function App() {
  return (
    <div>
  <BrowserRouter>
  <Header/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/payment-form' element={<PaymentForm/>}></Route>
   </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
