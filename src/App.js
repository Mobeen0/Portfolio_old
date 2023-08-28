import './App.css';
import { Routes, Route } from "react-router-dom";
import {useState,useRef,useEffect} from 'react';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import FirstLoad from './components/FirstLoad';
import aboutInfo from './components/config/aboutInfo';
import contactInfo from './components/config/contactInfo';
import Scrollbars from 'react-custom-scrollbars';

function App() {
  let scrollRef  = useRef();
  let [shad,setShad] = useState(false); 
  let [mobileOr,setMobileOr] = useState(false);
  const scrollbarStyle ={width:'100vw'
                        ,height:'100vh'};

  let [firstLoad, setFirstLoad] = useState(false);

 let myFunc = ()=>{
    if(scrollRef.current.getScrollTop() > 20.0){
      setShad(true);
    }
    else{
      setShad(false);
    }
 }
  useEffect(()=>{
    const mediaQuery = window.matchMedia(`(orientation:portrait)`);
    const handleChange = (event)=>{
      setMobileOr(event);
    };
    mediaQuery.addEventListener('change',handleChange);

    setMobileOr(mediaQuery.matches);

    return()=>{
      mediaQuery.removeEventListener('change',handleChange);
    }
    // eslint-disable-next-line
  },[window.innerWidth]);

  useEffect(()=>{
    setTimeout(()=>{setFirstLoad(true)},2000);// for 2 seconds
  },[]);

  if(!firstLoad){
    return (
      <FirstLoad />
    );
  }
  else{
    return(
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
}

export default App;
