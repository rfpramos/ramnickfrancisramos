/**
 * @author Ramnick Francis Ramos
 * @description Portfolio Data
 * 
 */

import { duration } from "@material-ui/core"



const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://ramnickfrancisramos.dev',
  title: 'ramnickfrancisramos.dev',
}

 /**
   * @editted Content was already editted.
   */
const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ramnick Francis Ramos',
  role: 'Information Security and Software Development',
  picture: 'images/linux_style_headshot.png',

  description:
    'A fresh graduate from the Institute of Computer Science of the University of the Philippines Los Baños, I am an aspiring Information Security Analyst and Software Developer. Leveraging from my involvement in both security and quality assurance, I look forward to working for a security team that finds the synergy of both cybersecurity and the quality of service of softwares.',
  resume: `${process.env.PUBLIC_URL}/resume.pdf`,
  social: {
    linkedin: 'https://www.linkedin.com/in/rfpramos/',
    github: 'https://github.com/rfpramos',
  },
}

// Labs  is the laboratory report that was made for cybersecurity portfolio
// This will be the main feature of the portfolio

/**
 * 
 * 
 * Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----          1/7/2026   7:37 PM        1178861 buffer_overflow.pdf
-a----          1/7/2026   7:35 PM        1724667 dns_attack.pdf
-a----          1/7/2026   7:37 PM        4784145 encryption.pdf
-a----          1/7/2026   7:36 PM        1122148 environ_setuid.pdf
-a----          1/7/2026   7:35 PM        2858025 pki.pdf
-a----          1/7/2026   7:36 PM        5767813 shellshock_attack.pdf
-a----          1/7/2026   7:36 PM        1483139 sql.pdf
-a----          1/7/2026   7:35 PM        1388616 tcp_ip.pdf
-a----          1/7/2026   7:35 PM        3126290 xss.pdf
 


    Directory: C:\Users\ramni\OneDrive\Documents\APPLICATION_2026\portfolio\public\assets\malware_analysis


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----          1/7/2026   7:39 PM        5495925 malware_1.pdf
-a----          1/7/2026   7:39 PM        5313935 malware_2.pdf


PS C:\Users\ramni\OneDrive\Documents\APPLICATION_2026\portfolio\public\assets> ls .\ctf_writeup\


    Directory: C:\Users\ramni\OneDrive\Documents\APPLICATION_2026\portfolio\public\assets\ctf_writeup


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----          1/7/2026   7:43 PM       10161109 ctf.pdf


PS C:\Users\ramni\OneDrive\Documents\APPLICATION_2026\portfolio\public\assets> ls .\pen_test\


    Directory: C:\Users\ramni\OneDrive\Documents\APPLICATION_2026\portfolio\public\assets\pen_test


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----          1/7/2026   7:38 PM         796116 pentest.pdf


*/


 /**
   * @editted Content was already editted.
   */
