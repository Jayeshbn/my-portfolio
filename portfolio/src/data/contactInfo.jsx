import LinkedIn, { GitHub, GMail, Telegram, Resume } from "../components/Icons";
// import {  Discord, Twitter } from "../components/Icons";
import ResumeLink from "../assets/resume.pdf"
const contactInfo = [
    {
        id: 1,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/jayeshbn/",
        icon: <LinkedIn />,
    },
    {
        id: 2,
        name: "GitHub",
        link: "https://github.com/jayeshbn",
        icon: <GitHub />,
    },
    {
        id: 3,
        name: "Mail",
        link: "mailto:jayeshbn10@gmail.com",
        icon: <GMail />,
    },

    {
        id: 4,
        name: "Resume",
        link: "https://drive.google.com/file/d/1lD5LCQeJIavR1boPvYnDFKtm2qo1dKlA/view?usp=sharing" ,
        // link: ResumeLink,
        icon: <Resume />,
        download: true
    }
    
     // {
    //     id: 5,
    //     name: "Telegram",
    //     link: "https://t.me/DV_793",
    //     icon: <Telegram />,
    // },
    // {
    //   id: 6,
    //   name: "Twitter",
    //   link: "twitter.com",
    //   icon: <Twitter />,
    // },
    // {
    //   id: 7,
    //   name: "Discord",
    //   link: "discord.com",
    //   icon: <Discord />,
    // },
];

export default contactInfo;