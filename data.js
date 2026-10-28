const links = [
  {
    label: "GitHub",
    id: "",
    url: "https://github.com/NamrathaMa?tab=repositories",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>',
  },
  {
    label: "LinkedIn",
    id: "",
    url: "https://www.linkedin.com/in/namratham/",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg>',
  },
  {
    label: "change between light and dark",
    id: "theme-toggle",
    url: "",
    svg: '<svg class="icon-moon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg><svg class="icon-sun" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
  },
];
const intro = {
  jobExp:
    "Most recently I was a Full-Stack Software Engineer at Chubb, working in Angular, TypeScript and SQL on insurance applications. Before that I was at Danlaw and spent three years at Deloitte working on Oracle HCM Cloud.",
  eduExp:
    "I studied Computer Science at NYU Courant (MS) and PES University (B.Tech). Here are the technologies I work with most:",
  skills: [
    "TypeScript",
    "JavaScript",
    "Angular",
    "React",
    "HTML",
    "CSS",
    "Node.js",
    "SQL",
    "MongoDB",
  ],
  imgUrl: "images/Nammie_Photo.jpg",
  imgAlt: "Namratha Manikonda",
};

const experiences = [
  {
    name: "Chubb",
    buttonData: "chubb",
    title: "Full-Stack Software Engineer",
    url: "https://www.chubb.com/us-en/",
    date: "Mar 2023 – Jul 2026",
    location: "UNITED STATES",
    exp: [
      "Developed customer-facing quote workflows and reusable Angular components—including dialogs, loading modals, and standalone pages—using TypeScript to streamline Chubb’s small-business insurance quoting experience.",
      "Developed and tested a SQL stored procedure to reconcile rate modification factors for 2,000–7,000 California workers’ compensation policies each month against WCIRB data, demonstrating approximately 80% automated validation coverage while routing unresolved discrepancies for manual review to mitigate inaccurate submissions and potential regulatory fines.",
      "Owned enhancement and incident intake workflows for 5–6 Workers’ Compensation teams by designing and maintaining Microsoft Forms and Power Automate flows, standardizing request data for Jira and ServiceNow, creating Jira tickets, and communicating ticket status and critical issues to requesters and leadership.",
    ],
  },
  {
    name: "Danlaw",
    buttonData: "danlaw",
    title: "Software Engineer, Applications Intern",
    url: "https://www.danlawinc.com/",
    date: "May 2022 – Dec 2022",
    location: "UNITED STATES",
    exp: [
      "Created and presented dashboard wireframes to stakeholders, then prototyped an internal QA application for validating journey-level data—including speed, acceleration, and hard-braking events—transmitted by vehicle telemetry devices.",
      "Modeled telemetry and user data in MongoDB and developed Node.js and Express.js REST APIs supporting CRUD operations and prototype login functionality, along with the dashboard’s initial HTML and CSS interface.",
    ],
  },
  {
    name: "Deloitte",
    buttonData: "deloitte",
    title: "Software Engineer / Analyst",
    url: "https://www.deloitte.com/ui/en/about.html",
    date: "Aug 2018 – Apr 2021",
    location: "INDIA",
    exp: [
      "Collaborated directly with stakeholders from Fortune 500 clients to gather requirements and configure and test REST API integrations supporting the migration of employee data from legacy systems to Oracle HCM Cloud.",
      "Developed and tested Oracle HCM Cloud data-extraction and reporting solutions using HCM Extracts, Fast Formulas, and Oracle BI Publisher to support recurring payroll, benefits, and sensitive employee-data reporting for client teams.",
      "Performed root-cause analysis and optimized PL/SQL reporting queries by correcting inefficient joins, reducing execution time by 14% based on before-and-after performance testing.",
    ],
  },
];

const projects = [
  {
    title: "Pig Game",
    description:
      "Two-player game where each player rolls the dice to increase their total. Both players take turns and the first to reach 100 wins!",
    status: "done",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/NamrathaMa/JavaScript_Projects/tree/main/Pig-Game",
  },
  {
    title: "Guess My Number",
    description:
      "A number is randomly generated and the player needs to guess the number which is between 1-20. They have 20 tries to do so and if you are unable to guess, you lose!",
    status: "done",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/NamrathaMa/JavaScript_Projects/tree/main/Guess-My-Number-Game",
  },
  {
    title: "Modal Window",
    description:
      "Just a simple app that opens a modal window when the buttons are clicked, and there are various ways to close the modal. This was an application just to explore different events that happen in the DOM.",
    status: "done",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/NamrathaMa/JavaScript_Projects/tree/main/Modal-Window",
  },
  {
    title: "Personal Portfolio",
    description:
      "The site you're looking at. A fun website about me, and what I love doing. First of many versions (attempting to build in React next!)",
    status: "live",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/NamrathaMa/namrathama.github.io",
  },
];

const education = [
  {
    name: "New York University, Courant Institute",
    degree: "MS Computer Science",
    year: "2021 – 2022",
  },
  {
    name: "PES University",
    degree: "B.Tech, Information Science and Engineering",
    year: "2014 – 2018",
  },
];
