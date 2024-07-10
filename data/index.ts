import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Telegram Bot",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "MOYE-Meme Coin",
    des: "Moye is an Indian frog who first gained fame through viral memes",
    img: "/moyo.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://moyerevamped-sooty.vercel.app/",
    appType: "web",
  },
  {
    id: 2,
    title: "Dongo.ai-Web3 Research Assistant",
    des: "Tailored to deliver in-depth analysis, real-time market forecasts, and seamless data integration, Dongo AI elevates your strategic decision-making, placing institutional-grade insights within reach.",
    img: "/dongo.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://dongo-ai.vercel.app/",
    appType: "web",
  },
  {
    id: 3,
    title: "The Saviour - Emergency Toolkit",
    des: "The Saviour - Emergency Toolkit is a comprehensive mobile application that provides various emergency features to ensure user safety and security. It offers both online and offline SOS modes, a share journey feature, emergency dialer, rapid SOS activation, manage guardians, share address functionality, and a 'Make India Safe' feature where users can contribute by submitting reviews about their area. The app aims to make the country safer by providing essential emergency tools and enabling users to share their experiences.",
    img: "/saviour1.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/java.svg", "./xml.jpeg"],
    link: "https://play.google.com/store/apps/details?id=com.hackydesk.thesaviour",
    appType: "android",
  },
  {
    id: 4,
    title: " Driving Companion: Enhancing Safe and Energetic Driving",
    des: "Introducing the Driving Companion app - your ultimate travel partner designed to promote safe driving practices, combat drowsiness, provide real-time alerts, and offer an energetic music experience. With a range of features tailored for your safety and enjoyment, this app aims to create a seamless and engaging driving experience..",
    img: "/p4.jpeg",
    iconLists: ["/java.svg", "/tail.svg", "/ts.svg", "/xml.jpeg"],
    link: "https://github.com/Hackyabhay007/DRIVING_COMPANION",
    appType: "android",
  },
  {
    id: 5,
    title: " DevInfo- Get all device information",
    des: "DEVINFO is a mobile application that allows users to extract various device information. It provides users with detailed insights into their device's specifications, hardware components, and sensor readings. The app displays information such as manufacturer, model name, RAM, storage, battery level, Android version, camera specifications, processor (CPU) information, GPU information, live sensor readings, and IMEI (up to Android 10 only).",
    img: "/p5.png",
    iconLists: ["/java.svg", "/tail.svg", , "/xml.jpeg"],
    link: "https://github.com/Hackyabhay007/DEV-INFO",
    appType: "android",
  },
  {
    id: 6,
    title: "Student Headquarter",
    des: "Discover a seamless way to navigate the college admissions process and achieve your dreams.",
    img: "/p6.png",
    iconLists: ["/re.svg", "/tail.svg", "./ts.svg"],
    link: "https://65a4b46de5e58ff798b8f93b--comforting-tulumba-d0a237.netlify.app/",
    appType: "web",
  },
];

export const skills = [
  {
    name: "Reactjs",
  },
  {
    name: "Tailwind",
  },
  {
    name: "Nextjs",
  },
  {
    name: "Nodejs",
  },
  {
    name: "Java",
  },
  {
    name: "Kotlin",
  },
  {
    name: "Xml",
  },
  {
    name: "MongoDB",
  },
  {
    name: "Firebase",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Abhay was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Abhay's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Abhay is the ideal partner.",
    name: "Amit Sharma",
    title: "Tech Solutions India",
  },
  {
    quote:
      "Working with Abhay was a transformative experience. His keen eye for design and commitment to quality ensured that our project was a resounding success. Abhay's proactive approach and excellent communication made the process seamless and enjoyable. I highly recommend him for any development needs.",
    name: "Rahul Verma",
    title: "Bright Ideas Co.",
  },
  {
    quote:
      "Abhay's expertise and passion for development were evident from the start. His ability to understand our vision and bring it to life surpassed our expectations. Abhay's attention to detail and dedication to perfection make him a valuable asset to any project. We look forward to collaborating with him again.",
    name: "Anjali Mehta",
    title: "Creative Minds Studio",
  },
  {
    quote:
      "Abhay's technical skills and creative problem-solving made a significant impact on our project. His ability to deliver high-quality results under tight deadlines was impressive. Abhay's collaborative spirit and innovative mindset make him an exceptional partner in any development endeavor.",
    name: "Vikram Rao",
    title: "NextGen Solutions",
  },
  {
    quote:
      "Collaborating with Abhay was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Abhay's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Abhay is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer",
    desc: "Assisted in the development of a web-based platform using React.js, Next.js  enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Lead Mobile App Dev",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native, Kotlin , Java.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the development of a mobile app for a client, managing the entire process from initial concept to deployment on app stores. Additionally, built a web apps for another client, overseeing all stages from initial concept to launch ",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Backend Developer",
    desc: "Developed and maintained user-facing features using modern backend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Hackyabhay007",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.https//www.linkedin.com/in/hackyabhay",
  },
];
