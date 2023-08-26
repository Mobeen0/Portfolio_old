import ProjectsContent from './ProjectsContent';
import projectsInfo from './config/projectsInfo';
import ProjectsContentMob from './ProjectsContentMob';
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import './styleSheet/SearchBox.css';
import './styleSheet/Project.css';

function Project(props) {
    let [searchContent, setSearchContent] = useState('');


    const handleChange = (searchBar)=>{
        setSearchContent(searchBar.target.value);
    }
    
    let sepWords = searchContent.split(' ');

    let filterFunc = (item)=>{
        if(sepWords.length === 1 && sepWords[0] === '')
            return true;
        for(let i =0;i<sepWords.length;i++){
            for(let c =0;c<item.tags.length;c++){
                if(sepWords[i] ===''){
                    // do nothing
                }
                else{
                    if(item.tags[c].toUpperCase().includes(sepWords[i].toUpperCase())){
                        return true;
                    }
                }
            }
            if(item.name.toUpperCase().includes(sepWords[i].toUpperCase()) && sepWords[i]!== ''){
                return true;
            }
        }
        return false;
    }

    return (
    <>
        <div className="searchBoxCont">
            <input className = "searchBox" type="text" placeholder="Search any Project" onChange = {handleChange} ></input>
            <div className="searchIcon">
                <FaSearch className="faSearch" />
            </div>
        </ div>

        <div className = "projGrid">
            {props.mobileOrientation?
                projectsInfo.filter(filterFunc).map((item,index)=>(
                    < ProjectsContentMob toAdd = {item}/>
                ))
                :
                projectsInfo.filter(filterFunc).map((item,index)=>(
                    <ProjectsContent toAdd={item} />
                ))
            }
        </div>
    </>        
    );

}

export default Project;