import {FaDiscord,FaInstagram,FaLinkedin,FaFacebook,FaGithub} from 'react-icons/fa';
let contactInfo = [
    {
        "platform": 'Discord',
        "link": 'https://discordapp.com/users/332938184012988416',
        "image": <FaDiscord />,
        "text": 'This is the fastest way to contact me and I am readily available on discord.'
    },
    {
        "platform": 'Instagram',
        "link": 'https://www.instagram.com/m.mobeen0/',
        "image": <FaInstagram />,
        "text": 'I use instagram from time to time, however I am mostly just watching reels.'
    },
    {
        "platform": 'LinkedIn',
        "link": 'https://www.linkedin.com/in/muhammad-mobeen-061535247/',
        "image": <FaLinkedin />,
        "text": 'I keep my LinkedIn profile up to date with any new skills and accomplishments.'
    },
    {
        "platform": 'Facebook',
        "link": 'https://www.facebook.com/profile.php?id=100006168918337',
        "image": <FaFacebook />,
        "text": 'I am available on Facebook and you can contact me here anytime as well.'
    },
    {
        "platform": 'Github',
        "link":"https://github.com/Mobeen0",
        "image":<FaGithub />,
        "text":'You can find all my projects through my public repositories on Github.'
    }
]

export default contactInfo;