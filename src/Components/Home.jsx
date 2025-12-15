import React from "react";
import profilePic from "./assets/croppedphotos.jpg";
import phoneIcon from "./assets/phone-1.png";
import gmailLogo from "./assets/gmail_logo.png";
import linkedinLogo from "./assets/linkedin-logo.png";
import githubLogo from "./assets/github.png";
import "./Home.css"; 
import javalogo from "./assets/java_logo.png";
import htmllogo from "./assets/html_logo.png";
import csslogo from "./assets/css_logo.png";
import jslogo from "./assets/javascript_logo.png";
import springbootlogo from "./assets/spring_boot_logo.svg";
import springsecuritylogo from "./assets/spring-security_logo.svg";
import springdatalogo from "./assets/spring-data_logo.svg";
import Reactjs from "./assets/react.svg";
import mysqllogo from "./assets/mysql_logo.png";
import postgresqllogo from "./assets/postgresql-logo.png";
import Websoket from "./assets/Websoket.png";
import Jwtlogo from "./assets/json-web-token.png";
import gitlogo from "./assets/gitHub_logo.png";
import dockerlogo from "./assets/docker_logo.png";
import bootstraplogo from "./assets/bootstrap_logo.png";
import postmanlogo from "./assets/postman-Logo.png";
import intelijlogo from "./assets/intellij_logo.png";
import vscodelogo from "./assets/visual-studio_logo.png";
import linux from "./assets/linux_Logo.png";
import Putty from "./assets/Putty_Logo.png";
import winscp from "./assets/WinSCP_Logo.png";


