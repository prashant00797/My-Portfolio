//png's
// import YotubeImg from "../asset/Project1.jpg";
// import EcommerceImg from "../asset/Project2.jpg";
import AboutImg from "../asset/AboutBgImage.png";
import WeatherApp from "../asset/Project3.png"

//svg's
import op1 from "../asset/OP1.svg";
import op2 from "../asset/OP2.svg";
import op3 from "../asset/OP3.svg";
import github from "../asset/icon_github_.svg";
import linkedin from "../asset/icon _linkedin_.svg";
import gmail from "../asset/icon_gmail_.svg";
import html from "../asset/html.svg";
import css from "../asset/css.svg";
import javascript from "../asset/javascript.svg";
import react from "../asset/react.svg";
import Menu from "../asset/menu.svg";

export const NavbarConstant = {
  HEADER_LABEL: "@PrashantNath.",
  ABOUT: "About",
  WORK: "Work",
  CONTACT: "Contact",
  BACK: "⬅️  Back To Home",
  HAMBURGER_MENU: Menu,
};

export const HeaderConstant = {
  SALUTATION: "Hello Everyone!",
  NAME: "My Self Prashant Nath",
  OCCUPATION: "A Front End Developer from INDIA.",
};

export const MajorProjects = [
  {
    id: "1",
    projectTitle: "Weather App",
    projectImageUrl: WeatherApp,
    projectDescription:
      "A weather application built with tech stack of React Js which shows the temperature, humdity and wind of the entered location.",
    links: [
      {
        id: 1,
        linkTitle: "Github",
        classname: "github",
        url: "https://github.com/prashant00797/Weather-App",
      },
      {
        id: 2,
        linkTitle: "Live Project",
        classname: "liveproject",
        url: "https://github.com/prashant00797/Weather-App",
      },
    ],
  },
];

export const OtherProjectsData = [
  {
    id: 1,
    title: "Weather App",
    img: op1,
    url: "https://github.com/prashant00797",
  },
  {
    id: 2,
    title: "Weather App",
    img: op2,
    url: "https://github.com/prashant00797",
  },
];

export const socialLinks = [
  {
    id: 1,
    url: "https://github.com/prashant00797",
    src: github,
    _name: "github",
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/prashant0112/",
    src: linkedin,
    _name: "linkedIn",
  },
  {
    id: 3,
    url: "prashantn0112@gmail.com",
    src: gmail,
    _name: "gmail",
    mailTo: true,
  },
];

export const ContactData = {
  LETS_TALK: "Lets Talk!",
  NAME: "Name",
  EMAIL: "Email",
  YOUR_MESSAGE: "Your Message",
  SUBMIT: "Submit",
};

export const LanguageLogo = {
  HTML: html,
  CSS: css,
  JS: javascript,
  REACT: react,
};

export const AboutData = {
  COPYRIGHT: "@designed and developed with 💟 by Prashant.",
  PERSONAL_INFO_GREETINGS: `Hello Everyone!! First of thank you for visiting my page and willing to know about me. So lets get started!!!`,

  PERSONAL_INFO_ACADEMIC: ` I was born  and brought up in Itanagar, Arunachal Pradesh India👶. I did my schooling from Kendriya Vidyalaya No.2, Itanagar🎒. I passed my 10th grade with CGPA of 10/10 and my 12th grade with a percentage of 82.2 with Science Background 🏫. I moved to Shillong for my Graduation in Bachelor of Technology, in the field of Computer Science and Engineer 🖥️. I graduated in 2020 with a CGPA of 8.25/10. After that I started my career in Sep 2021 in a startup based in Gurugram and currently i currently work there as an Associate Development Engineer - Frontend👨‍💻. My current Tech Stack includes HTML, CSS/SASS, Javascript and React Js. I always try to learn new things and put my hard work and  dedication towards my Org.`,

  PERSONAL_INFO_ACADEMIC__RESUME: `This was all about my Professional Background 👨‍🏫. You can download my resume`,

  PERSONAL_INFO__HOBBY: `Apart from that i am pretty much fond of playing guitar🎸and of listening music, regardless of any genre🎧 and enjoy eating good food too.🧑‍🍳🍚.`,

  PERSONAL_INFO_THANKS: `So that’s all about me if you want to connect, please contact from the contact section or from my social links below🔗. Thats all!! Thank you for your time and patience reading. Glad you visited my page. 😇`,
  img: AboutImg,
  RESUME_HERE: "here.",
  resumeUrl:
    "https://drive.google.com/drive/u/2/folders/1O2puCpnaOkCawyO4KBYXNiCtsydeNnYS",
};
