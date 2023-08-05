import Particles from 'react-tsparticles';
import particlesConfig from './config/particlesConfig';

function Background() {
  return (
    <Particles params = {particlesConfig} />
  )
}

export default Background;