import {useState,useEffect,useRef} from 'react';
import {FaGithub} from 'react-icons/fa';
import './styleSheet/ProjectsContent.css';

function ProjectsContent(props) {
    let myImage = useRef(null);
    let header1 = useRef(null);

    let [load,setLoad] = useState(false);
    useEffect(()=>{
        setLoad(true);
    },[])

    function getAllTags(){
        let retArray = [];
        for(let i =0;i<props.toAdd.tags.length;i++){
            retArray.push(props.toAdd.tags[i]);
            retArray.push(', ');
        }
        retArray.pop();
        return retArray;
    }

    let handleHoverOn = ()=>{
        myImage.current.style.transition = '0.3s ease-in';
        myImage.current.style.transform = 'scale(1.1)';
        myImage.current.style.filter = 'grayscale(0%)';
        header1.current.style.color = 'DarkBlue';
    }

    let handleHoverOff = ()=>{
        myImage.current.style.transform = '';
        myImage.current.style.filter = '';
        header1.current.style.color = '';
    }
    return (
        <div className ={`projectContainer ${load? `projFirst`:``}`} onMouseOver={handleHoverOn} onMouseLeave={handleHoverOff}>
            <div className="imageCont">
                <img src ={props.toAdd.image} alt ="project logo" className ="proj-Image" ref ={myImage}></img>
                <div className = "lightEffect">
                </div>
            </div>
            <div className="infoCont">
                <h1 ref = {header1}>{props.toAdd.name}</h1>
                <p className ="proj-info-text">{props.toAdd.description}</p>
            </div>
            <div className= "tagsCont">
                <p>Tags: <u>{getAllTags()}</u></p>
            </div>
            <a href={props.toAdd.repoLink} target="_blank" rel = "noreferrer">
                <div className = "repLink">
                    <span className= "proj-chain-image"><FaGithub /></span>
                    <span className = "proj-link-text">Link  </span>
                </div>
            </a>
        </div>
    );
}

export default ProjectsContent;