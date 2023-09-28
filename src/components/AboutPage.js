import aboutInfo from './config/aboutInfo';
import skillInfo from './config/skillInfo';
import About from './About';
import './styleSheet/AboutPage.css';
import { Graph } from 'react-github-activity-calendar';

function AboutPage(props) {
    let copySkill = skillInfo;
    const gitAPIkey = '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';
    const githubUser = 'Mobeen0';
    const bgColor = '#008080';
    const txtColor = '#000000';

  return (
    <>
        <div>
            {aboutInfo.map((item,index)=>(
                    <About toAdd = {item} mobileOrientation = {props.mobileOrientation} />
            ))}
        </div>
        
        <div className = "gitCalendar">
        <Graph
            userName = {githubUser}
            backgroundColor = {bgColor}
            githubApiKey = {gitAPIkey}
            color = {txtColor}
        />
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