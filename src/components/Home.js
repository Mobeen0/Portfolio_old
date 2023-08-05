import './styleSheet/Home.css';
import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';

import {AiFillGithub} from 'react-icons/ai';

function Home(props) {
  let [load,setLoad] = useState(false);
  useEffect(()=>{
    setLoad(true)
  },[])
  return (
    <div className = {`container ${load?`homeLoad`:``}`}>
      <Link className = 'link' to ='/'>
        <span className = "welcome">Welcome To My Website</span> <br/>
          <AiFillGithub style ={{transform:'scale(2)',marginRight:'5%'}} />
          Hi I'm <br /> <span className = "MainItem"> Muhammad Mobeen </span> <br />
          a Developer.
      </Link>
    </div>
  )
}

export default Home;