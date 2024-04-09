import Homepage from "./pages/Homepage/Homepage";
import { Routes,Route } from "react-router-dom";
import './App.css'
import Signuppage from "./pages/signuppage/Signuppage.jsx";
import Loginpage from "./pages/Loginpage/Loginpage.jsx";
import { useEffect,useContext } from "react";
import { AuthContext } from "./store/context.js";
import { getAuth } from 'firebase/auth'
import Create from "./components/create/Create.jsx";
import Viewpage from "./pages/viewpage/Viewpage.jsx";
import Post from "./store/PostContext.js";



function App() {
  const auth = getAuth(); 
  const {user,setUser} = useContext(AuthContext)
  useEffect(()=>{
   auth.onAuthStateChanged((user)=>{
    setUser(user)
   })
})
  return (
    <div className="App">
      <Post>
        <Routes>
          <Route exact path="/" element={<Homepage/>}>  </Route>
          <Route path="/signup" element={<Signuppage/>}>  </Route>
          <Route path="/login" element={<Loginpage/>}></Route>
          <Route path="/create" element={<Create/>}></Route>
          <Route path="/view" element={<Viewpage/>}></Route>

        </Routes>
      </Post>

    </div>
  );
}

export default App;
