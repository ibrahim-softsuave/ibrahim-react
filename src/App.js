import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header';
function App() {
  return (
    <div>
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<Header/>}></Route>
   </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
