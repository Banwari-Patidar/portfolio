import { NavbarTypes, ProjectType } from "@/types";
import { BiLogoTypescript } from "react-icons/bi";
import { FaBitbucket, FaGitAlt, FaGithub, FaJs, FaReact } from "react-icons/fa";
import { GrSwift } from "react-icons/gr";
import { IoLogoFigma } from "react-icons/io5";
import { LiaSwift } from "react-icons/lia";
import { SiGradle, SiPostman, SiSocketdotio } from "react-icons/si";

export const navbarData: NavbarTypes[] = [
  {
    name: "Home",
    path: "/",
    type: "home",
  },
  {
    name: "Projects",
    path: "/projects",
    type: "projects",
  },
  {
    name: "Skills",
    path: "/skills",
    type: "skills",
  },
  {
    name: "Contact",
    path: "/contact",
    type: "contact",
  },
];

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Leap Social : Dating App (Team Lead) - Domain: Social Media",
    image: "/digimain.png",
    url: "",
    type: "mobile",
    tech: "Swift",
    tech2: "UIKIt",
    status: "Online",
    iosUrl:
      "https://apps.apple.com/in/app/leap-south-asian-dating-app/id1629056994",
    techUsed: [
      "Swift 5.0",
      "Uikit",
      "Firebase",
      "Rest API",
      "Xcode",
      "Social Media Login",
    ],
    des: [
      {
        id: 1,
        para: "Led a team of 5 developers as the Team Lead in the end-to-end development of Leap Social, a cutting-edge dating app designed to connect individuals based on shared interests and passions. Implemented advanced matching algorithms for optimized user experience.",
      },
    ],
    images: [
      {
        id: 1,
        url: "/ls1.png",
      },
      {
        id: 2,
        url: "/ls2.png",
      },
      {
        id: 3,
        url: "/ls3.png",
      },
      {
        id: 4,
        url: "/ls4.png",
      },
      {
        id: 5,
        url: "/ls5.png",
      },
      {
        id: 6,
        url: "/ls6.png",
      },
      {
        id: 7,
        url: "/ls7.png",
      },
    ],
  },
  {
    id: 2,
    title: "ClickAFix: Domain — Service and provider",
    image: "/lgmain.png",
    url: "",
    type: "mobile",
    tech: "Swift",
    tech2: "UIKIt",
    status: "Online",
    iosUrl: "App link :- https://apps.apple.com/in/app/clickafix/id1571100558",
    techUsed: [
      "MapKit",
      "Swift 5.0",
      "Xcode IDE",
      "Mixpanel",
      "RestApi",
      "SDLC",
    ],
    des: [
      {
        id: 1,
        para: "Clickafix is a home repairs company dedicated to ensuring the utmost convenience for homeowners. Clickafix makes your life easy by providing you with reliable and experienced providers for all your home needs. All you have to do is reach us via phone, WhatsApp, the Clickafix app or web to book.",
      },
    ],
    images: [
      {
        id: 1,
        url: "/cf1.png",
      },
      {
        id: 2,
        url: "/cf2.png",
      },
      {
        id: 3,
        url: "/cf3.png",
      },
      {
        id: 4,
        url: "/cf4.png",
      },
      {
        id: 5,
        url: "/cf5.png",
      },
      {
        id: 6,
        url: "/cf6.png",
      },
    ],
  },
  {
    id: 3,
    title: "Qamoos53: EN-FN Dictionary Domain —Dictionary",
    image: "/digilegalbooks.png",
    url: "",
    type: "mobile",
    tech: "Swift",
    tech2: "UIKIt",
    status: "Online",
    iosUrl: "https://apps.apple.com/in/app/qamoos53/id1539402155",
    techUsed: [
      "FMDB",
      "Swift 5.0",
      "Xcode IDE",
      "Core Data",
      "RestApi",
      "SDLC",
    ],
    des: [
      {
        id: 1,
        para: "The Qamoos53 App is a bilingual English/French reference dictionary Thematic and Qamoos (Listing) dictionary, enabling easy searches for words in both languages, along with their meanings and translations. The app features a database of over 7000 Lisan-ud-Dawat words curated Users can search for words, meanings, and transliterations in Lisan, English, and French. The Thematic Dictionary, designed for kids, includes relevant illustrations for words.",
      },
    ],
    images: [
      {
        id: 1,
        url: "/qa1.png",
      },
      {
        id: 2,
        url: "/qa2.png",
      },
      {
        id: 3,
        url: "/qa3.png",
      },
      {
        id: 4,
        url: "/qa4.png",
      },
      {
        id: 5,
        url: "/qa5.png",
      },
      {
        id: 6,
        url: "/qa6.png",
      },
    ],
  },
  {
    id: 4,
    title: "Lumen: Sales Force Automation - Dictionary Domain - SFA",
    image: "/lumen.png",
    url: "",
    type: "mobile",
    tech: "Swift",
    tech2: "UIKIt",
    status: "Online",
    iosUrl: "https://apps.apple.com/in/app/luman/id6448789521",
    techUsed: [
      "FMDB",
      "Swift 5.0",
      "Xcode IDE",
      "Core Data",
      "RestApi",
      "SDLC",
    ],
    des: [
      {
        id: 1,
        para: "Luman Automotive Systems Private Limited was founded in 1978 by Avtar Singh Sethi, the firm's principal investor, with over 34 years of experience in the automotive industry. Mr Sethi's passion for the automotive industry started with lighting and electrical components and diversified to engine induction air filtration systems. Under his leadership by 1990, Luman Auto had become the largest exporter of automotive headlamps and subsequently diversified into the Indian domestic marketplace. With knowledge, expertise and a strong team, Mr Sethi soon added a strategic product range and large production facilities to expand Luman's footprint, making Luman India's leading auto component brand.",
      },
    ],
    images: [
      {
        id: 1,
        url: "/lu1.jpeg",
      },
      {
        id: 2,
        url: "/lu2.jpeg",
      },
      {
        id: 3,
        url: "/lu3.jpeg",
      },
      {
        id: 4,
        url: "/lu4.jpeg",
      },
      {
        id: 5,
        url: "/lu5.jpeg",
      },
    ],
  },
];

