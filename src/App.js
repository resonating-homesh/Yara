import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Homepage from './Pages/Homepage';
import Signup from './Pages/Signup';

function App() {
  return (
    <div className="App">
     <Router>
    <Routes>
     <Route exact path='/' element={<Homepage />}></Route>
     <Route exact path='/login' element={<Login />}></Route>
     <Route exact path='/signup' element={<Signup />}></Route>
    </Routes>
     </Router>
    </div>
  );
}

export default App;
