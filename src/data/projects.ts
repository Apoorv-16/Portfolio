import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    title: "Decentralized Fiver",
    description:
      "A modern platform for Data Labelling tasks creation/management",
    image: "Fiver.jpg",
    tech: ["Next.js", "Node.js", "Postgres","TypeScript", "Express","Phantom", "Blockchain"],
    github: "https://github.com/Apoorv-16/Decentralized-fiver",
    live: "",
    details: {
      problem:
        "Centralized Platform for users to post Data Labelling work Open to the world to take it up and get paid for these manual tasks",
      solution:
        "Built a streamlined fiver platform for users to create manual data labelling tasks open to all",
      features: [
        "Real-time task management for creators profile",
        "Real-time Payment Integration using blockchain",
        "Seamless payment using Phoantom wallet integration",
        
      ],
      impact: "Helping creators to delegate manual data labellling task to the open world for a small price",
    },
  },
  {
    title: "AI Website Builder",
    description: "A Website building applications where users can build full stack websites using AI",
    image: "builder.jpg",
    tech: ["Next.js", "TypeScript", "Prisma", "ClaudeAI","Node.js"],
    github: "https://github.com/Apoorv-16/Website-Builder-Complete-Project",
    live: "",
    details: {
      problem: "Complex task of building a website from scratch",
      solution:
        "using AI Prompts to Build and create full stack website using a LLM Model",
      features: [
        "Full stack website Creation",
        "Download button to download the full project as a zip file",
      ],
      impact: "Reduced time to create a full stack project from scratch",
    },
  },
  {
    title: "Talkative Chat Application",
    description: "Chat Application to send and receive real time messages",
    image: "chat.jpg",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    github: "https://github.com/Apoorv-16/Talk-A-Tive",
    live: "https://talk-a-tive-frontend-one.vercel.app/",
    details: {
      problem: "Need for a real time notification chat application",
      solution:
        " Chat app full-stack application is an excellent way to explore the challenges and solutions involved in building real-time communication systems.",
      features: [
        "One-on-One Chats",
        "User Authentication and Profile Management",
        "Notifications",
        "Group Chat Management",
      ],
      impact: "Users can now connect via this application to send and receive messages",
    },
  },
  {
    title: "Yoom",
    description: "A minimalist journaling application",
    image: "Yoom .jpg",
    tech: ["Next.js", "Tailwind CSS", "WebRTC"],
    github: "https://github.com/Apoorv-16/Yoom-Video-Call",
    live: "https://yoom-video-call-ecru.vercel.app/",
    details: {
      problem: "Video Confrencing application",
      solution:
        "Created a Video Confrencing application powerful features",
      features: [
        "Video conferencing",
        "Meeting Recording",
        
      ],
      impact: "Helping users to connect online and record a meeting",
    },
  },
];
