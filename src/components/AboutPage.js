import aboutInfo from './config/aboutInfo';
import skillInfo from './config/skillInfo';
import About from './About';
import './styleSheet/AboutPage.css';

function AboutPage(props) {
    let copySkill = skillInfo;
  return (
    <>
        <div>
            {aboutInfo.map((item,index)=>(
                    <About toAdd = {item} mobileOrientation = {props.mobileOrientation} />
            ))}
        </div>
        <div className ="traintrack">
            <ul>
            {

                skillInfo.map((item,index)=>(
                    <li  className = "skillItem">
                        {item.skillname}
                    </li>
                ))
            }
            {
                copySkill.map((item,index)=>(
                    <li  className = "skillItem">
                        {item.skillname}
                    </li>
                ))
            }
            </ul>
        </div>
        
    </>
  )
}

export default AboutPage;