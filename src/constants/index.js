import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  frontend,
  fullStack,
  ml,
  webDev,
  aws,
  jenkins,
  python,
  kubernetes,
  nextJs,
  // terra,
  ubuntu,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Web Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "AWS",
  //   icon: aws,
  // },
  
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next Js",
    icon: nextJs,
  },
  {
    name: "Aws",
    icon: aws,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Ubuntu",
    icon: ubuntu,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
];

const experiences = [
  {
    title: "Final Year Project",
    company_name: "Driver Mood and Face Detection Project",
    icon: ml,
    iconBg: "#383E56",
    date: "March 2023 - April 2024",
    points: [
      "Developed a driver monitoring system using Python to track facial features and detect signs of drowsiness, distraction, and emotional states.",
      "Implemented real-time alert mechanisms to ensure driver safety, leveraging computer vision and machine learning techniques.",
      "Collaborated with a multidisciplinary team to integrate the system into existing automotive platforms.",
      "Optimized the detection algorithms to achieve high accuracy and responsiveness under various driving conditions.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "UM Banking Project",
    icon: fullStack,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Feb 2024",
    points: [
      "Led the development of a banking application using NextJS, TypeScript, and Tailwind, resulting in a scalable and user-friendly platform.",
      "Designed and implemented secure authentication and transaction features, ensuring the safety of user data.",
      "Worked closely with product managers to define project requirements and deliver features on time.",
      "Conducted performance testing and optimization, improving application speed and user experience.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Artema Medical and Tech",
    icon: webDev,
    iconBg: "#383E56",
    date: "May 2024 - Present",
    points: [
      "Drove a 70% improvement in frontend performance by implementing best practices with NextJS, TypeScript, and Tailwind.",
      "Led key projects including artemamed, gryphon, and allnet, enhancing the overall user interface and experience.",
      "Collaborated with cross-functional teams to ensure the seamless integration of frontend components with backend services.",
      "Focused on writing clean, maintainable code and participated in code reviews to uphold high development standards.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Abixion Digital Marketing",
    icon: frontend,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - May 2022",
    points: [
      "Enhanced website performance by 80% through the implementation of JavaScript, React, CSS, and WordPress.",
      "Developed and maintained responsive web applications, ensuring a consistent user experience across devices.",
      "Engaged in collaborative problem-solving with designers and backend developers to create cohesive digital marketing solutions.",
      "Improved the codebase through active participation in code reviews and adherence to best practices.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
