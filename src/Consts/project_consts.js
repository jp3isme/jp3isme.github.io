const myMDb = {
    img: process.env.PUBLIC_URL + `./projects/tiny/myMDB_capture_2.png`,
    name: 'myMDb',
    description:
        'An IMDb-like web app for viewing trending TV shows, movies, and people (actors, directors, etc) with data sourced from themoviedb.org API. Users can create an account and save their favorites',
    skills: [
        'React',
        'Node.js',
        'Express.js',
        'JavaScript',
        'MongoDB',
        'CSS',
        'Heroku',
    ],
    link: '/projects?p=myMDb',
    outlink: 'https://mymdbapp.herokuapp.com',
    linkText: 'View Details',
    outLinkText: 'Visit myMDb',
    github: null,
    target: '',
    outTarget: '_blank',
    external: false,
    gallery: null,
};

const AncestryMap = {
    img:
        process.env.PUBLIC_URL + `./projects/tiny/AncestryMap_Dark_capture.png`,
    name: 'AncestryMap',
    description:
        "A genealogical tool utilizing GEDCOMs for visualizing ancestors' birth locations by generation (desktop app)",
    skills: ['React', 'Node.js', 'Electron.js', 'JavaScript', 'CSS'],
    link: '/projects?p=AncestryMap',
    outlink: null,
    linkText: 'View Details',
    outLinkText: 'View Details',
    github: null,
    target: '',
    external: false,
    gallery: [
        {
            img: process.env.PUBLIC_URL + `./projects/tiny/AM_screen1.png`,
            description: '',
        },
        {
            img: process.env.PUBLIC_URL + `./projects/tiny/AM_screen2.png`,
            description: '',
        },
        {
            img: process.env.PUBLIC_URL + `./projects/tiny/AM_screen3.png`,
            description: '',
        },
        {
            img: process.env.PUBLIC_URL + `./projects/tiny/AM_screen4.png`,
            description: '',
        },
        {
            img: process.env.PUBLIC_URL + `./projects/tiny/AM_screen5.png`,
            description: '',
        },
        {
            img: process.env.PUBLIC_URL + `./projects/tiny/AM_screen6.png`,
            description: '',
        },
    ],
};

const eCinemaBooking = {
    img: null,
    name: 'eCinemaBooking',
    description:
        'An online movie-ticket booking service developed as a course project',
    skills: ['Java', 'JBoss / WildFly', 'FreeMarker', 'MySQL', 'HTML', 'CSS'],
    link: '/projects?p=eCinemaBooking',
    outlink: null,
    linkText: 'View Details',
    outLinkText: null,
    github: null,
    external: false,
    target: '',
    gallery: [
        {
            img: ``,
            description: '',
        },
    ],
};

const Spoticli = {
    img: process.env.PUBLIC_URL + `./projects/tiny/spoticli_capture.png`,
    name: 'Spoticli (contributor)',
    description:
        'An open-source command line interface (CLI) for controlling Spotify. Project by Jacob Chambers',
    skills: ['Python'],
    link: '/projects?p=Spoticli',
    outlink: 'https://github.com/wjacobc/spoticli',
    github: 'https://github.com/wjacobc/spoticli',
    linkText: 'View Details',
    outLinkText: 'View on Github',
    external: false,
    target: '_blank',
    gallery: null,
};

const ranked_choice_voting = {
    img: null,
    name: 'Ranked-choice-voting',
    description:
        'A python script to tally ranked-choice voting with Google Forms',
    skills: ['Python'],
    link: '/projects?p=ranked_choice_voting',
    outLink: 'https://github.com/jp3isme/ranked-choice-voting',
    github: 'https://github.com/jp3isme/ranked-choice-voting',
    linkText: 'View Details',
    outLinkText: 'View on Github',
    external: false,
    target: '_blank',
    gallery: null,
};

const Projects = {
    myMDb,
    AncestryMap,
    eCinemaBooking,
    Spoticli,
    ranked_choice_voting,
};

export { Projects };
