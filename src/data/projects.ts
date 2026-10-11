export const TAGS = {
    PYTHON: {
        name: "Python",
        class: "bg-[#3776ab]/20 text-[#7fb5e6]",
        icon: "lucide:code",
    },
    FASTAPI: {
        name: "FastAPI",
        class: "bg-[#009688]/20 text-[#4fd1c5]",
        icon: "lucide:zap",
    },
    JAVASCRIPT: {
        name: "JavaScript",
        class: "bg-[#f7df1e]/20 text-[#f7df1e]",
        icon: "lucide:braces",
    },
    SQLITE: {
        name: "SQLite",
        class: "bg-[#003b57] text-[#7cc4e8]",
        icon: "lucide:database",
    },
    GROQ: {
        name: "Groq API",
        class: "bg-[#f55036]/20 text-[#ff8a75]",
        icon: "lucide:cpu",
    },
    TAVILY: {
        name: "Tavily API",
        class: "bg-[#4b6bfb]/20 text-[#92a5ff]",
        icon: "lucide:search",
    },
    DART: {
        name: "Dart",
        class: "bg-[#0175c2]/20 text-[#5cb8f5]",
        icon: "lucide:target",
    },
    FLUTTER: {
        name: "Flutter",
        class: "bg-[#02569b]/30 text-[#68c3ff]",
        icon: "lucide:smartphone",
    },
    FIREBASE: {
        name: "Firebase",
        class: "bg-[#ffca28]/20 text-[#ffca28]",
        icon: "lucide:flame",
    },
    FIRESTORE: {
        name: "Firestore",
        class: "bg-[#ff9100]/20 text-[#ffb74d]",
        icon: "lucide:database",
    },
    PHP: {
        name: "PHP",
        class: "bg-[#777bb4]/20 text-[#a9acdc]",
        icon: "lucide:code",
    },
    SLIM: {
        name: "SlimPHP",
        class: "bg-[#74a045]/20 text-[#a6d173]",
        icon: "lucide:route",
    },
    TWIG: {
        name: "Twig",
        class: "bg-[#bacf29]/20 text-[#d4e660]",
        icon: "lucide:leaf",
    },
    MARIADB: {
        name: "MariaDB",
        class: "bg-[#003545] text-[#5fc3e0]",
        icon: "lucide:database",
    },
    HTML: {
        name: "HTML",
        class: "bg-[#e34f26]/20 text-[#ff8a65]",
        icon: "lucide:code",
    },
    CSS: {
        name: "CSS",
        class: "bg-[#1572b6]/20 text-[#64b5f6]",
        icon: "lucide:palette",
    },
    BOOTSTRAP: {
        name: "Bootstrap",
        class: "bg-[#7952b3]/20 text-[#b794f4]",
        icon: "lucide:layout-dashboard",
    },
    UNITY: {
        name: "Unity",
        class: "bg-[#222c37] text-[#e5e7eb]",
        icon: "lucide:gamepad-2",
    },
    CSHARP: {
        name: "C#",
        class: "bg-[#68217a]/30 text-[#c792ea]",
        icon: "lucide:hash",
    },
    FLASK: {
        name: "Flask",
        class: "bg-[#2b2b2b] text-[#e5e7eb]",
        icon: "lucide:flask-conical",
    },
    IOT: {
        name: "IoT",
        class: "bg-[#0ea5e9]/20 text-[#7dd3fc]",
        icon: "lucide:radio-tower",
    },
};

export const PROJECTS = [
    {
        title: "AI Study Assistant - MariHacks Hackathon",
        description:
            "A full-stack AI study platform that generates notes, flashcards, quizzes, and a personalized study plan from user inputs and uploaded files. Built on a secure FastAPI backend with JWT authentication, rate limiting, file validation, and REST APIs, integrating the Groq and Tavily services.",
        link: "",
        github: "https://github.com/gvogas/hacks.git",
        image: "/projects/ai-study-assistant.webp",
        tags: [
            TAGS.PYTHON,
            TAGS.FASTAPI,
            TAGS.JAVASCRIPT,
            TAGS.SQLITE,
            TAGS.GROQ,
            TAGS.TAVILY,
        ],
    },
    {
        title: "Financial Tracking Application",
        description:
            "A personal finance mobile app built with Flutter and Dart using an MVVM architecture. Uses Firebase Authentication and Firestore for secure data storage, real-time synchronization, and CRUD operations.",
        link: "",
        github: "https://github.com/Thevinh0207/finance-tracker-App-dev-2.git",
        image: "/projects/finance-tracker.webp",
        tags: [TAGS.DART, TAGS.FLUTTER, TAGS.GROQ, TAGS.FIREBASE, TAGS.FIRESTORE],
    },
    {
        title: "Nail Salon Management Web App - Client Project",
        description:
            "A course team project delivered to a real client, a nail salon, and managed with Agile/Scrum. Handles appointment, customer, and service management through a responsive interface, built with PHP, SlimPHP, and MariaDB on an MVC architecture, with Git-based team collaboration.",
        link: "",
        github: "https://github.com/Thevinh0207/SYSTEM-DEVELOPTMENT.git",
        image: "/projects/beauty-salon.webp",
        tags: [
            TAGS.PHP,
            TAGS.SLIM,
            TAGS.TWIG,
            TAGS.MARIADB,
            TAGS.JAVASCRIPT,
            TAGS.HTML,
            TAGS.CSS,
            TAGS.BOOTSTRAP,
        ],
    },
    {
        title: "PetConnect - Virtual Pet Store & Adoption Platform",
        description:
            "A full-stack virtual pet store built with PHP and the Slim Framework. Users can browse and filter pets, submit adoption requests, and chat with an AI assistant powered by Groq, while admins manage pets, users, and approvals from a dashboard. Includes email-based 2FA, bilingual English/French support, and transactional emails.",
        link: "",
        github: "https://github.com/OliverDAvino/eCommerceProject.git",
        image: "/projects/petconnect.webp",
        tags: [
            TAGS.PHP,
            TAGS.SLIM,
            TAGS.TWIG,
            TAGS.MARIADB,
            TAGS.GROQ,
            TAGS.JAVASCRIPT,
            TAGS.CSS,
        ],
    },
];

// Shown in the "Upcoming" section. Image is optional.
// Paste a repo URL into `github` to show a "Source Code" button on the card.
export const UPCOMING_PROJECTS = [
    {
        title: "Fossil Data API",
        description:
            "A team project building a REST API with the Slim framework that combines several public fossil web services (species, habitats, and researchers) into one aggregated JSON dataset.",
        github: "https://github.com/Thevinh0207/fossil-api.git",
        tags: [TAGS.PHP, TAGS.SLIM],
    },
    {
        title: "Squeeze Benz - 3D Game",
        description: "A 3D game built in Unity with C#.",
        github: "https://github.com/youngdisciple/squeeze-benz.git",
        tags: [TAGS.UNITY, TAGS.CSHARP],
    },
    {
        title: "IoT Smart Store",
        description:
            "An IoT smart store project built around a Costco use case, using Python and Flask.",
        github: "https://github.com/youngdisciple/smartshop.git",
        tags: [TAGS.IOT, TAGS.PYTHON, TAGS.FLASK],
    },
];  