const labs = [
  
  {
    name: 'Malware Analysis on Surveilance Malware',
    description:
      'A comprehensive static analysis infographic made for a Windows Executable that was uncovered to be a screenshot-taking surveilance malware.', 
    stack: ['Malware Analysis', 'Static Analysis','Metadata Analysis', 'Cryptanalysis', 'String Analysis', 'Import Analysis'],
    pdf: `${process.env.PUBLIC_URL}/assets/malware_analysis/malware_1.pdf`,
  },
  {
    name: 'Malware Analysis on Lab-simulated Malware',
    description:
    'A detailed inforgaphic malware analysis made for a Windows Executable File, simulated as a non-propagating background malware ',
    stack: ['Malware Analysis',  'Static Analysis',  'Metadata Analysis', 'Cryptanalysis', 'String Analysis', 'Import Analysis'],
    pdf: `${process.env.PUBLIC_URL}/assets/malware_analysis/malware_2.pdf`,
  },
  {
    name: 'Capture The Flag (CTF) Writeup',
    description:
      'Placed 8th of the entire participants of the Capture the Flag; a collection of explainer on a three-day-long Capture the Flag Competition that encompasses skills on Forensics, Web Security, Cryptography, Binary Exploitation, etc.',
    stack: ['CTF', 'Cybersecurity', 'Problem Solving'],
    pdf: `${process.env.PUBLIC_URL}/assets/ctf_writeup/ctf.pdf`,
  },
  {
    name: 'Penetration Testing Report',
    description:
      'A report made on penetrating a Kali Linux Victim Machine by exploitating the proftpd_telnet_133c_backdoor vulnerability.',
    stack: ['Penetration Testing', 'Metasploit', 'Vulnerability Assessment', 'Security Analysis'],
    pdf: `${process.env.PUBLIC_URL}/assets/pen_test/pentest.pdf`,
  },

  {
    name: 'Buffer Overflow Exploits',
    description:
      'A comprehensive laboratory report on exploring system architecture that simulates Buffer Overflow Attack in an Ubuntu 20.04 Virtual Machine.',
    stack: ['C Programming', 'Exploit Development', 'Memory Management'],
    pdf: `${process.env.PUBLIC_URL}/assets/labs/buffer_overflow.pdf`,
  },
  {
    name: 'Domain Name System (DNS) Security',
    description: 
      'An in-depth laboratory report that exhibits how DNS attacks misdirect users to misleading destinations that are malicious.',
    stack: ['DNS Protocol', 'Network Security', 'Cybersecurity'],
    pdf: `${process.env.PUBLIC_URL}/assets/labs/dns_attack.pdf`,
  },
  {
    name: 'Encryption',
    description: 
      'An analytical laboratory report that explores the different symmetric key encryption algorithms, their corresponding modes, alphabetic substitutions, and their implications on data confidentiality',
    stack: ['Cryptography', 'Data Security', 'Algorithms'],
    pdf: `${process.env.PUBLIC_URL}/assets/labs/encryption.pdf`,
  },
  {
    name: 'Environment Set-UID',
    description:
      'A laboratory report made to explore the privilege escalation on adding a malicious script or payload to environemnt variables in a vulerability-simulated Ubuntu 20.04 Virtual Machine',
    stack: ['Unix Security', 'Setuid Programs', 'Vulnerability Analysis'],
    pdf: `${process.env.PUBLIC_URL}/assets/labs/environ_setuid.pdf`,
  },
  {
    name: 'Public Key Infrastructure (PKI)',
    description:
      'A comprehensive laboratory report that explores how digital environments employ asymmetric encryption for public key infrasturctures for the more secure communication between parties.',
    stack: ['Cryptography', 'Digital Certificates', 'Network Security'],
    pdf: `${process.env.PUBLIC_URL}/assets/labs/pki.pdf`,
  },
  {
    name: 'Shellshock Attacks',
    description:
      'An in-depth laboratory report that explores the legacy vulnerability of Shellshock in Bash',
    stack: ['Bash Scripting', 'Vulnerability Analysis', 'Cybersecurity'],
    pdf: `${process.env.PUBLIC_URL}/assets/labs/shellshock_attack.pdf`,
  },
  {
    name: 'SQL Injection',
    description:
      'A detailed laboratory report that shows how the SQL Database of a simulated web-based database management system for payroll could be tampered through injections',
    stack: ['Database Security', 'Web Application Security', 'SQL'],
    pdf: `${process.env.PUBLIC_URL}/assets/labs/sql.pdf`,
  },
  {
    name: 'TCP/IP Protocol Suite',
    description:
      'A laboratory report that explores concepts on SYN FLooding Attacks and TCP Session Hijacking using tools such as Wireshark ',
    stack: ['Networking', 'TCP/IP', 'Network Security'],
    pdf: `${process.env.PUBLIC_URL}/assets/labs/tcp_ip.pdf`,
  },
  {
    name: 'Cross-Site Scripting (XSS)',
    description:
      'An in-depth laboratory report that exhibits how injection attacks of malicious script are made to a certain networking web application ',
    stack: ['Web Security', 'JavaScript', 'Vulnerability Analysis'],
    pdf: `${process.env.PUBLIC_URL}/assets/labs/xss.pdf`,
  },  
  

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


         /**
   * @editted Content was already editted.
   */
const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'BATSeq',
    type: 'Web Application',
    description:
      'Worked on the development of a web-based database management system that aims to streamline the data curation process of nucleotide sequences, incoporating several bioinformatics tools, for the Center for Caves Research of the University of the Philippines Los Banos\' Museum of Natural History',
    stack: ['MySQL', 'ExpressJS', 'ReactJS', 'NodeJS'],
    sourceCode: 'https://github.com/rfpramos/batseq_cmsc190_final',
    pdf: `${process.env.PUBLIC_URL}/assets/batseq_paper.pdf`,
    // livePreview: 'https://github.com',
    image: 'bat_seq.png',
  },
  {
    
    // name: 'Project 1',
    // description:
    //   'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    // stack: ['SASS', 'TypeScript', 'React'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
    // image: 'brics.png',

    name: 'Booking and Reservation for ICS (BRICS)',
    type: 'Web Application',
    description:
      'Worked for the frontend development team in the creation of the Room Reservation Management System for the Institute of Computer Science - UPLB using React JS and Material UI',
    stack: ['React JS', 'JavaScript', 'CSS'],
    livePreview: 'https://brics-alpha.vercel.app/',
    image: 'brics.png',
  },
  {
    name: 'Tulong Los Banos',
    type: 'Mobile Application',
    description:
      'Worked as a lead on the UI/UX Designing and frontend development of a database management system for donation drives in Los Banos, Laguna ',
    stack: ['Flutter', 'Dart', 'Firebase'],
    // sourceCode: 'https://github.com',
    image: 'tulong.jpg',
  },
  {
    name: 'Elbi Food Review',
    type: 'Database Management System',
    description:
      'As a team lead, worked on the development of a database management system for a food hub reviewing application using MariaDB and Python',
    stack: ['Python', 'MariaDB'],
    sourceCode: 'https://github.com/rfpramos/elbi-food-review',
    image: 'elbifood.png',
  },
  {
    name: 'Official UPLB February Fair App',
    type: 'HCI Research and UI/UX Design',
    description:
      'Ranked 1st in the Laboratory Section for the culminating pitching competition activity, implemented experimental research design in making a companion mobile application for the annual protest music festival UPLB February Fair using Figma',
    stack: ['Figma', 'UI/UX Design'],
    ytLink: 'https://youtu.be/1EgwotWA99c', 
    figmaLink: 'https://www.figma.com/proto/9rdQQ4diXdr152YVSOCihc/CMSC-173%3A-February-Fair-Donation-App?node-id=1-10&starting-point-node-id=1%3A275&t=F7qJpvI0Agxgqv43-1',
    image: 'febfair.png',
    pdf: `${process.env.PUBLIC_URL}/assets/febfair_app.pdf`,
  },
  {
    name: 'E-mbakan',
    type: 'Web Application',
    description:
      'Developed an e-commerce site for agricultural products using MERN Stack',
    stack: ['MongoDB', 'ExpressJS', 'ReactJS', 'NodeJS', 'Material UI'],
    ytLink: 'https://youtu.be/MntXkmDEjrE',
    sourceCode: 'https://github.com/CMSC100-1S2324/project-group-3',
    image: 'embakan.png',
  },
]


 /**
   * @editted Content was already editted.
   */
