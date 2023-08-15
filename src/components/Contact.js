import './styleSheet/Contact.css';
import {AiOutlineArrowRight} from 'react-icons/ai'
import {useState,useEffect} from 'react';

function Contact(props) {
  let [load,setLoad] = useState(false);
  useEffect(()=>{
    setLoad(true)
  },[]);

  return (
    <div className = {`contactDiv ${load? `firstTime`:``}`}>
        <div className ="platHeading">{props.toAdd.platform}</div>
        <div className = "innerContact">
          <span className ="platLogo">
            {props.toAdd.image}
          </span>
            <p className ={'contactText'}>{props.toAdd.text}</p>
        </div>
        <a href = {props.toAdd.link} target="_blank" rel = "noreferrer">
          <div className = "platLink">
              <span className = "linkPlatform">{props.toAdd.platform} </span>
              <span className ="linkArrow">
                <AiOutlineArrowRight />
              </span>
          </div>
        </a>
    </div>
  );
}

export default Contact
