import ProjectsContent from './ProjectsContent';
import projectsInfo from './config/projectsInfo';
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import './styleSheet/SearchBox.css';

function Project() {
    let [searchContent, setSearchContent] = useState('');

    const gridStyleProject ={display:'grid',
    gridTemplateColumns:"repeat(3,1fr)"};

    const handleChange = (searchBar)=>{
        setSearchContent(searchBar.target.value);
    }
    
    let sepWords = searchContent.split(' ');

    return (
    <>
        <div className="searchBoxCont">
            <input className = "searchBox" type="text" placeholder="Search any Project" onChange = {handleChange} ></input>
            <div className="searchIcon">
                <FaSearch className="faSearch" />
            </div>
        </ div>

        <div style ={gridStyleProject}>
            {
                projectsInfo.filter((item)=>{
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
                }).map((item,index)=>(
                    <ProjectsContent toAdd={item} />
                ))
            }
        </div>
    </>        
    );

}

export default Project;