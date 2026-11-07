
import { useEffect, useState } from "react";
import "./App.css";
import emailjs from "@emailjs/browser";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaCode
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiPostgresql
} from "react-icons/si";




function App() {
  const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "MERN Stack Developer"
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
const [visitorName, setVisitorName] = useState("");
const [visitorEmail, setVisitorEmail] = useState("");
const [visitorMessage, setVisitorMessage] = useState("");


  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleMessageSubmit = (e) => {
  e.preventDefault();

  const message = `Name: ${visitorName}
Email: ${visitorEmail}
Message: ${visitorMessage}`;

  const whatsappNumber = "919790451124";

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");

  const emailSubject = encodeURIComponent("Portfolio Contact Message");
  const emailBody = encodeURIComponent(message);

  window.location.href = `mailto:priyan.mern@gmail.com?subject=${emailSubject}&body=${emailBody}`;

  setSuccessMessage("Thank you! Your inquiry has been sent successfully.");
e.target.reset();
  setVisitorName("");
  setVisitorEmail("");
  setVisitorMessage("");
};


const handleContactSubmit = async (e) => {
  e.preventDefault();

  const companyName = e.target.company_name.value;
  const recruiterEmail = e.target.email.value;
  const description = e.target.description.value;

  const templateParams = {
    company_name: companyName,
    recruiter_email: recruiterEmail,
    description: description,
    inquiry_date: new Date().toLocaleString()
  };

  try {
  // 1. Send inquiry to your email
  await emailjs.send(
    "service_qmty5t9",
    "template_735i1jt",
    templateParams,
    "9xNsww1UN9eogzxBJ"
  );

  // 2. Send automatic reply to recruiter
  await emailjs.send(
    "service_qmty5t9",
    "template_1l1er11",
    templateParams,
    "9xNsww1UN9eogzxBJ"
  );

  

  setSuccessMessage("Thank you! Your inquiry has been sent successfully.");
  e.target.reset();

} catch (error) {
  console.error("EmailJS Error:", error);
  alert("Message sending failed. Please try again.");
}
};
  
const downloadContact = () => {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Deepapriyan R.J.
TEL;TYPE=CELL:+919790451124
EMAIL:priyan.mern@gmail.com
URL:https://www.linkedin.com/in/deepapriyan20
END:VCARD`;

  const blob = new Blob([vcard], {
    type: "text/vcard;charset=utf-8"
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "Deepapriyan-Contact.vcf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => URL.revokeObjectURL(url), 1000);
};


  return (
    <div className="portfolio">

 

      <nav className="navbar">
        <h2 className="logo">Priyan<span>.</span></h2>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button
  className="hire-btn"
  onClick={() => {
    setSuccessMessage("");
    setIsContactOpen(true);
  }}
>
  Hire Me
</button>
      </nav>

      
{isContactOpen && (
  <div className="contact-modal">
    <div className="contact-box">

      <h2>Hire Me</h2>

      {successMessage && (
  <p className="success-message">{successMessage}</p>
)}

      {!successMessage && (
  <p>
    Please share your details. I'll get back to you soon.
  </p>
)}

      {!successMessage && (
  <form onSubmit={handleContactSubmit}>

        <input
          type="text"
          name="company_name"
          placeholder="Company Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Recruiter Email"
          required
        />

        <textarea
          name="description"
          placeholder="Tell me about the job opportunity..."
          rows="5"
          required
        />

        <button type="submit">
          Send Inquiry
        </button>

      </form>

      )}

      <button
        className="close-btn"
        onClick={() => setIsContactOpen(false)}
      >
        Cancel
      </button>

    </div>
  </div>
)}


      
<section id="home" className="hero">

  <div className="hero-glow"></div>

  <div className="hero-content">

    <span className="availability">
      <span className="status-dot"></span>
      Available for Entry-Level Developer Roles
    </span>

    <h1>
      Hi, I'm <span>Deepapriyan</span>
    </h1>

    <h2 className="typing-text">
      {roles[roleIndex]}
      <span className="cursor">|</span>
    </h2>

    <p>
  I'm an aspiring Full Stack Developer skilled in React,
  JavaScript, Node.js, Express.js, and MongoDB.
  I build responsive and user-friendly web applications
  with a focus on clean design, functionality, and
  continuous learning. I'm eager to contribute my skills
  and grow with a professional development team.
</p>

    <div className="hero-buttons">
      <a href="#projects" className="primary-btn">
        Explore My Work ↗
      </a>

      <button
  className="secondary-btn"
  onClick={downloadContact}
>
  Let's Talk
</button>
    </div>

  </div>

  <div className="scroll-text">
    SCROLL TO EXPLORE ↓
  </div>

</section>








      
      {/* ABOUT SECTION */}

      <section id="about" className="about-section">

        <div className="section-heading">
          <span>GET TO KNOW ME</span>
          <h2>About <span>Me</span></h2>
        </div>

        <div className="about-container">

          <div className="about-left">
            <div className="about-card">
              <div className="about-icon">👨‍💻</div>
              <h3>My Journey</h3>
              <p>
                I'm Deepapriyan, a passionate Full Stack Developer
                with a background in Commerce. My interest
                in technology inspired me to learn web
                development and build real-world applications.
              </p>
            </div>
          </div>

          <div className="about-right">
            <h3>Developing Solutions Through Technology</h3>

            <p>
  I specialize in developing responsive and interactive
  web applications using modern frontend and backend
  technologies, including React, JavaScript, Node.js,
  Express.js, MongoDB and postgres.
</p>

<p>
  My focus is on writing maintainable code, creating
  user-friendly interfaces, and continuously improving
  my technical knowledge through hands-on projects.
</p>

            <div className="about-details">

              <div className="detail-box">
                <h4>06+</h4>
                <span>Projects</span>
              </div>

              <div className="detail-box">
                <h4>MERN</h4>
                <span>Tech Stack</span>
              </div>

              <div className="detail-box">
                <h4>100%</h4>
                <span>Passion to Learn</span>
              </div>

            </div>
          </div>

        </div>

      </section>

      
      {/* SKILLS SECTION */}

      
{/* SKILLS SECTION */}

<section id="skills" className="skills-section">

  <div className="orbit-heading">
    <span></span>
    <h2>SKILLS</h2>
    <span></span>
  </div>

  <div className="orbit-container">

    <div className="orbit-ring outer-ring"></div>
    <div className="orbit-ring inner-ring"></div>

    <div className="orbit-center">
      <FaCode />
    </div>

    <div className="orbit outer-orbit">

      <div className="orbit-item item-1">
        <div className="orbit-logo html-logo"><FaHtml5 /></div>
      </div>

      <div className="orbit-item item-2">
        <div className="orbit-logo react-logo"><FaReact /></div>
      </div>

      <div className="orbit-item item-3">
        <div className="orbit-logo mongo-logo"><SiMongodb /></div>
      </div>

      <div className="orbit-item item-4">
        <div className="orbit-logo node-logo"><FaNodeJs /></div>
      </div>

    </div>

    <div className="orbit inner-orbit">

      <div className="orbit-item item-5">
        <div className="orbit-logo css-logo"><FaCss3Alt /></div>
      </div>

      <div className="orbit-item item-6">
        <div className="orbit-logo js-logo"><FaJs /></div>
      </div>

      <div className="orbit-item item-7">
        <div className="orbit-logo express-logo"><SiExpress /></div>
      </div>

      <div className="orbit-item item-8">
        <div className="orbit-logo postgres-logo"><SiPostgresql /></div>
      </div>

    </div>

  </div>

</section>


{/* PROJECTS SECTION */}


{/* PROJECTS SECTION */}
<section id="projects" className="projects-section">
  <div className="section-heading">
    <span>MY RECENT WORK</span>
    <h2>My <span>Projects</span></h2>
    <p>
  A selection of projects showcasing my technical skills,
  problem-solving approach, and practical development experience.
</p>
  </div>

  <div className="projects-grid">

    {/* 01 - JobConnect */}
    <div className="project-card">
      <div className="project-top">
        <span>01</span>
        <span className="project-category">FULL STACK</span>
      </div>
      <h3>JobConnect</h3>
      <p>
  A full-stack job portal featuring secure authentication,
  role-based access, job management, resume uploads,
  application tracking, recruiter dashboards, notifications,
  referral management, and subscription payments.
</p>
      <div className="project-tech">
        <span>React</span><span>Node.js</span>
        <span>Express</span><span>MongoDB</span>
      </div>
      <div className="project-buttons">
        <a href="https://github.com/deepapriyan0005-del/job-seeker-and-recruiter" target="_blank" rel="noreferrer">GitHub Code ↗</a>
        <a href="#" target="_blank" rel="noreferrer">Live Demo ↗</a>
      </div>
    </div>

    {/* 02 - Reg-Log */}
    <div className="project-card">
      <div className="project-top">
        <span>02</span>
        <span className="project-category">AUTHENTICATION</span>
      </div>
      <h3>Reg-Log</h3>
      <p>
  A user authentication application with registration
  and login functionality, form validation, and a
  responsive interface designed for a smooth user experience.
</p>
      <div className="project-tech">
        <span>React</span><span>JavaScript</span><span>CSS</span>
      </div>
      <div className="project-buttons">
        <a href="https://github.com/deepapriyan0005-del/reg-log" target="_blank" rel="noreferrer">GitHub Code ↗</a>
        <a
  href="https://reg-log-two.vercel.app"
  target="_blank"
  rel="noreferrer"
>
  Live Demo ↗
</a>
      </div>
    </div>

    {/* 03 - Quiz App */}
    <div className="project-card">
      <div className="project-top">
        <span>03</span>
        <span className="project-category">REACT APP</span>
      </div>
      <h3>Quiz App</h3>
      <p>
  An interactive quiz application that allows users
  to answer multiple-choice questions, track their
  scores, and view results through a simple and
  user-friendly interface.
</p>
      <div className="project-tech">
        <span>React</span><span>JavaScript</span><span>CSS</span>
      </div>
      <div className="project-buttons">
        <a href="https://github.com/deepapriyan0005-del/quiz-app" target="_blank" rel="noreferrer">GitHub Code ↗</a>
        <a
  href="https://quiz-app-y7oz.vercel.app/"
  target="_blank"
  rel="noreferrer"
>
  Live Demo ↗
</a>
      </div>
    </div>

    {/* 04 - E-Commerce */}
    <div className="project-card">
      <div className="project-top">
        <span>04</span>
        <span className="project-category">WEB DESIGN</span>
      </div>
      <h3>E-Commerce</h3>
      <p>
  A responsive e-commerce website interface featuring
  a structured product layout, modern styling, and
  user-friendly navigation, built using HTML5 and CSS3.
</p>
      <div className="project-tech">
        <span>HTML5</span><span>CSS3</span>
      </div>
      <div className="project-buttons">
        <a href="https://github.com/deepapriyan0005-del/e-commerce" target="_blank" rel="noreferrer">GitHub Code ↗</a>
        <a href="https://e-commerce-ten-mocha-36.vercel.app"
   target="_blank"
   rel="noreferrer">
   Live Demo ↗
</a>
      </div>
    </div>

    {/* 05 - AI Chat Assistant */}
    <div className="project-card">
      <div className="project-top">
        <span>05</span>
        <span className="project-category">AI PROJECT</span>
      </div>
      <h3>AI Chat Assistant</h3>
      <p>
  A web-based AI chat assistant interface designed
  for interactive conversations, featuring a clean
  chat layout and responsive user experience.
</p>
      <div className="project-tech">
        <span>HTML</span><span>Tailwind CSS</span><span>JavaScript</span>
      </div>
      <div className="project-buttons">
        <a href="https://github.com/deepapriyan0005-del/chatbot" target="_blank" rel="noreferrer">GitHub Code ↗</a>
        <a href="https://chatbot-dusky-one-54.vercel.app"
   target="_blank"
   rel="noreferrer">
   Live Demo ↗
</a>
      </div>
    </div>

    {/* 06 - HTML CSS Project */}
    <div className="project-card">
      <div className="project-top">
        <span>06</span>
        <span className="project-category">HTML CSS</span>
      </div>
      <h3>HTML CSS Project</h3>
      <p>
  A creative web design project demonstrating
  responsive layouts, modern CSS styling, visual
  effects, and fundamental frontend development skills.
</p>
      <div className="project-tech">
        <span>HTML5</span><span>CSS3</span>
      </div>
      <div className="project-buttons">
        <a href="https://github.com/deepapriyan0005-del/html-css-project" target="_blank" rel="noreferrer">GitHub Code ↗</a>
        <a href="https://html-css-project-kappa-blond.vercel.app"
   target="_blank"
   rel="noreferrer">
   Live Demo ↗
</a>
      </div>
    </div>

  </div>
</section>


{/* CONTACT SECTION */}

<section id="contact" className="contact-section">

  <div className="section-heading">
    <span>GET IN TOUCH</span>
    <h2>Let's <span>Connect</span></h2>
    <p>
  I'm open to entry-level opportunities, internships,
  and collaborations. Feel free to reach out to discuss
  how I can contribute to your team.
</p>
  </div>

  <div className="contact-cards">

    <div className="contact-card">
      <div className="contact-card-icon">☎</div>
      <h3>Phone</h3>
      <a href="tel:+919790451124">+91 9790451124</a>
    </div>

    <div className="contact-card">
      <div className="contact-card-icon">✉</div>
      <h3>Email</h3>
      <a href="mailto:priyan.mern@gmail.com">
        priyan.mern@gmail.com
      </a>
    </div>

    <div className="contact-card">
      <div className="contact-card-icon">☏</div>
      <h3>WhatsApp</h3>
      <a
        href="https://wa.me/919790451124"
        target="_blank"
        rel="noreferrer"
      >
        Chat with Me ↗
      </a>
    </div>

  </div>

  <button
  className="contact-section-btn"
  onClick={() => {
    const message = "Hi, I would like to contact you regarding an opportunity.";
    const whatsappURL = `https://wa.me/919790451124?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  }}
>
  Send Me a Message ↗
</button>

</section>




    </div>
  );
}

export default App;
