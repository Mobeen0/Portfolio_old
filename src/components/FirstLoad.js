import './styleSheet/FirstLoad.css';
import logoImage from '../assets/myNewLogo.png';
import Background from './Background';

function FirstLoad(props) {
  return (
    <div className = "firstLoadCont">
        <Background type = {props.type} />
            <img src ={logoImage} className = "firstloadImage" alt ="logo" />
    </div>
  )
}

export default FirstLoad;