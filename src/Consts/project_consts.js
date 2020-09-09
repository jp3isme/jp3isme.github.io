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
    link: 'https://mymdbapp.herokuapp.com',
    linkText: 'Visit myMDb',
    target: '_blank',
};

const AncestryMap = {
    img:
        process.env.PUBLIC_URL + `./projects/tiny/AncestryMap_Dark_capture.png`,
    name: 'AncestryMap',
    description:
        "A genealogical tool utilizing GEDCOMs for visualizing ancestors' birth locations by generation (desktop app)",
    skills: ['React', 'Node.js', 'Electron.js', 'JavaScript', 'CSS'],
    link: ' ',
    linkText: 'View Details',
    target: '',
};

const eCinemaBooking = {
    img: null,
    name: 'eCinemaBooking',
    description:
        'An online movie-ticket booking service developed as a course project',
    skills: ['Java', 'JBoss / WildFly', 'FreeMarker', 'MySQL', 'HTML', 'CSS'],
    link: ' ',
    linkText: 'View Details',
    target: '',
};

const Spoticli = {
    img: process.env.PUBLIC_URL + `./projects/tiny/spoticli_capture.png`,
    name: 'Spoticli (contributor)',
    description:
        'An open-source command line interface (CLI) for controlling Spotify. Project by Jacob Chambers',
    skills: ['Python'],
    link: 'https://github.com/wjacobc/spoticli',
    linkText: 'View on GitHub',
    target: '_blank',
};

const ranked_choice_voting = {
    img: null,
    name: 'Ranked-choice-voting',
    description:
        'A python script to tally ranked-choice voting with Google Forms',
    skills: ['Python'],
    link: 'https://github.com/jp3isme/ranked-choice-voting',
    linkText: 'View on GitHub',
    target: '_blank',
};

const Projects = {
    myMDb,
    AncestryMap,
    eCinemaBooking,
    Spoticli,
    ranked_choice_voting,
};

export { Projects };
