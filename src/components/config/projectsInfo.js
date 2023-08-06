import rushHour from '../../assets/rushHour.png';
import olaDoc from '../../assets/olaDoc.jpg';
import resturant from '../../assets/resturant.png';
import clustering from '../../assets/clustering.png';
import multiThread from '../../assets/treasureHunter.png';
import brickBreaker from '../../assets/brickBreaker.png';
import bTree from '../../assets/bTree.png';
import uefaLeague from '../../assets/uefaLeague.png';

let projectsInfo = [
{
    "name": 'Image Clustering Algorithms',
    "description": 'Using OpenCV library in C++ to detect lesion areas in medical images. I used K-mean (unsupervised learning) algorithm and Connected Component Clustering to seperate lesion areas from the non lesion areas in the Image and then compare both approaches side by side.',
    "repoLink": 'https://github.com/Mobeen0/Clustering-Algorithms',
    "tags":['C++','Data-Structures','Terminal-based','OpenCV','Images','machine-learning','Algorithms'],
    "image": clustering
},
{
    "name":'DataBase Management System',
    "description":'Indexing large amount of csv data in a B Tree data structure and then calling CRUD operations on the data. The indexing also can be done on any field of the dataset (not only primary field) and duplicate cases are handled by creating a linked list inside the B Tree array.',
    "repoLink":'https://github.com/Mobeen0/BTree_Txt_Based_Notes',
    "tags":['C++','Data-Structures','Terminal-Based','Data-Indexing','Database','Algorithms'],
    "image":bTree
},
{
    "name":'Rush Hour Game',
    "description":'Rush Hour is a game where the player is tasked to pick passengers and drop them off to their requested destinations. The game calculates score based on the amount of passengers dropped and a time limit is determines when the game should end.',
    "repoLink":'https://github.com/Mobeen0/Rush_Hour_Game', // remember to change this to the correct link
    "tags":['C++','Glut','Terminal-Based','Programming Fundamentals','Game','2D','File-Handling'],
    "image":rushHour
},
{
    "name":'Restaurant Website',
    "description":'A sample website made with only HTML and CSS. The website had an interactive menu for the user to order from and then proceed to the checkout page. Attention was given to key details and the end goal was to achieve a very user friendly experience.',
    "repoLink":'https://github.com/Mobeen0/Simple_Restaurant_Website',
    "tags":['HTML','CSS','Bootstrap','Website','UI/UX'],
    "image":resturant
},
{
    "name":'Hospital Management System',
    "description":'A console based management system for oladoc Hospital. The system allows login and sign up for doctors and patients. Patients can check the availability of doctors and book their appointments, likewise doctors can accept or decline appointments and set their availability.',
    "repoLink":'https://github.com/Mobeen0/Hospital_Management_System',
    "tags":['C++','OOP','Terminal-Based','File-Handling','Object-Files','Management-System'],
    "image":olaDoc
},
{
    "name":"Treasure Hunters",
    "description": 'A multiplayer console based game built using SFML (for graphics) and POSIX (for threads) libraries. Each player is a separate thread and is controlled independent of other players. The game is time limited and player with the highest score at the end is the winner.',
    "repoLink": 'https://github.com/Mobeen0/Multiplayer_ThreadBased_Game',
    "tags":['C++','SFML','Operating Systems','Threads','Processes','POSIX','Game','2D'],
    "image":multiThread
},
{
    "name":'Brick Breaker',
    "description":'A legacy 2d game remade in assembly language. The purpose of the game is to control the trajectory of the ball to break finite bricks in each level. The brick healths also change as the player progresses up each level after breaking all the bricks in the previous levels.',
    "repoLink":'https://github.com/Mobeen0/BrickBreaker-MASM-',
    "tags":['Assembly','MASM','x86','asm','low-level-language','Game','2D','Terminal-based'],
    "image":brickBreaker
},
{
    "name":'UEFA Database Insights',
    "description":'Generating useful insights from UEFA Champions League data of 10+ years. Using SQL queries we were able to find important information such as greatest goal scoring duo and win percentage of teams in their home grounds.',
    "repoLink":'https://github.com/Mobeen0/UEFA_DataBase_Queries',
    "tags":['SQL','MicroSoft-SQL-Server','Database','Queries','CRUD','Data-Handling'],
    "image":uefaLeague
}

]

export default projectsInfo;