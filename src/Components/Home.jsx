import React from "react";
import "./Home.css"; 

function Home() {
  const techStack = [
    { name: "Java", logo: "java_logo.png" },
    { name: "HTML", logo: "html_logo.png" },
    { name: "CSS", logo: "css_logo.png" },
    { name: "JavaScript", logo: "javascript_logo.png" },
    { name: "Spring Boot", logo: "spring_boot_logo.svg" },
    { name: "Spring Security", logo: "spring-security_logo.svg" },
    { name: "Spring Data JPA", logo: "spring-data_logo.svg" },
    { name: "ReactJS", logo: "react.svg" },
    { name: "MySQL", logo: "mysql_logo.png" },
    { name: "PostgreSQL", logo: "postgresql-logo.png" },
    { name: "MongoDB", logo: "mongo-db_logo.png" },
    { name: "AWS", logo: "aws_logo.png" },
    { name: "Git", logo: "gitHub_logo.png" },
    { name: "Docker", logo: "docker_logo.png" },
    { name: "BootStrap", logo : "bootstrap_logo.png"},
    { name: "Postman", logo: "postman-Logo.png" },
    { name: "IntelliJ IDEA", logo: "intellij_logo.png" },
    { name: "VS Code", logo: "visual-studio_logo.png" }
  ];

  return (
   
    <>
      <div className="text-center mb-5" >
        <div className="imgblock">
        <img
          src="src/assets/croppedphotos.jpg"
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
        <div >
       <p className="about-text" style={{ textIndent: "60px"}}>
          I’m a passionate and results-driven Full Stack Java Developer with a strong
  foundation in backend development using Java and Spring Boot, complemented by
  modern frontend skills in ReactJS, HTML, CSS, and JavaScript. I enjoy building
  secure, scalable, and user-friendly web applications by combining clean code
  practices with creative problem-solving.
  <br></br>
  <br></br>
  I’m skilled in implementing authentication and authorization using Spring
  Security, managing data persistence with Spring Data JPA, and integrating
  relational (MySQL, PostgreSQL) and non-relational (MongoDB) databases. On the
  frontend, I focus on crafting responsive and visually appealing interfaces
  using Bootstrap and reusable UI components.
  <br></br>
  <br></br>
  With experience in AWS cloud deployment — including ECS (Elastic Container
  Service), ECR (Elastic Container Registry), and IAM (Identity and Access
  Management) — I can deploy, manage, and secure applications in production
  environments. I also have hands-on experience with Docker containerization and
  version control through Git, ensuring that my projects are robust,
  maintainable, and production-ready.
  <br></br>
  <br></br>
  Proficient with developer tools such as Postman, IntelliJ IDEA, and VS Code,
  I’m always eager to learn new technologies, contribute to challenging projects,
  and collaborate with like-minded professionals to turn ideas into reality.
</p>
</div>

      </div>


      <div className="mb-5">
        <h3 className="mb-4 text-center">Tech Stack</h3>
        <div className="row g-4 justify-content-center">
          {techStack.map((tech, index) => (
            <div key={index} className="col-4 col-sm-3 col-md-2 text-center">
              <img
                src={`src/assets/${tech.logo}`}
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
            <h5 className="card-title">Thymeleaf + Spring Security App</h5>
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
          <div>
                                        
          </div>
     <div className="text-center">
  <h3 className="mb-4">Contact</h3>

   <div className="d-flex justify-content-center align-items-center mb-3">
    <img
      src="src/assets/phone-1.png"
      alt="Phone"
      className="me-2 contact-icon"
    />
    <span>8870822514</span>
  </div>
    <div className="d-flex justify-content-center align-items-center mb-3">
    <img
      src="src/assets/gitHub_logo.png"
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
      src="src/assets/gmail_logo.png"
      alt="Email"
      className="me-2 contact-icon"
    />
    <a href="mailto:rahulkumarc679@gmail.com" className="text-decoration-none">
      rahulkumarc679@gmail.com
    </a>
  </div>

  <div className="d-flex justify-content-center align-items-center mb-3">
    <img
      src="src/assets/linkedin-logo.png"
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
