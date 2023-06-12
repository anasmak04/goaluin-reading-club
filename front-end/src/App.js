import React from "react";
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Register from "./components/register/Register";
import Post from "./components/post/Post";
import Login from "./components/login/Login";
import Landing from "./components/landing/Landing"
import Home from "./components/Home/Home"


function App() {
  return (
   <>

<Router>
    <Routes>
    <Route path="/Register" element={<Register />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Home/Post" element={<Post />} />
    <Route path="/Landing" element={<Landing />} />
    <Route path="/Home" element={<Home />} />
    </Routes>
</Router>
   </>

     
    
  );
}

export default App;