const cybersecuritySkills = [
  // cybersecurity skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Network Security',
  'Malware Analysis',
  'Penetration Testing',
  'Vulnerability Assessment',
  'Cryptography',
  'Buffer Overflow Exploits',
  'Domain Name System (DNS) Security',
  'Encryption Algorithms',
  'Public Key Infrastructure (PKI)',
  'Shellshock Attacks',
  'SQL Injection',
  'Cross-Site Scripting (XSS)',
  'TCP/IP Protocol Suite',

]
  


 /**
   * @editted Content was already editted.
   */
const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  // Ordered by relevance to cybersecurity
  'Assembly Language',
  'Python',
  'C',
  'JavaScript',
  'MySQL',
  'MariaDB',
  'MongoDB',
  'HTML',
  'CSS',
  'Java',
  'R',
  'React',
  'Node.js',
  'Express.js',
  'Git',
  'Firebase',
  'Flutter',
  'Dart',
  'Figma',
]



 /**
   * @editted Content was already editted.
   */
const education = [
  {
    institution: 'University of the Philippines Los Baños',
    degree: 'Bachelor of Science in Computer Science',
    graduationDate: 'December 2025',
    gwa: '1.4431',
    details:
      'Took elective courses in Cyberscurity and Bionformatics.',
    awards: [
      'Honorific Standing: Magna cum Laude',
      'University/College Scholar',
      'Inductee, Phi Kappa Phi Honor Society',
      'Recipient, Department of Science and Technology (DOST) Merit Scholarship',
    ],
    relevantCourses: [
      'CMSC 191. Cybersecurity',
      'CMSC 131. Introduction to Computer Organization and Machine-Level Programming',
      'CMSC 125. Operating Systems',
      'CMSC 100. Web Programming',
      'CMSC 128. Introduction to Software Engineering',
      'CMSC 123. Data Structures and Algorithms',
      'CMSC 127. File Processing and Database Systems'
    ],
  },
  {
    institution: 'Philippine Science High School - CALABARZON Region Campus',
    degree: 'High School Diploma',
    graduationDate: 'May 2021',
    details:
      'Took specialized classes on Science, Technology, Engineering, and Mathematics (STEM) and advanced Physics and Computer Science Electives',
    gwa: '1.42',
    awards: [
      'Graduated with High Honors',
    ]
    }
]


