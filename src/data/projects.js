import ChatAppImage from "../../public/assets/ChatApp-wndws.png";

export const projects = [
  {
    title: "Real-Time Chat Application",
    subtitle: "WebSocket-Based Messaging Platform",
    // description:
    //   "Real-time chat application supporting concurrent users with secure authentication.",
    features: [
      "Real-time messaging using Socket.io",
      "JWT-secured user authentication",
      "Concurrent connection handling",
      "MongoDB-backed message persistence",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    image: ChatAppImage,
    live: "https://chatapp90.netlify.app/",
    source: "https://github.com/nathira99/ChatApp.git",
    featured: true,
  },
  {
    title: "Learnify Academy",
    subtitle: "Role-Based Learning Management System",
    // description:
    //   "Full-stack learning platform with secure authentication, role-based access, and protected APIs for managing courses and users.",
    features: [
      "JWT-based authentication & RBAC",
      "Razorpay integration for course payments",
      "Protected REST APIs",
    ],
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Payment Gateway",
    ],
    image: "../../public/assets/learnify-academy.png",
    live: "https://learnifyacademy1.netlify.app/",
    source: "https://github.com/nathira99/Learnify-Academy.git",
    featured: true,
  },
  {
    title: "Advanced Expense Tracker",
    subtitle: "Personal Finance Management System",
    // description:
    //   "Personal finance tracker for recording, filtering, and analyzing income and expenses.",
    features: [
      "Income & expense CRUD operations",
      "Category and date-based filtering",
      "Monthly summaries and balance tracking",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    image: "../../public/assets/expense-tracker.png",
    live: "https://smart-expense-tracker-fe.onrender.com/",
    source: "https://github.com/nathira99/FE-Portfolio.git",
    featured: true,
  },
];
