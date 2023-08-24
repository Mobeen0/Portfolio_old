import './App.css';
import { Routes, Route } from "react-router-dom";
import {useState,useRef} from 'react';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import aboutInfo from './components/config/aboutInfo';
import contactInfo from './components/config/contactInfo';
import Scrollbars from 'react-custom-scrollbars';

function App() {
  let scrollRef  = useRef();
  let [shad,setShad] = useState(false); 
  let [mobileOr,setMobileOr] = useState(false);
  const scrollbarStyle ={width:'100vw'
                        ,height:'100vh'};

 let myFunc = ()=>{
    if(scrollRef.current.getScrollTop() > 20.0){
      setShad(true);
    }
    else{
      setShad(false);
    }
 }

window.addEventListener("orientationchange", function() {
  console.log(window.orientation);
  if(window.orientation === 0){
    setMobileOr(true);
  }
  else{
    setMobileOr(false);
  }
}, false);

  return (
    <div>
      <Scrollbars style={scrollbarStyle} onScroll = {myFunc} ref = {scrollRef}>
      <div className = "Main">
        <Navbar navBool = {shad} /> {/* This is the header Navbar*/}
        <Background />
          <Routes>
            <Route path = '/' element = 
            {
              <Home />
            }></Route>
            <Route path = '/Portfolio' element = 
            {
              <Home />
            }></Route>
            <Route path = '/Project' element = {
              <Project mobileOrientation = {mobileOr} />
             }></Route>
            <Route path = '/Contact' element = {
              <div className ="contactGrid">
                {contactInfo.map((item,index)=>(
                  <Contact toAdd = {item}/>
                ))}
              </div>
            }></Route>
            <Route path = '/About' element = 
            {<>
              {aboutInfo.map((item,index)=>(
                <About toAdd = {item} />
              ))}
            </>
            }></Route>
        </Routes>
      </div>
  </Scrollbars>
  </div>
  );
}

export default App;
