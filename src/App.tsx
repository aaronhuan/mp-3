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
  const pathname = location.pathname.slice(1); //remove / 
  useEffect(()=>{
    if (pathname ===""){
      document.title="Home | Resume";
    }else{
      document.title=pathname.charAt(0).toUpperCase() + pathname.slice(1) +" | Resume"; //charat up char 0 and concat the rest
    }
  },[pathname])
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
  // //from piazza
  // const currentPath=useLocation();
  // let lastValue=Object.values(currentPath).pop() || "";
  // lastValue = lastValue.charAt(0).toUpperCase() + lastValue.slice(1);
  // useEffect(()=>{
  //     if(lastValue==="/"){
  //         document.title="Home | Resume";
  //     }else {
  //         document.title=lastValue+" | Resume";
  //     }
  // },[lastValue]);

  return <RouterProvider router = {router}/>
}
