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
  nadir,
  saad,
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
    title: "API Integration",
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
      "I was impressed by Ubaid's ability to bring our ideas to life with clean, efficient code. He exceeded our expectations in every way.",
    name: "Nadir Habib",
    designation: "CTO",
    company: "Artema Tech",
    image: nadir,
  },
  {
    testimonial:
      "Ubaid's frontend work drastically improved our website's performance. His attention to detail and dedication truly set him apart.",
    name: "Atif Khan",
    designation: "CEO",
    company: "Abixion Digital Marketing",
    image: frontend,
  },
  {
    testimonial:
      "Working with Ubaid was a game-changer. His technical skills and creativity transformed our project into something of exceptional.",
    name: "Saad Khan",
    designation: "CEO",
    company: "Artema Medical",
    image: saad,
  },
];

const projects = [
  {
    name: "Parallel X",
    description:
      "Frontend project for a Trip platform that streamlines client management and appointment scheduling. The application enhances the user interface, making it easier for communicate to interact with the user efficiently.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
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
    name: "StarBucks Clone",
    description:
      "3D project, a clone of Starbucks that streamlines manage client management and appointment scheduling. The application enhances the user interface, making it easier for user providers to interact with the system efficiently.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "CRM",
    description:
      "This Laravel-based website features various modules, including a creative and unique sign-in page. It offers a comprehensive customer registration form and displays customer data in both table format and within the database.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/UbaidUllah2305/Laravel",
  },
];

export { services, technologies, experiences, testimonials, projects };
