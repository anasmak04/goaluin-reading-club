import React from "react";
import { BrowserRouter as Router, Route, Link , Routes} from 'react-router-dom';
import Register from "./components/register/Register";
import Login from "./components/login/Login";

function App() {
  return (
   <>

<Router>

<nav>
        <ul>
          <li>
          </li>
          <li>
            <Link to="/Register">register</Link>
          </li>
          <li>
            <Link to="/Login">login</Link>
          </li>
        </ul>
      </nav>
 
    <Routes>
    <Route path="/Register" element={<Register />} />
    <Route path="/Login" element={<Login />} />
    </Routes>
 
</Router>
   </>

     
    
  );
}

export default App;
