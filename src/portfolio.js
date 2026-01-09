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

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ramnick Francis Ramos',
  role: 'BS Computer Science Fresh Graduate',
  picture: 'images/linux_style_headshot.png',

  description:
    'A graduate from the Insitute of Computer Science at the University of the Philippines Los Baños. I am an aspiring Information Security Analyst with leveraged experience in Software Development. With a keen interest in creation of cybersecurity reports and analysis of software qualities, I aim to contribute to a cybersecurity team that give importance to both security and ease of usability. ',
  resume: `${process.env.PUBLIC_URL}/assets/resume.pdf`,
  social: {
    linkedin: 'https://www.linkedin.com/in/rfpramos/',
    github: 'https://github.com/rfpramos',
  },
}

// Labs  is the laboratory report that was made for cybersecurity portfolio
// This will be the main feature of the portfolio

/**
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
const labs = [
  
  {
    name: 'Malware Analysis on Surveilance Malware',
    description:
      'A comprehensive lab report on Malware Analysis, focusing on the techniques and methodologies used to analyze and understand the behavior of a simulated surveillance malware.',
  
    stack: ['Malware Analysis', 'Static Analysis','Metadata Analysis', 'Cryptanalysis', 'String Analysis', 'Import Analysis'],
    pdf: `${process.env.PUBLIC_URL}/assets/malware_analysis/malware_1.pdf`,
  },
  {
    name: 'Malware Analysis on Lab-simulated Malware',
    description:
    'A detailed inforgaphic on a analysis made on a malware that was simulated in a lab environment, covering various analysis techniques and findings.',
    stack: ['Malware Analysis',  'Static Analysis',  'Metadata Analysis', 'Cryptanalysis', 'String Analysis', 'Import Analysis'],
    pdf: `${process.env.PUBLIC_URL}/assets/malware_analysis/malware_2.pdf`,
  },
  {
    name: 'Capture The Flag (CTF) Writeup',
    description:
      'Placed 8th of laboratory section; A comprehensive writeup of a Capture The Flag (CTF) competition, detailing the challenges faced, solutions implemented, and lessons learned during the event.',
    stack: ['CTF', 'Cybersecurity', 'Problem Solving'],
    pdf: `${process.env.PUBLIC_URL}/assets/ctf_writeup/ctf.pdf`,
  },
  {
    name: 'Penetration Testing Report',
    description:
      'A detailed Penetration Testing Report, outlining the methodologies, findings, and recommendations from a simulated penetration test conducted to assess the security posture of a target system.',
    stack: ['Penetration Testing', 'Metasploit', 'Vulnerability Assessment', 'Security Analysis'],
    pdf: `${process.env.PUBLIC_URL}/assets/pen_test/pentest.pdf`,
  },

  {
    name: 'Buffer Overflow Exploits',
    description:
      'A comprehensive lab report on Buffer Overflow Exploits, covering the fundamentals, techniques, and mitigation strategies to enhance cybersecurity defenses.',
    stack: ['C Programming', 'Exploit Development', 'Memory Management'],
    pdf: `${process.env.PUBLIC_URL}/assets/labs/buffer_overflow.pdf`,
  },
  {
    name: 'Domain Name System (DNS) Security',
    description: 
      'An in-depth lab report on DNS Security, exploring vulnerabilities, attack vectors, and best practices to safeguard DNS infrastructure against cyber threats.',
    stack: ['DNS Protocol', 'Network Security', 'Cybersecurity'],
    pdf: `${process.env.PUBLIC_URL}/assets/labs/dns_attack.pdf`,
  },
  {
    name: 'Encryption',
    description: 
      'A detailed lab report on Encryption, discussing various encryption algorithms, their applications, and the role of encryption in protecting sensitive data from unauthorized access.',
    stack: ['Cryptography', 'Data Security', 'Algorithms'],
    pdf: `${process.env.PUBLIC_URL}/assets/labs/encryption.pdf`,
  },
  {
    name: 'Environment Setuid',
    description:
      'A lab report on Environment Setuid, examining the security implications, vulnerabilities, and mitigation techniques associated with setuid programs in Unix-like operating systems.',
    stack: ['Unix Security', 'Setuid Programs', 'Vulnerability Analysis'],
    pdf: `${process.env.PUBLIC_URL}/assets/labs/environ_setuid.pdf`,
  },
  {
    name: 'Public Key Infrastructure (PKI)',
    description:
      'A comprehensive lab report on Public Key Infrastructure (PKI), covering the principles, components, and implementation of PKI to ensure secure communication and authentication in digital environments.',
    stack: ['Cryptography', 'Digital Certificates', 'Network Security'],
    pdf: `${process.env.PUBLIC_URL}/assets/labs/pki.pdf`,
  },
  {
    name: 'Shellshock Attacks',
    description:
      'An in-depth lab report on Shellshock Attacks, analyzing the vulnerabilities, attack methods, and defense mechanisms to protect systems from Shellshock exploits.',
    stack: ['Bash Scripting', 'Vulnerability Analysis', 'Cybersecurity'],
    pdf: `${process.env.PUBLIC_URL}/assets/labs/shellshock_attack.pdf`,
  },
  {
    name: 'SQL Injection',
    description:
      'A detailed lab report on SQL Injection, exploring the techniques, vulnerabilities, and prevention strategies to safeguard databases from SQL injection attacks.',
    stack: ['Database Security', 'Web Application Security', 'SQL'],
    pdf: `${process.env.PUBLIC_URL}/assets/labs/sql.pdf`,
  },
  {
    name: 'TCP/IP Protocol Suite',
    description:
      'A lab report on the TCP/IP Protocol Suite, providing insights into the architecture, protocols, and security considerations of the TCP/IP model in modern networking.',
    stack: ['Networking', 'TCP/IP', 'Network Security'],
    pdf: `${process.env.PUBLIC_URL}/assets/labs/tcp_ip.pdf`,
  },
  {
    name: 'Cross-Site Scripting (XSS)',
    description:
      'An in-depth lab report on Cross-Site Scripting (XSS), examining the vulnerabilities, attack techniques, and mitigation strategies to protect web applications from XSS attacks.',
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

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'BATSeq',
    description:
      'Developed a web application that implements bioinformatics tool such as Basic Local Alignment Search Tool using MERN Stack for the nucleotide sequences under Center for Cave Ecosystems Research (CAVES) – The Museum of Natural History NICER Program on Center for Cave Ecosystems Research.',
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

    name: 'Booking and Reservation for ICS',
    description:
      'Worked for the Frontend Developer Team to create a Room Reservation Management System for the Institute of Computer Science - UPLB using React JS',
    stack: ['React JS', 'JavaScript', 'CSS'],
    livePreview: 'https://brics-alpha.vercel.app/',
    image: 'brics.png',
  },
  {
    name: 'Tulong Los Banos',
    description:
      'Worked on designing the user experience and developing the user interface of a Flutter Mobile Application while working on the Firebase Integration to serve as a donation management system for Los Banos, Laguna',
    stack: ['Flutter', 'Dart', 'Firebase'],
    // sourceCode: 'https://github.com',
    image: 'tulong.jpg',
  },
  {
    name: 'Elbi Food Review',
    description:
      'Developed a database management system for a Food Review Application in Los Banos, Laguna using MariaDB and Python',
    stack: ['Python', 'MariaDB'],
    sourceCode: 'https://github.com/rfpramos/elbi-food-review',
    image: 'elbifood.png',
  },
  {
    navme: 'Official UPLB February Fair App',
    description:
      'Implemented experimental research and UI/UX design process for pitching a companion application for the UPLB February Fair using Figma',
    stack: ['Figma', 'UI/UX Design'],
    ytLink: 'https://youtu.be/1EgwotWA99c', 
    figmaLink: 'https://www.figma.com/proto/9rdQQ4diXdr152YVSOCihc/CMSC-173%3A-February-Fair-Donation-App?node-id=1-10&starting-point-node-id=1%3A275&t=F7qJpvI0Agxgqv43-1',
    image: 'febfair.png',
  },
  {
    name: 'E-mbakan',
    description:
      'Developed an e-commerce website using Material UI through MERN Stack for selling crops and poultry product',
    stack: ['MongoDB', 'ExpressJS', 'ReactJS', 'NodeJS', 'Material UI'],
    ytLink: 'https://youtu.be/MntXkmDEjrE',
    sourceCode: 'https://github.com/CMSC100-1S2324/project-group-3',
    image: 'embakan.png',
  },
]

const cybersecuritySkills = [
  // cybersecurity skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Network Security',
  'Malware Analysis',
  'Ethical Hacking',
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


const education = [
  {
    institution: 'University of the Philippines Los Baños',
    degree: 'Bachelor of Science in Computer Science',
    graduationDate: 'December 2025',
    gwa: '1.4431',
    details:
      'Took elective courses in Information Security and Bionformatics.',
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
      'Specialized in Science, Technology, Engineering, and Mathematics (STEM) strand with electives on Physics, Computer Science, and Engineering.',
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
const affiliations = [
  {
    institution: 'Alliance of Computer Science Students (ACSS) - UPLB',
    position: 'Logistics and Public Relations Officer',
    duration: 'December 2021 - Present',
    details:
      'Helps in managing partnerships with external organizations and partner university organizations. Aids in the management of the organization’s inventory.',
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
      'Developed a web application using MERN Stack for the projects under Center for Cave Ecosystems Research (CAVES) – The Museum of Natural History NICER Program on Center for Cave Ecosystems Research.',
  },
  {
    institution: 'KUMU, INC.',
    position: 'Software Quality Assurance Intern',
    duration: 'August 2023',
    details:
      'Utilized Jira to report bugs and issues in a mobile live-streaming application. Worked with other technology interns to ensure the functionality of new features. Experienced leading intern team on smoke testing for product deployment.',
  },
] 

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ramnickfrancisamos@gmail.com',
  phone: '+63 960 277 1720',

}

export { header, about, labs, projects, cybersecuritySkills, skills, contact, education, affiliations, experiences }
