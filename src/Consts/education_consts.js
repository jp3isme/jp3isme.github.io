const UGA = {
  img: `uga_crest_3.svg`,
  name: "University of Georgia (Honors)",
  degree: "Computer Science, B.S.",
  cert: "Certificate in Applied Data Science",
  date: "Fall 2017 - Spring 2019",
  gpa: "GPA: 3.72, Cum Laude",
  coursework: [
    { name: "Software Engineering", tags: ["Java"] },
    { name: "Intro To Scientific Computing", tags: ["MATLAB"] },
    { name: "Num Sim for Sci and Engineering", tags: ["MATLAB"] },
    { name: "Artificial Intelligence", tags: ["Java"] },
    { name: "Data Science I", tags: ["Python"] },
    { name: "Data Mining", tags: ["Python", "scikit-learn"] },
    { name: "Computing, Ethics, and Society", tags: [] },
    { name: "Operating Systems", tags: ["UNIX", "C"] },
    { name: "Human-Computer Interaction", tags: [] },
    { name: "Systems Programming", tags: ["UNIX", "C++"] },
    { name: "Introduction to Theory of Computing", tags: [] },
  ],
  link: "/education?s=UGA",
  projects: ["eCinemaBooking"],
}

const KSU = {
  img: `ksu_crest.png`,
  name: "Kennesaw State University",
  date: "Fall 2015 - Spring 2017",
  gpa: "GPA: 3.83",
  coursework: [
    { name: "Programming Principles I", tags: ["Java"] },
    { name: "Programming Principles II", tags: ["Java"] },
    { name: "Data Structures", tags: ["C++"] },
    { name: "Computer Architecture & Communication", tags: [] },
    { name: "Intro to Database Systems", tags: ["SQL", "Dia"] },
    { name: "User-Centered Design", tags: [] },
    { name: "Discrete Mathematics", tags: [] },
    { name: "Linear Algebra I", tags: [] },
    { name: "Calculus I", tags: [] },
    { name: "Statistics I", tags: [] },
  ],
  link: "/education?s=KSU",
  projects: null,
}

const Schools = {
  UGA,
  KSU,
}
export { UGA, KSU, Schools }
