import Particles from 'react-tsparticles';
import particlesConfig from './config/particlesConfig';
import './styleSheet/Background.css';

function Background(props) {
  if(props.type===true){
    return(
      <div className = "mobileBackground">

      </div>
    );
  }
  else{
    return (
      <Particles params = {particlesConfig} />
    )
  }

}

export default Background;