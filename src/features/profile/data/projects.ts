import agentbuddyImage from "@/../public/images/projects/agentbuddy.png";
import peershellImage from "@/../public/images/projects/peershell.gif";

import { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "agentbuddy",
    title: "AgentBuddy, Claude Code in your Mac's notch",
    time: "11.2026",
    link: "https://agentbuddymac.vercel.app/",
    image: agentbuddyImage,
    tags: ["Swift", "SwiftUI", "macOS", "Claude Code Hooks", "Homebrew"],
    description:
      "- Native macOS app that shows every running Claude Code session in the notch: who's working, who's done and who needs you.\n- Detects sessions automatically across Terminal, iTerm2, tmux and VS Code (and forks like Cursor), with no per-project setup.\n- Answer permission requests and Claude's multiple-choice questions right from the notch through a Claude Code `PermissionRequest` hook, which backs up and preserves the user's settings.\n- Live progress per session (one tick per tool call, failures in red), jump-to-tab, and sending prompts into Terminal, iTerm2 or tmux sessions.\n- Fully local, with no network requests. Ships through a one-line installer, a Homebrew cask and GitHub Releases.\n- [Source on GitHub](https://github.com/mealisohail/agentbuddy)",
  },
  {
    id: "peershell",
    title: "PeerShell, Peer-to-Peer Terminal Sharing",
    time: "11.2026",
    link: "https://peershell.vercel.app",
    image: peershellImage,
    tags: [
      "Go",
      "WebRTC",
      "pion/webrtc",
      "xterm.js",
      "Vite",
      "Node.js",
      "TypeScript",
      "WebSocket",
      "Docker",
    ],
    description:
      "- Streams a live shell into someone else's browser using a 6-digit pairing code. Traffic flows directly between peers over DTLS-encrypted WebRTC.\n- Go CLI agent built with pion/webrtc and creack/pty runs the shell behind a pseudo-terminal; the browser client uses Vite and xterm.js.\n- Node.js + TypeScript WebSocket signaling server handles only the handshake, so terminal data never passes through the server.\n- Pairing secured with single-use expiring codes, IP rate limiting (5 attempts per minute) and an IP lock after 3 failed attempts.\n- Deployed with Docker on Render (signaling) and Vercel (web), with a one-line install script and unit + integration tests in Go and TypeScript.\n- [Source on GitHub](https://github.com/mealisohail/peershell)",
  },
  {
    id: "dev-finder",
    title: "Dev Finder, Pair Programming Platform",
    time: "03.2024 - 04.2024",
    link: "https://github.com/mealisohail/dev-finder",
    tags: [
      "Next.js",
      "TypeScript",
      "NextAuth",
      "Stream Chat",
      "GetStream.io",
      "shadcn/ui",
      "Tailwind CSS",
      "Strapi 5",
      "Docker",
      "NGINX",
    ],
    description:
      "- Real-time, multi-user pair programming platform with secure authentication and collaboration tools for remote developers.\n- Next.js system with dynamic room management, participant controls and real-time communication.\n- NextAuth.js for authentication, with UI built on shadcn/ui and Tailwind CSS.\n- Real-time screen sharing, video calls and chat through Stream Chat and GetStream.io.\n- Participant pinning, tag-based browsing and dynamic room creation make sessions easy to find and manage.",
  },
  {
    id: "medibuddy",
    title: "MediBuddy, Medicine Reminder App",
    time: "03.2025 - 04.2025",
    link: "https://github.com/mealisohail/medibuddy",
    tags: [
      "React Native",
      "Expo",
      "Typescript",
      "Expo Local Authentication",
      "Expo Local Notifications",
      "AsyncStorage",
    ],
    description:
    "- Built a medicine reminder app using React Native (Expo), enabling users to manage medications with intuitive add, view, and delete functionality.\n- Implemented local notifications to remind users to take their medicines at scheduled times, enhancing adherence and health tracking and medicine monitoring.\n- Secured the application with local authentication, ensuring data privacy and restricted access for better user safety.\n- Utilized AsyncStorage for offline data persistence, allowing consistent user experience without internet dependency.\n- Designed a clean and user-friendly interface to simplify medication management, improving usability and engagement for daily health routines.",
  },
  {
    id: "deskops",
    title: "DeskOps, Task Management Platform",
    time: "10.2023 - 11.2023",
    link: "https://github.com/mealisohail/DeskOps",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Radix UI",
      "Motion",
      "shadcn/ui",
      "Prisma",
      "Stripe",
      "Vercel",
      "Docker",
      "MySQL",
      "RBAC",
    ],
    description:
      "- Trello-style task and project management platform with team collaboration, organization management and paid plans.\n- Authentication, board operations, list and card management, and activity logging.\n- Stripe-powered subscriptions for monetization.\n- Database designed with Prisma and MySQL to keep data consistent across teams and organizations.\n- Role-based access control (RBAC) for permissions within teams and organizations.",
  },
  {
    id: "jark-pick",
    title: "Pick Outfit Suggester",
    time: "01.2024 - 03.2024",
    link: "https://github.com/mealisohail/pick-mobile",
    tags: [
      "Freelance Project",
      "Nodejs",
      "Express",
      "MongoDB",
      "Mongoose ODM",
      "Nodemailer",
      "React Native",
      "AWS"
    ],
    description:
      "- Pick Outfit Suggester is a React Native app designed to suggest outfits and accessories based on user preferences, clothing items, and occasions. Launched in 2024, it leverages machine learning to provide personalized fashion recommendations to enhance users' style.\n- Developed an AI-driven suggestion engine to analyze fashion trends and user input\n- Created a seamless user interface for easy navigation and outfit selection\n- Integrated social sharing features to allow users to showcase their fashion choices",
  },
  {
    id: "jark-aia",
    title: "Ask It All",
    time: "07.2024 - 09.2024",
    link: "https://askitall.co/",
    tags: [
      "Freelance Project",
      "Nodejs",
      "Express",
      "MongoDB",
      "Mongoose ODM",
      "Nodemailer",
      "React",
      "GCP",
      "Razorpay",
      "Stream.io",
      "AWS"
    ],
    description:
      "- Developed a comprehensive appointment scheduling and payment system for mentors and mentees, integrated with video conferencing features.\n- Designed and implemented a user-friendly interface for seamless appointment booking and management\n- Integrated video conferencing capabilities for real-time communication between mentors and mentees\n- Implemented secure payment processing to facilitate transactions between users",
  },
  {
    id: "nfcCart",
    title: "Nfc Cart",
    time: "10.2024 - Present",
    link: "https://github.com/mealisohail/nfccart-frontend",
    tags: [
      "Freelance Project",
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
    description:
      "- Led the development of a digital card platform that allows users to create and manage their digital cards, perform transactions, and track their spending.\n- Integrated multiple payment gateways such as Razorpay, Stripe, and PayPal to enable seamless transactions.\n- Implemented multi-user type functionality, allowing users to create and manage different types of cards, such as credit cards, debit cards, and loyalty cards.\n- Developed a feature that allows users to add multiple cards to their digital wallet, and perform transactions using any of the added cards.\n- Integrated NFC technology to enable contactless payments.\n- Created a rating and review system that allows users to rate and review their experience with the platform.",
  },
  {
    id: "skyljo",
    title: "Skyljo Dashboard",
    time: "02.2025 - Present",
    link: "https://github.com/mealisohail/skyljo-frontend",
    tags: [
      "Freelance Project",
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
    description:
      "- Built a dashboard frontend and backend that allows admins to trim videos, with all the cuts and video validation functionality.\n- Implemented video trimming functionality with all the cuts and video validation, allowing admins to trim videos with ease.\n- Created a rating and review system that allows users to rate and review their experience with the platform.",
  },
];
