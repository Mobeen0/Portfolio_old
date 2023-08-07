import './App.css';
import { Routes, Route } from "react-router-dom";
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

  const scrollbarStyle ={width:'100vw'
                        ,height:'100vh'};


  return (
    <div>
      <Scrollbars style={scrollbarStyle}>
      <div className = "Main">
        <Navbar /> {/* This is the header Navbar*/}
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
              <Project />
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
