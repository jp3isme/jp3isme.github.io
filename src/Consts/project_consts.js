const MyPortfolio = {
  img: "myMDB_capture_2.png",
  img: null,
  name: "My Portfolio",
  description:
    "The site you're currently on is my personal portfolio. Built with react, I utilized Gatsby for better SEO",
  skills: ["Gatsby", "React", "GraphQL", "Node.js", "JavaScript", "CSS"],
  link: "/projects?p=MyPortfolio",
  outlink: "https://github.com/jp3isme/jp3isme.github.io",
  outlink: null,
  linkText: "View Details",
  outLinkText: "View on Github",
  github: "https://github.com/jp3isme/jp3isme.github.io",
  external: false,
  target: "",
  gallery: null,
  documents: null,
}

const myMDb = {
  // img: process.env.PUBLIC_URL + `./projects/tiny/myMDB_capture_2.png`,
  // img: `/projects/tiny/myMDB_capture_2.png`,
  img: "myMDB_capture_2.png",
  name: "myMDb",
  description:
    "An IMDb-like web app for viewing trending TV shows, movies, and people (actors, directors, etc) with data sourced from themoviedb.org API. Users can create an account and save their favorites",
  longer:
    "* Note: While this site does use industry standard encryption for storage, please use a unique password if you decide to register and try it out. This is just a fun project, and the hosting platform (Heroku) charges for SSL/TLS. Your connection will not be secure (in other words, your password—in theory—could be intercepted; don't use a password you use anywhere else). Heroku is also responsible for the initial load-time since free projects are offloaded from the server after 30 minutes",
  skills: [
    "React",
    "Node.js",
    "Express.js",
    "JavaScript",
    "MongoDB",
    "CSS",
    "Heroku",
  ],
  link: "/projects?p=myMDb",
  outlink: "http://mymdb.j-mhs.com",
  linkText: "View Details",
  outLinkText: "Visit myMDb",
  github: null,
  target: "",
  outTarget: "_blank",
  external: false,
  gallery: null,
  documents: null,
}

const filmSchedules = {
  img: null,
  name: "FilmSchedules",
  description:
    "A timeline visualizer for upcoming tv shows and movies from popular studios",
  longer:
    'Working but not complete. In progress: feature to allow toggling the view of categories on/off under "info" and saving to local browser storage',
  skills: ["Next.js", "React", "Node.js", "JavaScript", "CSS", "Vercel"],
  link: "/projects?p=filmSchedules",
  outlink: "https://filmschedules.j-mhs.com",
  linkText: "View Details",
  outLinkText: "View FilmSchedules",
  github: "https://github.com/jp3isme/filmSchedules",
  target: "",
  outTarget: "_blank",
  external: false,
  gallery: null,
  documents: null,
}

const AncestryMap = {
  // img: process.env.PUBLIC_URL + `./projects/tiny/AncestryMap_Dark_capture.png`,
  img: `AncestryMap_Dark_capture.png`,
  name: "AncestryMap",
  description:
    "A genealogical tool utilizing GEDCOMs for visualizing ancestors' birth locations by generation (desktop app)",
  longer:
    "GEDCOM (Genealogical Data Communication) is an open de facto specification for exchanging genealogical data between different genealogy software. A GEDCOM file is plain text containing genealogical information about individuals, and metadata linking these records together (blurb from Wikipedia)",
  skills: ["React", "Node.js", "Electron.js", "JavaScript", "CSS"],
  link: "/projects?p=AncestryMap",
  outlink: null,
  linkText: "View Details",
  outLinkText: "View Details",
  github: null,
  target: "",
  external: false,
  gallery: [
    {
      img: `AM_screen1.png`,
      title: null,
      buttonText: "View Image",
      description:
        "After loading the GEDCOM file, you see the calculated ancestral breakdown on top",
    },
    {
      img: `AM_screen2.png`,
      title: null,
      buttonText: "View Image",
      description:
        "Scrolling down shows ancestors' birth locations by generation. Selecting a location shows all ancestors from that area",
    },
    {
      img: `AM_screen3.png`,
      title: null,
      buttonText: "View Image",
      description:
        "Selecting an ancestor shows you their relation (and path) to the head person",
    },
    {
      img: `AM_screen4.png`,
      title: null,
      buttonText: "View Image",
      description:
        "When an ancestor with multiple relations is selected, all relationships are shown",
    },
    {
      img: `AM_screen5.png`,
      title: null,
      buttonText: "View Image",
      description:
        "Scrolling down on multiple relations brings the additional relations into view",
    },
    {
      img: `AM_screen6.png`,
      title: null,
      buttonText: "View Image",
      description:
        "Selecting an ancestor on the lefthand side shows all the same information for that ancestor",
    },
  ],
  documents: [
    {
      title: `Queen_Eliz_II.txt`,
      public_path: "Queen_Eliz_II.txt",
      buttonText: "View Document",
      description:
        "An example GEDCOM file (saved as a .txt so it will play nice with your browser) of the Queen's family",
    },
  ],
}

