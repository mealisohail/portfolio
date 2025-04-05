import { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    company: "TruScholar",
    companyLogo: "/images/companies/truscholar.png",
    positions: [
      // {
      //   id: "76ce1cbc-7a20-40a5-818c-8334bcefbd83",
      //   title: "Backend Developer",
      //   year: "03.2025 - present",
      //   employmentType: "Full-time",
      //   icon: "code",
      //   skills: [
      //     "TypeScript",
      //     "Node.js",
      //     "LoopBack",
      //     "MongoDB",
      //     "Multi-tenacy",
      //   ],
      //   expanded: true,
      // },
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Full Stack Developer",
        year: "07.2024 - Present",
        employmentType: "Full-time",
        icon: "code",
        description:
          "In-house Project: [TruScholar Wallet](https://linkmix.co/36379161)\n- Built and Optimized system performance, reducing API response times by 40% and scaling backend architecture to handle 3x more concurrent users.\n- Enhanced security and trust for 400K+ users by implementing Ethereum blockchain integration for tamper-proof digital credentials on TruScholar Web.\n- Integrated Ethereum Blockchain into TruScholar Web Platform using Solidity, Web3, and Polygon, ensuring secure and verifiable digital credentials.\n- Built and Optimized TruResume Mobile App (Android & iOS) using React Native, TypeScript, and Redux, enhancing cross-platform resume-building experience.",
        skills: [
          "React.js",
          "Next.js",
          "React Native",
          "TypeScript",
          "Redux",
          "React Query",
          "SSE",
          "Express.js",
          "Node.js",
          "MongoDB",
          "Redis",
          "Razorpay SDK & APIs",
          "Solidity",
          "Ethereum",
          "Web3.js",
          "AWS",
          "Nginx",
          "Docker",
          "S3",
          "Digilocker APIs",
          "Figma",
          "Postman",
          "REST APIs",
          "Material UI",
          "Bulls Queue",
          "Redis",
          "GitLab",
          "Git",
        ],
        expanded: true,
      },
      {
        id: "cedd7adb-4118-4085-9983-ae00530b49e2",
        title: "Full Stack Developer",
        year: "09.2023 - 06.2024",
        employmentType: "Internship",
        icon: "code",
        description:
          "In-house Project: [TruScholar Platform](https://app.truscholar.io)\n- Implemented Resume Parsing & Analysis, allowing users to import existing resumes and receive AI-driven feedback for better job applications.\n- Enhanced resume quality by 25% through a real-time Resume Checker tool, improving interview shortlisting rates.\n- Developed Referral & Earn System & User Tracking, enhancing user engagement, retention, and data-driven insights for business growth.\n\nIn-house Project: [TruSkillsforce](https://app.truskillsforce.io/)\n- Streamlined credential verification by developing a Leaving Certificate Module for TruScholar, reducing verification time from 3 days to minutes.",
        skills: [
          "React.js",
          "Next.js",
          "React Native",
          "TypeScript",
          "Redux",
          "React Query",
          "SSE",
          "Express.js",
          "Node.js",
          "MongoDB",
          "Redis",
          "Razorpay SDK & APIs",
          "Solidity",
          "Ethereum",
          "Web3.js",
          "AWS S3",
          "Digilocker APIs",
          "Figma",
          "Postman",
          "REST APIs",
          "Material UI",
          "Bulls Queue",
          "Redis",
          "GitLab",
          "Git",
        ],
      },
    ],
    current: true,
  },
  {
    company: "Upcred",
    companyLogo: "/images/companies/upcred.jpg",
    positions: [
      {
        id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
        title: "React Developer",
        year: "03.2024 - present",
        employmentType: "Internship",
        icon: "code",
        description:
          "In-house Project: [Upcred Website](https://upcred.ai/)\n- Optimized web performance by maintaining and enhancing core web services, reducing load times by 30% and improving user retention.\n- Led and maintained core web services and websites, overseeing frontend and backend development, ensuring seamless functionality and system reliability\n- Developed and integrated REST APIs, optimizing data flow and system efficiency, improving application performance and scalability.\n",
        skills: [
          "Next.js 14",
          "React",
          "Prisma",
          "Stripe",
          "Shadcn",
          "Tailwind CSS",
          "Docker",
          "PostgreSQL",
        ],
        expanded: true,
      },
    ],
    current: false,
  },
  {
    company: "Freelance",
    positions: [
      {
        id: "d12dd7ed-56ed-41d7-b9b1-346fb42e2432",
        title: "Full Stack Developer",
        year: "2024-2025",
        employmentType: "Part-time",
        description:
          "- Built a dashboard frontend and backend that allows admins to trim videos, with all the cuts and video validation functionality.\n- Implemented video trimming functionality with all the cuts and video validation, allowing admins to trim videos with ease.\n- Created a rating and review system that allows users to rate and review their experience with the platform.",
        icon: "design",
        skills: [
          "React",
          "Express.js",
          "Next.js",
          "PostgreSQL",
          "AWS",
          "MongoDB",
          "Docker",
          "NGINX",
          "TypeScript",
          "Razorpay",
        ],
      },
      {
        id: "0eecdfcb-028d-41f4-93e9-1269ba7eff7e",
        title: "Fronted Lead",
        year: "2024-2025",
        employmentType: "Part-time",
        description:
          "- Led the development of a digital card platform that allows users to create and manage their digital cards, perform transactions, and track their spending.\n- Integrated multiple payment gateways such as Razorpay, Stripe, and PayPal to enable seamless transactions.\n- Implemented multi-user type functionality, allowing users to create and manage different types of cards, such as credit cards, debit cards, and loyalty cards.\n- Developed a feature that allows users to add multiple cards to their digital wallet, and perform transactions using any of the added cards.\n- Integrated NFC technology to enable contactless payments.\n- Created a rating and review system that allows users to rate and review their experience with the platform.",
        icon: "design",
        skills: [
          "React",
          "Express.js",
          "Next.js",
          "Next Auth",
          "PostgreSQL",
          "AWS",
          "MongoDB",
          "Docker",
          "NGINX",
          "TypeScript",
          "Razorpay",
        ],
      },
      {
        id: "0292fb0d-ef0f-465d-87dc-ff7eb1b8a443",
        title: "Full Stack Developer",
        year: "2024-2025",
        employmentType: "Part-time",
        description:
          "- Built a real-time mentorship platform that allows users to book appointments with mentors and conduct video calls.\n- Integrated Google Sign-In and Razorpay payment gateway for seamless user experience and secure transactions.\n- Developed a feature that allows users to schedule appointments with mentors and receive reminders.\n- Created a rating and review system that allows users to rate and review their mentorship experiences.\n- Integrated Stream video conferencing API to facilitate video calls between mentors and mentees.",
        icon: "design",
        skills: [
          "React",
          "Express.js",
          "MongoDB",
          "Docker",
          "NGINX",
          "TypeScript",
          "GCP Cloud Functions",
          "Razorpay",
          "Stream.io",
        ],
      },
      {
        id: "f0becfba-057d-40db-b252-739e1654faa1",
        title: "Cross Platform Developer",
        year: "2024-2025",
        employmentType: "Part-time",
        description:
          "- Built a real-time app that suggests outfit and accessories based on user's preference, clothing items, and occasion.\n- Integrated machine learning algorithms to analyze user's fashion style and provide personalized recommendations.\n- Developed a chatbot that assists users in creating outfits and provides styling tips.\n- Created a social feature that allows users to share their outfits and follow other users for fashion inspiration.",
        icon: "code",
        skills: [
          "React",
          "React Native",
          "Express.js",
          "Socket.IO",
          "MongoDB",
          "Firebase",
          "Docker",
          "NGINX",
          "TypeScript",
        ],
      },
    ],
  },
  {
    company: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "Sant Gadge Baba University - Amravati, Maharashtra",
        year: "10.2020 - 06.2024",
        icon: "education",
        description:
          "- Completed Bachelor's degree in Computer Science with a Cumulative Grade Point Average (CGPA) of 9.16/10.\n- Language Proficiency: B1 English Level.",
        skills: [
          "C++",
          "Java",
          "Python",
          "Data Structures",
          "Algorithms",
          "Advanced Databases",
          "Distributed Systems",
          "Software Engineering",
          "Self-learning",
          "Teamwork",
          "Presentation",
        ],
      },
      {
        id: "70131ed8-36d9-4e54-8c78-eaed18240eca",
        title: "Boys Junior College - Akot, Maharashtra",
        year: "07.2018 - 05.2020",
        icon: "school",
        description:
          "n- Completed 12th standard specialized in science with 85.23%.",
        skills: [
          "Physics",
          "Chemistry",
          "Biology",
          "Mathematics",
          "Self-learning",
        ],
      },
      {
        id: "36c4c6fb-02d0-48c0-8947-fda6e9a24af7",
        title: "Boys High School - Akot, Maharashtra",
        year: "07.2017 - 05.2018",
        icon: "school",
        description:
          "n- Completed 10th standard specialized in science with 81.80%.",
        skills: [
          "Physics",
          "Chemistry",
          "Biology",
          "Mathematics",
          "Self-learning",
        ],
      },
    ],
  },
];
