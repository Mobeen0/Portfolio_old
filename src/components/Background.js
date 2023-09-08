import Particles from 'react-tsparticles';
import particlesConfig from './config/particlesConfig';
import './styleSheet/Background.css';

function Background(props) {

    return (
      <Particles params = {particlesConfig} />
    )

}

export default Background;