const CinemaEBooking = {
  img: null,
  name: "Cinema eBooking",
  description:
    "An online movie-ticket booking service developed as a course project",
  longer:
    "Because the course this project was developed for frequently re-uses this assignment, I've decided to not make the code publicly available",
  skills: ["Java", "JBoss / WildFly", "FreeMarker", "MySQL", "HTML", "CSS"],
  link: "/projects?p=CinemaEBooking",
  outlink: null,
  linkText: "View Details",
  outLinkText: null,
  github: null,
  external: false,
  target: "",
  gallery: [
    {
      img: `CEB_screen1.png`,
      title: null,
      buttonText: "View Image",
      description: "A screen-capture of the logged-out homescreen",
    },
    {
      img: `CEB_screen2.png`,
      title: null,
      buttonText: "View Image",
      description:
        "A screen-capture of the 'Coming Soon' page, which displayed upcoming movies",
    },
    {
      img: `CEB_screen3.png`,
      title: null,
      buttonText: "View Image",
      description:
        "A screen-capture of the 'Now Playing' page, which displayed movies that were currently showing at out mock-theater",
    },
    {
      img: `CEB_screen4.png`,
      title: null,
      buttonText: "View Image",
      description:
        "A screen-capture showing the details page for a particular movie",
    },
    {
      img: `CEB_screen5.png`,
      title: null,
      buttonText: "View Image",
      description:
        "A screen-capture of the search results page for 'Pet Sematary'",
    },
    {
      img: `CEB_screen6.png`,
      title: null,
      buttonText: "View Image",
      description: "A screen-capture of the user-registration page",
    },
    {
      img: `CEB_screen7.png`,
      title: null,
      buttonText: "View Image",
      description:
        "A screen-capture of the confirmation code step of user-registration",
    },
    {
      img: `CEB_screen8.png`,
      title: null,
      buttonText: "View Image",
      description:
        "A screen-capture of the logged-in homescreen displaying a custom greeting",
    },
    {
      img: `CEB_screen9.png`,
      title: null,
      buttonText: "View Image",
      description: "A screen-capture displaying the 'login' screen",
    },
    {
      img: `CEB_screen10.png`,
      title: null,
      description: "A screen-capture displaying the 'logout' success screen",
      buttonText: "View Image",
    },
    {
      img: `CEB_screen11.png`,
      title: null,
      buttonText: "View Image",
      description: "A screen-capture displaying the 'manage account' screen",
    },
    {
      img: `CEB_screen12.png`,
      title: null,
      buttonText: "View Image",
      description: "A screen-capture of the 'forgot password' screen",
    },
    {
      img: `CEB_screen13.png`,
      title: null,
      buttonText: "View Image",
      description:
        "A screen-capture displaying the admin-privileges of adding and updating movie information",
    },
  ],
  documents: [
    {
      title: `Project Overview PDF`,
      public_path: null,
      link:
        "https://drive.google.com/file/d/1NQ1PgP26m3otIVns9eju2-vUWVzUb7ik/view?usp=sharing",
      buttonText: "View Document",
      description:
        "A copy of the project overview given at the beginning of the assignment",
    },
    {
      title: `Deliverable 11: Final Report`,
      public_path: null,
      link:
        "https://docs.google.com/document/d/1OcS2JzQ9YJLi63J20yU7HTutQeD8urAfCO1DKUmWkLg/edit?usp=sharing",
      buttonText: "View Document",
      description: "A copy of the final deliverable created for the project",
    },
  ],
}

const Spoticli = {
  // img: process.env.PUBLIC_URL + `./projects/tiny/spoticli_capture.png`,
  img: `spoticli_capture.png`,
  name: "Spoticli (contributor)",
  description:
    "An open-source command line interface for controlling Spotify. Project by Jacob Chambers",
  skills: ["Python"],
  link: "/projects?p=Spoticli",
  outlink: "https://github.com/wjacobc/spoticli",
  outlink: null,
  github: "https://github.com/wjacobc/spoticli",
  linkText: "View Details",
  outLinkText: "View on Github",
  external: false,
  target: "_self",
  gallery: null,
  documents: null,
}

const ranked_choice_voting = {
  img: null,
  name: "Ranked-choice-voting",
  description:
    "A command-line python script to tally ranked-choice voting with Google Forms",
  skills: ["Python"],
  link: "/projects?p=ranked_choice_voting",
  outLink: null,
  github: "https://github.com/jp3isme/ranked-choice-voting",
  linkText: "View Details",
  outLinkText: "View on Github",
  external: false,
  target: "_self",
  gallery: null,
  documents: null,
}

const Projects = {
  MyPortfolio,
  myMDb,
  filmSchedules,
  AncestryMap,
  CinemaEBooking,
  Spoticli,
  ranked_choice_voting,
}

export { Projects }
