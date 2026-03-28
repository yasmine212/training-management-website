import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';


export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/"
  },
  {
    title: "Courses",
    icon: <SchoolIcon />,
    link: "/formations"
  },
  {
    title: "About Us",
    icon: <InfoIcon />,
    link: "/apropos"
  },
  {
    title: "Contact",
    icon: <ContactMailIcon />,
    link: "/contact"
  }
];
