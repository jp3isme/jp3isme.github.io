const MyPortfolio = {
  img: "myMDB_capture_2.png",
  name: "My Portfolio",
  description:
    "The site you're currently on is my personal portfolio. Built with react, I utilized Gatsby for better SEO",
  skills: [
    "Gatsby",
    "React",
    "GraphQL",
    "Node.js",
    "JavaScript",
    "CSS",
  ],
  link: "/projects?p=MyPortfolio",
  outlink: null,
  linkText: "View Details",
  outLinkText: null,
  github: 'https://github.com/jp3isme/jp3isme.github.io',
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
  longer: "* Note: While this site does use industry standard encryption for storage, please use a unique password if you decide to register and try it out. This is just a fun project, and the hosting platform (Heroku) charges for SSL/TLS. Your connection will not be secure (in other words, your password—in theory—could be intercepted; don't use a password you use anywhere else). Heroku is also responsible for the initial load-time since free projects are offloaded from the server after 30 minutes", 
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
  outlink: "https://mymdbapp.herokuapp.com",
  linkText: "View Details",
  outLinkText: "Visit myMDb",
  github: null,
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
      img: process.env.PUBLIC_URL + `./projects/tiny/AM_screen1.png`,
      description: "",
    },
    {
      img: process.env.PUBLIC_URL + `./projects/tiny/AM_screen2.png`,
      description: "",
    },
    {
      img: process.env.PUBLIC_URL + `./projects/tiny/AM_screen3.png`,
      description: "",
    },
    {
      img: process.env.PUBLIC_URL + `./projects/tiny/AM_screen4.png`,
      description: "",
    },
    {
      img: process.env.PUBLIC_URL + `./projects/tiny/AM_screen5.png`,
      description: "",
    },
    {
      img: process.env.PUBLIC_URL + `./projects/tiny/AM_screen6.png`,
      description: "",
    },
  ],
  documents: null,
}

const eCinemaBooking = {
  img: null,
  name: "eCinemaBooking",
  description:
    "An online movie-ticket booking service developed as a course project",
  skills: ["Java", "JBoss / WildFly", "FreeMarker", "MySQL", "HTML", "CSS"],
  link: "/projects?p=eCinemaBooking",
  outlink: null,
  linkText: "View Details",
  outLinkText: null,
  github: null,
  external: false,
  target: "",
  gallery: [
    {
      img: ``,
      description: "",
    },
  ],
}

const Spoticli = {
  // img: process.env.PUBLIC_URL + `./projects/tiny/spoticli_capture.png`,
  img: `spoticli_capture.png`,
  name: "Spoticli (contributor)",
  description:
    "An open-source command line interface (CLI) for controlling Spotify. Project by Jacob Chambers",
  skills: ["Python"],
  link: "/projects?p=Spoticli",
  outlink: "https://github.com/wjacobc/spoticli",
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
    "A python script to tally ranked-choice voting with Google Forms",
  skills: ["Python"],
  link: "/projects?p=ranked_choice_voting",
  outLink: "https://github.com/jp3isme/ranked-choice-voting",
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
  AncestryMap,
  eCinemaBooking,
  Spoticli,
  ranked_choice_voting,
}

export { Projects }
