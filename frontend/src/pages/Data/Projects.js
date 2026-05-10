export const projectsData = [
  {
    id: "campus-quest",
    name: "Campus Quest",
    shortDescription: "A modern full-stack quiz platform designed for educational institutions with real-time interaction, analytics, and automation.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    category: "EdTech & Analytics",
    partner: "Integral University",
    introduction: "Campus Quest is a modern full-stack quiz platform exclusively developed in strategic partnership with Integral University. Built to serve their dynamic educational ecosystem, it transforms traditional assessments into an interactive, real-time experience where students can participate in live quizzes, track their performance, and compete with peers. The platform handles multiple user roles, delivers real-time updates, and provides deep insights through analytics — making it a complete digital assessment solution tailored for leading educational institutions.",
    features: {
      student: [
        "Participate in live quizzes with synchronized countdown timers",
        "Track performance using interactive analytics dashboards",
        "Compete on real-time leaderboards",
        "Receive auto-generated certificates after completion",
        "Access AI-powered chat assistant for instant help",
        "Secure login with OTP verification and profile management"
      ],
      faculty: [
        "Create and manage quizzes with multiple question types",
        "Launch real-time quiz sessions with live monitoring",
        "Analyze student performance through detailed reports",
        "Organize quizzes into structured courses",
        "Access dashboards for engagement and results tracking"
      ],
      admin: [
        "Manage faculty and student accounts across the platform",
        "Monitor live quiz sessions institution-wide",
        "Access aggregated analytics and reports",
        "Manage departments, courses, and platform settings"
      ]
    },
    realTime: [
      "Synchronized quiz timers for all participants",
      "Instant leaderboard updates",
      "Real-time participant tracking",
      "Live notifications and score updates"
    ],
    techStack: {
      frontend: ["React.js", "Redux Toolkit", "Material UI", "Bootstrap", "Chart.js", "Recharts"],
      backend: ["Node.js", "Express.js", "MongoDB", "JWT Authentication", "Socket.io"],
      tools: ["Cloudinary", "Nodemailer", "PDFKit", "AI Integration"]
    },
    security: [
      "Role-based access control (Student, Faculty, Admin)",
      "Secure authentication with JWT tokens",
      "Rate limiting and API protection",
      "Optimized for scalability and high performance"
    ],
    impact: [
      "Improve student engagement",
      "Automate evaluation and certification",
      "Gain insights through performance data",
      "Conduct seamless online assessments"
    ],
    conclusion: "Campus Quest is not just a quiz platform — it is a complete ecosystem for modern education, combining technology, automation, and real-time interaction to enhance learning and assessment experiences.",
    liveLink: "https://mohd-faizan.onrender.com/student/login"
  },
  {
    id: "track-my-bus",
    name: "TrackMyBus",
    shortDescription: "A smart, real-time university bus tracking system using browser geolocation APIs and live notifications.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    category: "Transport & Logistics",
    partner: "Integral University",
    introduction: "TrackMyBus is a smart, real-time bus tracking system built especially for Integral University students and staff. It allows students to track their university buses live, while drivers share their current GPS coordinates using the browser's Geolocation API (watchPosition()) — no external GPS hardware needed. The system ensures accurate arrival notifications, complete admin control, and seamless communication between students, drivers, and the administration.",
    features: {
      student: [
        "Track Your University Bus in Real-Time — View your bus moving live on the map.",
        "Auto Location Updates — Driver's GPS coordinates continuously update.",
        "Smart Notifications — 'Arriving soon' and 'Arrived' alerts via FCM.",
        "Password Reset — Secure password recovery via NodeMailer."
      ],
      driver: [
        "Share Real-Time GPS Location — Uses watchPosition() for live updates.",
        "Secure Login & Password Reset — Protected authentication."
      ],
      admin: [
        "Manage Buses — Create, edit, or delete bus records.",
        "Driver Management — Register and manage drivers.",
        "Student Assignment — View and manage students assigned to each bus.",
        "Pickup Points Overview — See all pickup points for every bus.",
        "Geocoding Integration — Auto converts location names to lat/lng.",
        "Live Tracking Dashboard — Monitor every bus in real-time."
      ]
    },
    realTime: [
      "Driver App uses watchPosition() to continuously send live GPS coordinates",
      "User App fetches location data to display bus movement on the map",
      "Firebase Cloud Messaging sends 'Arriving Soon' and 'Arrived' alerts",
      "Real-time synchronization between drivers and users",
      "Accurate ETA (Estimated Time of Arrival) calculation"
    ],
    techStack: {
      frontend: ["React.js", "Leaflet.js", "CSS"],
      backend: ["Node.js", "Express.js", "MongoDB", "OpenRouteService API", "JWT"],
      tools: ["Firebase Cloud Messaging", "NodeMailer", "Nominatim API"]
    },
    security: [
      "Secure authentication and password reset flow",
      "JWT (JSON Web Token) for secure access",
      "Protected admin and driver routes"
    ],
    impact: [
      "Real-time synchronization between drivers and users",
      "Accurate ETA calculations save student waiting time",
      "Smart notifications for better user experience",
      "Integrated geocoding for easy admin management"
    ],
    conclusion: "TrackMyBus bridges the gap between university administration, drivers, and students. By leveraging real-time geocoding and live notifications without external GPS hardware, it provides a highly cost-effective, scalable, and seamless transportation experience.",
    liveLink: "https://track-my-bus-v2-j21l.vercel.app/login"
  },
  {
    id: "crop-detection",
    name: "CropDection",
    shortDescription: "An AI-powered web application designed to help farmers, students, and agriculture enthusiasts identify plants and detect crop diseases using image analysis.",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80",
    category: "AI & Agriculture",
    partner: "ByteSoft",
    introduction: "CropDection is an AI-powered web application designed to help farmers, students, and agriculture enthusiasts identify plants and detect crop diseases using image analysis. By simply uploading an image of a plant, the AI analyzes it and provides detailed information about the plant or any detected diseases.",
    features: {
      general: [
        "Plant Identification",
        "Disease Detection",
        "AI-Based Analysis",
        "Fully Responsive UI",
        "Fast detection process"
      ]
    },
    techStack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["Netlify Hosting"],
      tools: ["TensorFlow", "ML Models"]
    },
    impact: [
      "Saves time for farmers and gardeners",
      "Easy to use interface",
      "Helps in smart farming using AI"
    ],
    conclusion: "CropDection helps in smart farming using AI. With future improvements like weather integration and soil analysis, it aims to be a complete agricultural assistant.",
    liveLink: "https://cropdection.netlify.app/"
  },
  {
    id: "customer-segmentation",
    name: "Customer Segmentation Platform",
    shortDescription: "An AI-powered web application to analyze and segment customers for smarter business decisions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    category: "AI & Analytics",
    partner: "ByteSoft",
    introduction: "The Customer Segmentation Platform is a machine learning-based web application that groups customers into meaningful segments based on behavioral and demographic data. It uses K-Means clustering to provide intelligent customer clustering, data visualization, and fast processing.",
    features: {
      general: [
        "Intelligent customer clustering (K-Means)",
        "Data visualization",
        "Clean web UI",
        "Fast processing"
      ]
    },
    techStack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["Python (Flask)", "Render"],
      tools: ["Scikit-learn", "Pandas", "NumPy", "Machine Learning"]
    },
    impact: [
      "Provides actionable business insights",
      "Enables marketing optimization",
      "Improves customer analytics"
    ],
    conclusion: "This platform is a powerful tool for businesses to understand their customer base, optimize their marketing strategies, and make data-driven decisions.",
  },
  {
    id: "smart-hospital",
    name: "Smart Hospital Decision & Resource Allocation System",
    shortDescription: "A MERN-stack application designed for real-time triage, dynamic prioritization, and capacity-aware bed allocation decisions.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    category: "Healthcare & AI",
    partner: "Solution Challenge Project 2026",
    introduction: "A MERN-stack application (MongoDB, Express, React, Node.js) designed for real-time triage, dynamic prioritization, and capacity-aware bed allocation decisions. This system functions as a decision-support platform, not a traditional static FIFO queue, enabling intelligent and responsive patient flow management.",
    features: {
      general: [
        "Patient symptoms and vitals intake with explainable urgency scoring",
        "Bed suggestions (ICU / General / None) based on real-time capacity",
        "Role-based actions for staff (User and Staff roles)",
        "Dynamic queue management instead of FIFO",
        "Staff dashboard with capacity inputs and overrides"
      ]
    },
    techStack: {
      frontend: ["React", "Vite", "React Router"],
      backend: ["Node.js", "Express.js", "MongoDB", "JWT Auth", "Mongoose"],
      tools: []
    },
    impact: [
      "Improves triage by prioritizing urgency and context over FIFO queue",
      "Real-time capacity inputs prevent over-allocation",
      "Staff governance and dynamic queue control"
    ],
    conclusion: "The system functions as an intelligent decision-support platform enabling responsive patient flow management.",
    liveLink: "https://github.com/v9mirza/solution-challenge"
  },
  {
    id: "resumex",
    name: "Resumex",
    shortDescription: "A modern, full-stack application for creating professional, ATS-friendly resumes in minutes.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    category: "Productivity Tools",
    partner: "v9mirza",
    introduction: "Resumex is a modern, full-stack application built with React, Node, MongoDB, and Express for creating professional, ATS-friendly resumes in minutes. It features a real-time editor and instant previews.",
    features: {
      general: [
        "Real-time editor with instant preview",
        "Multiple templates (Classic, Modern, Minimal)",
        "Secure user accounts with JWT authentication",
        "PDF export and dashboard management"
      ]
    },
    techStack: {
      frontend: ["React", "Vite"],
      backend: ["Node.js", "Express.js", "MongoDB", "JWT Auth"],
      tools: []
    },
    impact: [
      "Quickly create professional ATS-friendly resumes",
      "Easy PDF export",
      "Multiple layout options for personalization"
    ],
    conclusion: "A powerful tool to help users craft their resumes quickly with real-time preview and seamless export capabilities.",
    liveLink: "https://www.resumex.cv/"
  },
  {
    id: "devcart-backend",
    name: "DevCart Backend",
    shortDescription: "A backend-only e-commerce API built with Node.js, Express, and MongoDB.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    category: "E-Commerce APIs",
    partner: "v9mirza",
    introduction: "DevCart is a backend-only e-commerce API built with Node.js, Express, and MongoDB. It handles JWT auth, role-based access, product APIs, and order APIs with a product seeder containing sample data.",
    features: {
      general: [
        "JWT auth (register, login, protected profile)",
        "Role-based access (user/admin)",
        "Product APIs (list, get by id, create, update, delete)",
        "Order APIs (create, my orders, mark paid, mark delivered)"
      ]
    },
    techStack: {
      frontend: [],
      backend: ["Node.js", "Express.js", "MongoDB", "Mongoose", "bcryptjs", "jsonwebtoken"],
      tools: ["Product Seeder"]
    },
    impact: [
      "Ready-to-use e-commerce API",
      "Secure role-based access control",
      "Comprehensive order and product management APIs"
    ],
    conclusion: "A robust backend foundation for any e-commerce application, providing essential features like authentication, product management, and order processing.",
    liveLink: "https://github.com/v9mirza/devcart"
  },
  {
    id: "spendly",
    name: "Spendly",
    shortDescription: "A modern, full-stack personal finance dashboard to track income, expenses, investments, and savings with clear visualizations.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    category: "Finance & Dashboards",
    partner: "v9mirza",
    introduction: "Spendly is a modern, full-stack personal finance dashboard built with the MERN stack. It allows users to track income, expenses, investments, and savings with clear visualizations and intuitive transaction management.",
    features: {
      general: [
        "Personalized Dashboard with net total, financial distribution, and performance changes",
        "Transaction Management (add, edit, delete with categories and notes)",
        "Advanced Filtering by type or category",
        "Time Period Analytics (1M, 3M, 6M, 1Y, 2Y windows)",
        "Charts (Cashflow, Net Worth) using Recharts"
      ]
    },
    techStack: {
      frontend: ["React", "Vite", "Tailwind CSS", "Recharts", "Lucide React", "Axios"],
      backend: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
      tools: ["JWT Auth", "Bcrypt.js"]
    },
    impact: [
      "Clear visualization of personal finances",
      "Intuitive transaction management",
      "Secure user authentication"
    ],
    conclusion: "An intuitive and visually appealing finance tracker that helps users stay on top of their financial health with advanced analytics and charting.",
    liveLink: "https://spendly123.vercel.app/login"
  },
  {
    id: "bharat-almirah",
    name: "Bharat Almirah",
    shortDescription: "A premium Indian steel furniture manufacturing brand website showcasing heavy-duty steel almirahs and secure storage solutions.",
    image: "https://www.bharatalmirah.com/assets/images/homeal.png",
    category: "E-Commerce & Branding",
    partner: "Bharat Almirah",
    introduction: "The website presents Bharat Almirah as a trusted nationwide brand with 50,000+ happy customers, 500+ dealer partners, and a 30+ year legacy. Established in 1995, the company focuses on durable, elegant steel furniture for homes and institutions.",
    features: {
      general: [
        "Showcase of home steel wardrobes, office cabinets, and institutional lockers",
        "Highlighting heavy-gauge ISI-grade steel construction and secure locking systems",
        "Pan India delivery support and custom sizing options",
        "Modern and premium business style with personalized buying experience",
        "WhatsApp inquiry support and dealership opportunities"
      ]
    },
    techStack: {
      frontend: ["Web"],
      backend: [],
      tools: []
    },
    impact: [
      "Boosts brand presence for a 30+ year legacy manufacturer",
      "Facilitates bulk orders and institutional inquiries",
      "Enhances customer trust and personalized shopping experience"
    ],
    conclusion: "A premium business website that positions Bharat Almirah as a trusted nationwide brand, emphasizing their high-quality manufacturing and customer-first approach.",
    liveLink: "https://www.bharatalmirah.com/"
  },
  {
    id: "vaultcloud",
    name: "VaultCloud",
    shortDescription: "A minimal, high-performance Nextcloud deployment using Podman or Docker.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    category: "Cloud & Infrastructure",
    partner: "v9mirza",
    introduction: "VaultCloud is a self-hosted Nextcloud solution built for developers, privacy enthusiasts, and digital minimalists. It provides a high-performance deployment using Podman or Docker, deployable via podman-compose or manual commands.",
    features: {
      general: [
        "Nextcloud PHP + Apache app container",
        "MySQL 8.4 Database backend",
        "Rootless container engine via Podman",
        "HTTPS & reverse proxy via Caddy",
        "Easy orchestration with podman-compose"
      ]
    },
    techStack: {
      frontend: ["Nextcloud UI"],
      backend: ["Podman", "Docker", "MySQL", "Caddy", "Cockpit"],
      tools: ["podman-compose"]
    },
    impact: [
      "Empowers self-hosted cloud storage for privacy",
      "Minimal and high-performance deployment architecture",
      "Seamless container orchestration"
    ],
    conclusion: "VaultCloud simplifies setting up a self-hosted cloud storage environment, allowing users to reclaim their data privacy without sacrificing performance.",
    liveLink: "https://github.com/v9mirza/VaultCloud"
  }
];
