import React from "react";
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Register from "./components/register/Register";
import Post from "./components/post/Post";
import Login from "./components/login/Login";



function App() {
  return (
   <>
  yoo
<Router>
    <Routes>
    <Route path="/Register" element={<Register />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Post" element={<Post />} />
    </Routes>
</Router>
   </>

     
    
  );
}

export default App;
