import './styleSheet/About.css';
import {useEffect,useState} from 'react';

function About(props) {

  const [load,setLoad] = useState(false);
  useEffect(()=>{
    setLoad(true);
  },[]);

  return (
    <div className = {`about ${load?`firstTime`:``}`}>
        <img src={props.toAdd.image} alt = 'fast University Logo ' className ='uniLogo' ></img>
        <div className = "myText">
          <p className="aboutDesc">{props.toAdd.info}</p>
        </div> 
    </div>
  )
}

export default About