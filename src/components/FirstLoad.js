import './styleSheet/FirstLoad.css';
import logoImage from '../assets/myNewLogo.png';
import Background from './Background';

function FirstLoad() {
  return (
    <div className = "firstLoadCont">
        <Background />
            <img src ={logoImage} className = "firstloadImage" alt ="logo" />
    </div>
  )
}

export default FirstLoad;