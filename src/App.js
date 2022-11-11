import React, { useContext } from "react";
import Register from '../src/pages/Register';
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import './style.scss';
import { Route, BrowserRouter,  Routes, Navigate,} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {

  const {currentUser}= useContext(AuthContext)
  console.log( currentUser)

  const ProtectedRoute = ({children})=>{
    if(! currentUser){
      return <Navigate to="/login"/>
    }
    return children
  };
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/">
      <Route index element={ <ProtectedRoute>
        <Home/>
        </ProtectedRoute>} />
      <Route path="login" element={<Login/>} />
      <Route path="register" element={<Register/>} />

    </Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