/**
 * Relevant Experience

UPLB Computational Interdisciplinary Research Labs (CINTERLABS) Los Banos, Laguna
Software Development Intern June 2024 - August 2024
● Develops web application using MERN Stack for the projects under Center for Cave Ecosystems
Research (CAVES) – The Museum of Natural History NICER Program on Center for Cave
Ecosystems Research
KUMU, INC. Remote
Software Quality Assurance Intern August 2023
● Utilized Jira to report bugs and issues in a mobile live-streaming application
● Worked with other technology interns to ensure the functionality of new features
● Experienced leading intern team on smoke testing for product deployment

Leadership & Activities

ALLIANCE OF COMPUTER SCIENCE STUDENTS - UPLB Los Baños, Laguna
Developer for Logistics and Public Affairs December 2021 - Present
● Helps in managing partnerships with external organizations and partner university organizations
● Aids in the management of the organization’s inventory
UPLB ROTC - CORPS OF CADETS Los Baños, Laguna
Non-Commissioned Cadet Officer November 2021 - May 2022
● Held a leadership position as the Acting G6, Communications, and Information Technology Officer
● Led the team managing the official social media page of the UPLB ROTC
 */



 /**
   * @editted Content was already editted.
   */
const affiliations = [
  {
    institution: 'Alliance of Computer Science Students (ACSS) - UPLB',
    position: 'Logistics and Public Relations Officer',
    duration: 'December 2021 - Present',
    details:
    'Hosted events for external activities such as seminars and workshops; Works primarily in the management of the physical assets of the organization through inventory curating;',
  },
  {
    institution: 'UPLB ROTC - Corps of Cadets',
    position: 'Non-Commissioned Cadet Officer',
    duration: 'November 2021 - May 2022',
    details:
      'Held a leadership position as the Acting G6, Communications, and Information Technology Officer. Led the team managing the official social media page of the UPLB ROTC.',
  },
]

const experiences = [
  {
    institution: 'UPLB Computational Interdisciplinary Research Labs (CINTERLABS)',
    position: 'Software Development Intern',
    duration: 'June 2024 - August 2024',
    details:
      'Collaborated with a team of six developers in making MERN-stacked web development projects in making dashboards for datasets gathered on 120+ biological profilings made by microbiology researchers from the Museum of Natural History of the University of the Philippines Los Banos',
  },
  {
    institution: 'KUMU, INC.',
    position: 'Software Quality Assurance Intern',
    duration: 'August 2023',
    details:
      'Utilized Jira for reporting bugs and collaborating with developers on improving a live-streaming application. Conducted smoke testing sprints as an intern lead. '
  },
] 

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ramnickfrancisamos@gmail.com',
  phone: '+63 960 277 1720',

}

export { header, about, labs, projects, cybersecuritySkills, skills, contact, education, affiliations, experiences }