export const skills = [
  {
    id: 1,
    icon: GrSwift,
    name: "Swift",
    des: "I specialize in Swift, using its powerful features and modern syntax to develop clean, efficient, and high-performance iOS applications, while ensuring robust code and seamless functionality.",
  },
  {
    id: 1,
    icon: LiaSwift,
    name: "Swift UI",
    des: "I specialize in building modern, responsive user interfaces with SwiftUI, utilizing its declarative syntax to create dynamic layouts and smooth animations for iOS apps.",
  },
  {
    id: 2,
    icon: "/reactNativeIcon.png",
    name: "React Native",
    des: "Expertise in building cross-platform mobile applications with React Native, delivering seamless performance and native-like user experiences for iOS and Android.",
  },
  {
    id: 3,
    icon: "/xcodeIcon.png",
    name: "Xcode",
    des: "Experienced in developing, testing, and deploying iOS applications using Xcode, with a strong emphasis on performance and usability.",
  },
  {
    id: 4,
    icon: "/androidStudioIcon.png",
    name: "Android Studio",
    des: "Skilled in using Android Studio to debug and optimize mobile applications, ensuring compatibility and excellent user experiences on Android devices.",
  },
  {
    id: 5,
    icon: BiLogoTypescript,
    name: "Typescript/Javascript",
    des: "Adept at building reliable and maintainable applications with TypeScript and JavaScript, ensuring type safety and enhanced developer productivity.",
  },
  {
    id: 5,
    icon: FaGitAlt,
    name: "Git/Github",
    des: "I use Git/GitHub for version control, collaborating on projects, and managing code repositories. I'm proficient in branching, merging, and using GitHub Actions for continuous integration and deployment.",
  },
  {
    id: 5,
    icon: SiPostman,
    name: "Postman",
    des: "I have experience using Postman to test and debug APIs, ensuring smooth integration with iOS applications. I leverage its features for efficient request automation, authentication handling, and API documentation.",
  },
];

export const extraSkills = [
  {
    id: 1,
    icon: FaReact,
  },
  {
    id: 2,
    icon: FaJs,
  },
  {
    id: 3,
    icon: BiLogoTypescript,
  },

  {
    id: 7,
    icon: IoLogoFigma,
  },
  {
    id: 8,
    icon: FaGithub,
  },
  {
    id: 9,
    icon: FaGitAlt,
  },
  {
    id: 10,
    icon: FaBitbucket,
  },
  {
    id: 13,
    icon: SiGradle,
  },
  {
    id: 13,
    icon: SiSocketdotio,
  },
];
