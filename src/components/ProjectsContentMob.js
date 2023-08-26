import {useState,useEffect,useRef} from 'react';
import {FaFolder} from 'react-icons/fa';
import './styleSheet/ProjectsContentMob.css';

function ProjectsContentMob(props){
    let [first,setFirst] = useState(false);
    let [showInfo,setShowInfo] = useState(false);
    let [clicked, setClicked] = useState(0);
    let contents = useRef();
    useEffect(()=>{
        setFirst(true)
    },[])


    let clickFunc = ()=>{
        setClicked(clicked+1);
        setShowInfo(!showInfo);
    }

    useEffect(()=>{
        if(showInfo === true){
            contents.current.style.transform = 'translateX(0%)';
        }
        else{
            contents.current.style.transform = 'translateX(200%)';
        }
        // eslint-disable-next-line 
    },[clicked])
    
    return(
        <div className = {`Container ${first?`first`:``} ${showInfo?`blurr`:``}`} onClick={clickFunc}>
            <div className ="imageContainer">
                <img src = {props.toAdd.image} className = "mobProjImage" />
            </div>
            <div className ="projName">
                <p>
                    {props.toAdd.name}
                </p>
                <span>
                    {props.toAdd.main}
                </span>
            </div>
            <a href={props.toAdd.repoLink} target="_blank" rel = "noreferrer">
                <div className = "githubLink">
                    <FaFolder />
                </div>
            </a>
            <div className = "hoverInfo" ref ={contents}>
                <p>{props.toAdd.description}</p>
            </div>
        </div>
    );
}

export default ProjectsContentMob;