function Home() {
  const techStack = [
    { name: "Java", logo: javalogo },
    { name: "HTML", logo: htmllogo },
    { name: "CSS", logo: csslogo },
    { name: "JavaScript", logo: jslogo },
    { name: "Spring Boot", logo: springbootlogo },
    { name: "Spring Security", logo: springsecuritylogo },
    { name: "Spring Data JPA", logo: springdatalogo },
    { name: "ReactJS", logo: Reactjs },
    { name: "MySQL", logo: mysqllogo },
    { name: "PostgreSQL", logo: postgresqllogo },
    { name: "WebSoket", logo: Websoket },
    { name: "JWT", logo: Jwtlogo },
    { name: "Linux", logo: linux },
    { name: "PuTTY", logo: Putty },
    { name: "WinSCP", logo: winscp},
    { name: "Git", logo: gitlogo },
    { name: "Docker", logo: dockerlogo },
    { name: "BootStrap", logo : bootstraplogo},
    { name: "Postman", logo: postmanlogo },
    { name: "IntelliJ IDEA", logo: intelijlogo },
    { name: "VS Code", logo: vscodelogo }
  ];

  return (
   
    <>
      <div className="text-center mb-5" >
        <div className="imgblock">
        <img
          src={profilePic}
          className="rounded-circle mb-3 border border-light"
          alt="Profile"
          width="250"
          height="250"
        />
        <h1 className="fw-bold">Rahulkumar C</h1>
        <p >Java Full Stack Developer</p>
        <a
          href="mailto:rahulkumarc679@gmail.com"
          className="btn btn-outline-primary btn-sm"
        >
          Contact Me
        </a>
      </div>
</div>
       <div className="mb-5">
        <h3 className="mb-4 text-center">About Me</h3>
        <div id="glasscard">
      <p className="about-text" style={{ textIndent: "60px" }}>
  I’m a passionate and results-driven Full Stack Java Developer with strong
  expertise in Java, Spring Boot, Spring Security, JDBC, and Spring Data JPA.
  I build secure, scalable, and user-friendly applications while following clean coding
  and practical problem-solving principles. On the frontend, I work with ReactJS, HTML, CSS,
  JavaScript, and Bootstrap to deliver responsive and modern UI components.
  <br /><br />
  I have hands-on experience working on real projects including a full CRUD application using Spring Boot
  & JDBC, and a real-time chat application using WebSocket + STOMP with JWT-based authentication.
  <br /><br />
  I have hands-on experience with Docker containerization and version control through Git, ensuring that
  my projects are robust, maintainable, and production-ready.
  <br /><br />
  With hands-on experience in Docker, Git, MySQL, PostgreSQL, Postman, IntelliJ IDEA, and VS Code —
  along with strong knowledge of SQL queries, joins, indexing basics, and database design — I’m confident
  in building and managing production-ready applications. I’m always eager to learn, take on challenging
  roles, and collaborate with teams to bring impactful ideas to life.
</p><p>
  <div> Linux Environment: Ubuntu (Command Line & Server Usage) </div>
  <div> Remote Tools: PuTTY (SSH), WinSCP (Secure File Transfer) </div>
</p>

</div>

      </div>


      <div className="mb-5">
        <h3 className="mb-4 text-center">Tech Stack</h3>
        <div className="row g-4 justify-content-center">
          {techStack.map((tech, index) => (
            <div key={index} className="col-4 col-sm-3 col-md-2 text-center">
              <img
                src={tech.logo}
                alt={tech.name}
                className="img-fluid tech-logo mb-2"
              />
              <p className="small">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

    
      <div className="mb-5">
        <h3 className="mb-3" id="h">Projects</h3>

        <div className="card mb-3 shadow-sm">
          <div className="glass-card">
            <h5 className="card-title">CRUD App using Spring Boot</h5>
            <p className="card-text">
             This is a simple Spring Boot CRUD (Create, Read, Update, Delete) application that uses Spring Data JPA and
            PostgreSQL. It demonstrates basic RESTful APIs with database operations.
            </p>
            <a
              href="https://github.com/Rahulkumar-06/Java-SpringBoot-JDBC-BackEnd-"
              target="_blank"
              className="btn btn-sm btn-outline-secondary"
            >
              View on GitHub
            </a>
          </div>
        </div>

        <div className="card mb-3 shadow-sm">
          <div className="glass-card">
            <h5 className="card-title">Spring Security App</h5>
            <p className="card-text">
             A simple and secure web application built using Spring Boot, Spring Security, Thymeleaf, 
            and JPA that allows users to create, view, and manage content entries (like notes, blog posts,
            or articles).
            </p>
            <a
              href="https://github.com/Rahulkumar-06/Thymeleaf-Demo"
              target="_blank"
              className="btn btn-sm btn-outline-secondary"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="card mb-3 shadow-sm">
          <div className="glass-card">
            <h5 className="card-title">Full Stack Web Application using ReactJS+Spring Boot</h5>
            <p className="card-text">
             This is a full-stack web application built with React.js on the frontend and Spring Boot on the backend. 
             It uses MongoDB Atlas for database storage and is secured using Spring Security. 
             The frontend is on the main branch, and the backend is maintained on a separate backend branch.
            </p>
            <a 
              href="https://github.com/Rahulkumar-06/Full-Stack-Web-Application.git"
              target="_blank"
              className="btn btn-sm btn-outline-secondary"
            >
              View on GitHub
            </a>
          </div>
        </div>
          <div className="card mb-3 shadow-sm">
          <div className="glass-card">
            <h5 className="card-title">Secure Military Communication System</h5>
            <p className="card-text">
             The Secure Military Communication System is a full-stack real-time communication platform designed to 
             provide secure message transmission for military operations.It uses encrypted JWT authentication, 
             secure password hashing, and WebSocket STOMP-based real-time communication.
            </p>
            <a 
              href="https://github.com/Rahulkumar-06/SecureChatApplicationFullstack.git"
              target="_blank"
              className="btn btn-sm btn-outline-secondary"
            >
              View on GitHub
            </a>
          </div>
        </div>
     <div className="text-center">
  <h3 className="mb-4">Contact</h3>

   <div className="d-flex justify-content-center align-items-center mb-3">
    <img
      src={phoneIcon}
      alt="Phone"
      className="me-2 contact-icon"
    />
    <span>+91 8870822514</span>
  </div>
    <div className="d-flex justify-content-center align-items-center mb-3">
    <img
      src={githubLogo}
      alt="GitHub"
      className="me-2 contact-icon"
    />
    <a
      href="https://github.com/Rahulkumar-06"
      target="_blank"
      rel="noopener noreferrer"
      className="text-decoration-none"
    >
      github.com/Rahulkumar-06
    </a>
  </div>
  <div className="d-flex justify-content-center align-items-center mb-3">
    <img
      src={gmailLogo}
      alt="Email"
      className="me-2 contact-icon"
    />
    <a href="mailto:rahulkumarc679@gmail.com" className="text-decoration-none">
      rahulkumarc679@gmail.com
    </a>
  </div>

  <div className="d-flex justify-content-center align-items-center mb-3">
    <img
      src={linkedinLogo}
      alt="LinkedIn"
      className="me-2 contact-icon"
    />
    <a
      href="http://www.linkedin.com/in/rahulkumarchellamuthu"
      target="_blank"
      rel="noopener noreferrer"
      className="text-decoration-none"
    >
      linkedin.com/rahulkumarchellamuthu
    </a>
  </div>


</div>
    </>
  );
}

export default Home;