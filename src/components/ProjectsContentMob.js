import {useState,useEffect,useRef} from 'react';
import {FaFolder,FaQuoteLeft} from 'react-icons/fa';
import './styleSheet/ProjectsContentMob.css';

function ProjectsContentMob(props){
    let [first,setFirst] = useState(false);
    let [showInfo,setShowInfo] = useState(false);
    let [clicked, setClicked] = useState(0);
    let contents = useRef();
    let mainCont = useRef();
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
            mainCont.current.style.transform = 'scale(1.1)';
            mainCont.current.style.boxShadow = '0 0 0.7rem 1.2rem Turquoise';
            mainCont.current.style.borderColor= 'cyan';
        }
        else{
            contents.current.style.transform = 'translateX(200%)';
            mainCont.current.style.transform = 'scale(1)';
            mainCont.current.style.boxShadow = '';
            mainCont.current.style.borderColor= '';
        }
        // eslint-disable-next-line 
    },[clicked])
    
    return(
        <div className = {`Container ${first?`first`:``} ${showInfo?`blurr`:``}`} onClick={clickFunc} ref ={mainCont}>
            <div className ="imageContainer">
                <img src = {props.toAdd.image} alt = "project" className = "mobProjImage" />
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
                <div>
                    <FaQuoteLeft/>
                </div>
                <p>"<i>{props.toAdd.description}</i>"</p>
            </div>
        </div>
    );
}

export default ProjectsContentMob;