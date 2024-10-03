import Ideamaze from '../../../public/ideamaze.png'
import tableMaster from '../../../public/tablemaster.jpeg'
import blockchain from '../../../public/blockchain.png'
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import LanguageIcon from '@mui/icons-material/Language';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { LinkedIn } from '@mui/icons-material';

export const aboutItems = [
    { name: 'Name', description: 'Pawan Sen' },
    { name: 'Date Of Birth', description: 'August 12, 1990' },
    { name: 'Address', description: 'Ujjain, India' },
    { name: 'Zip code', description: '456010' },
    { name: 'Email', description: 'pawan.yn007@gmail.com' },
    { name: 'Phone', description: '+91-82368-93792' },
]

export const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Resume", link: "#resume" },
    { name: "Services", link: "#services" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
];

export const resumeItems = [
    { duration: "March 2024 - Present", title: "Full Stack Developer", organization: "VAOW Energy", description: "Worked on Product E-vehicle & Energy Storage Systems Software applications" },
    { duration: "Aug 2021 - Aug 2023", title: "Module Lead Engineer", organization: "LMS Solutions Pvt Ltd", description: "Create and participate in software planning and estimating, status monitoring and reporting,Software analysis and documentation and Database designing,Worked on E-commerce & Chat APP  & Social Network applications" },

    { duration: "July 2016 - Feb 2021", title: "Sr. Software Developer", organization: "MobiWeb Technologies", description: "Working domain online flight details real-time arrival and departure And Gaming fantasy sports specialisation." },


    { duration: "Sept 2015 - July 2016", title: "Software Developer", organization: "Vsure | Mobileappz", description: "Software analysis and documentation,Mobile App development web services Restful API" },

    { duration: "Aug 2014 - Aug 2015 ", title: "Software Developer", organization: " Conative IT Solution", description: "Software analysis and documentation,Self web development and Design Schema." },
];

export const servicieItems = [
    { icon: "web", title: "Web Developement" },
    { icon: "app", title: "App Developement" },
    { icon: "design", title: "Graphic Design" },
]

interface SkillItem {
    name: string;
    rating: number;
}

export const skillItems = [
    { name: "Node JS", rating: "9" },
    { name: "React JS", rating: "5" },
    { name: "PHP", rating: "9" },
    { name: "AWS", rating: "6" },
    { name: "NestJS", rating: "7" },
    { name: "Laravel", rating: "7" },
    { name: "CodeIgniter", rating: "9" },
    { name: "TypeScript", rating: "8" },
    { name: "MySql", rating: "9" },
    { name: "MongoDB", rating: "8" },
    { name: "MQTT", rating: "9" },
]

export const totalProjects = '12';

export const projectItems = [
    { name: "Ideamaze", category: "Web Development", image: Ideamaze },
    { name: "Table Master", category: "Web Development", image: tableMaster },
    { name: "D-vote", category: "Blockchain", image: blockchain },
]

export const highlightItems = [
    { name: 'Happy Customers', count: '15' },
    { name: 'Complete Projects', count: '20+' },
    { name: 'Projects', count: '30+' },
    { name: 'Projects', count: '30+' },
]

export const contactItems = [
    { name: 'Address', description: 'Ujjain, India', icon: HomeIcon },
    { name: 'Contact Number', description: '+91 8236893792', icon: PhoneEnabledIcon },
    { name: 'Email Address', description: 'pawan.yn007@gmail.com', icon: EmailIcon },
    { name: 'Website', description: 'pawansen007.com', icon: LanguageIcon },
]

export const footerItems = [
    {
        name: 'About',
        subItems: [
            { name: 'About Eager to leverage technical skills and problem-solving abilities to contribute to innovative projects in a fast-paced environmentI oversee the building of innovative systems architecture via Express & NestJS frameworks ,Javascript NodeJs, MySQL, and MongoDB.', icon: '' },
        ],
        socialProfiles: [
            { name: 'Linkdin', url: 'https://www.linkedin.com/in/pawan-sen-b5549058', icon: LinkedIn },
            // { name: 'X', url: 'https://x.com/Pawan_Sen_CV', icon: XIcon },
            // { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100013147477974', icon: FacebookIcon },
            // { name: 'Instagram', url: 'https://www.instagram.com/ipradeepraawat', icon: InstagramIcon },
        ],
    },
    {
        name: 'Links',
        subItems: [
            { name: 'Home', url: 'Home', icon: ArrowRightAltIcon },
            { name: 'About', url: 'About', icon: ArrowRightAltIcon },
            { name: 'Services', url: 'Services', icon: ArrowRightAltIcon },
            { name: 'Contanct', url: 'Contanct', icon: ArrowRightAltIcon },
        ],
    },
    {
        name: 'Services',
        subItems: [
            { name: 'DevOps', url: 'Services', icon: ArrowRightAltIcon },
            { name: 'Web Design', url: 'Services', icon: ArrowRightAltIcon },
            { name: 'Web Development', url: 'Services', icon: ArrowRightAltIcon },
            { name: 'Business Strategy', url: 'Services', icon: ArrowRightAltIcon },
            { name: 'Data Analysis', url: 'Services', icon: ArrowRightAltIcon },
            { name: 'Graphic Design', url: 'Services', icon: ArrowRightAltIcon },
        ],
    },
    {
        name: 'Have a Questions?',
        subItems: [
            { name: 'Ujjain, India', url: 'About', icon: LocationOnIcon },
            { name: '+91 8236893792', url: 'About', icon: PhoneEnabledIcon },
            { name: 'pawan.yn007@gamil.com', url: 'About', icon: EmailIcon },
        ],
    },
]