import './styleSheet/Home.css';
import {Link} from 'react-router-dom';
import {useState,useEffect,useRef} from 'react';
import {AiFillGithub} from 'react-icons/ai';

function Home(props) {
  let [load,setLoad] = useState(false);
  let [hoverState,setHoverState] = useState(false);
  let listRef = useRef();
  useEffect(()=>{
    setLoad(true)
  },[])

  return (
    <div className = {`container ${load?`homeLoad`:``}`} onMouseOver = {()=>{setHoverState(true)}} onMouseLeave = {()=>{setHoverState(false)}}>
      <Link className = 'link' to ='/'>
        <span className = "welcome">Welcome To My Website</span> <br/>
          <AiFillGithub style ={{transform:'scale(2)',marginRight:'5%'}} />
          Hi I'm <br /> <span className = {`MainItem ${props.mobileOrientation?`homeChange`:``}`}> Muhammad Mobeen </span> <br />
          <div className = "wrapper">
          <div className= "static-Text">
            a&nbsp;
          </div>
            <ul className = "dynamic-Text" useRef ={listRef}>
              <li><span className = {`${hoverState?`spanHover`:``} `}>Student</span></li>
              <li><span className = {`${hoverState?`spanHover`:``} `}>Developer</span></li>
              <li><span className = {`${hoverState?`spanHover`:``} `}>Data Scientist</span></li>
            </ul>
          </div>
      </Link>
    </div>
  )
}

export default Home;