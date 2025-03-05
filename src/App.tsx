import { createBrowserRouter, Routes, Route, RouterProvider, useLocation} from "react-router-dom";
import {useEffect} from "react";
import Home from "./components/Home";
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
function Root(){
  //piazzza
  const location = useLocation();
  const editedpath = location.pathname.slice(1); //remove / 
  useEffect(()=>{
    if (editedpath ===""){
      document.title="Home | Resume";
    }else{
      document.title=editedpath.charAt(0).toUpperCase() + editedpath.slice(1) +" | Resume"; //charat up char 0 and concat the rest
    }
  },[editedpath])
  return(
    <>
      <Routes>
          <Route path = {'/*'} element = {<Home/>}/>
          <Route path = {'/education'} element = {<Education/>}/>
          <Route path= {'/experiences'} element = {<Experiences/>}/>
          <Route path = {'/certifications'} element={<Certifications/>}/>
          <Route path = {'/achievements'} element={<Achievements/>}/>
          <Route path = {'/projects'} element={<Projects/>}/>
      </Routes>
    </>
  );
}

const router = createBrowserRouter([
    {path: "*", element: <Root/>}
]);

export default function App() {
  return <RouterProvider router = {router}/>
}
