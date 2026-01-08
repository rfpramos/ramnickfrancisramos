/**
 * @author Ramnick Francis Ramos
 * @description Portfolio Data
 * 
 */



const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://ramnickfrancisramos.dev',
  title: 'ramnickfrancisramos.dev.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ramnick Francis Ramos',
  role: 'BS Computer Science Fresh Graduate',
  picture: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',

  description:
    'A fresh graduate from the Insitute of Computer Science at the University of the Philippines Los Baños. I am passionate about information security and software development. I am eager to learn and grow in the tech industry, and I am excited to contribute my skills and knowledge to a dynamic team.',
  resume: 'https://drive.google.com/file/d/1qARl2bjITN-VbOmenxFFLErwUbEcZ8CA/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/rfpramos/',
    github: 'https://github.com/rfpramos',
  },
}

// Labs  is the laboratory report that was made for cybersecurity portfolio
// This will be the main feature of the portfolio

const labs = [

]

/**
 * @deprecated 
 * This section is from previous portfolio, but will be used for the projects section.
 * 
        <section id="projects">
          <div className="projects">
            <ProjectCard
              title="Booking and Reservation for ICS"
              description="Worked for the Frontend Developer Team to create a Room Reservation Management System for the Institute of Computer Science - UPLB using React JS"
              image="assets/images/brics.png"
              link="https://brics-alpha.vercel.app/"
            />

            <ProjectCard
              title="Tulong Los Banos"
              description="Worked on designing the user experience and developing the user interface of a Flutter Mobile
Application while working on the Firebase Integration to serve as a donation management system for Los Banos, Laguna"
              image="assets/images/tulong.jpg"
            />

            <ProjectCard
              title="Elbi Food Review"
              description="Developed a database management system for a Food Review Application in Los Banos, Laguna using
MariaDB and Python"
              image="assets/images/elbifood.png"
              githubLink="https://github.com/rfpramos/elbi-food-review"
            />

            <ProjectCard
              title="Official UPLB February Fair App"
              description="Implemented experimental research and UI/UX design process for pitching a companion application
for the UPLB February Fair using Figma"
              image="assets/images/febfair.png"
              ytLink="https://youtu.be/1EgwotWA99c"
              figmaLink="https://www.figma.com/proto/9rdQQ4diXdr152YVSOCihc/CMSC-173%3A-February-Fair-Donation-App?node-id=1-10&starting-point-node-id=1%3A275&t=F7qJpvI0Agxgqv43-1"
            />

            <ProjectCard
              title="E-mbakan"
              description="Developed an e-commerce website using Material UI through MERN Stack for selling crops and
poultry product"
              image="assets/images/embakan.png"
              ytLink="https://youtu.be/MntXkmDEjrE"
              githubLink="https://github.com/CMSC100-1S2324/project-group-3"
            />
          </div>
        </section>
 *  */


const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    
    // name: 'Project 1',
    // description:
    //   'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    // stack: ['SASS', 'TypeScript', 'React'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
    // image: 'brics.png',

    name: 'Booking and Reservation for ICS',
    description:
      'Worked for the Frontend Developer Team to create a Room Reservation Management System for the Institute of Computer Science - UPLB using React JS',
    stack: ['React JS', 'JavaScript', 'CSS'],
    livePreview: 'https://brics-alpha.vercel.app/',
    image: 'brics.png',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ramnickfrancisamos@gmail.com',
}

export { header, about, projects, skills, contact }
