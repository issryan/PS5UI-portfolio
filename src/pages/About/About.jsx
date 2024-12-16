import './About.scss';

function About() {
  const skills = [
    "React", "JavaScript", "Python", "Node.js", "MongoDB",
    "SQL", "HTML", "CSS", "Express.js", "AWS", "Git", "Figma"
  ];

  return (
    <div className="about-container">

      {/* Intro */}
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi! I'm <strong>Ryan</strong> – a software engineer who loves turning fun and creative ideas into reality.
            I specialize in building modern web applications with <strong>React</strong> and <strong>Python</strong>,
            and I’m currently looking for an <strong>internship</strong> or <strong>entry-level role</strong> to further grow my skills.
          </p>
          <p>
            Between work and school, I enjoy exploring photography, biking through the city, finding hidden food spots,
            or playing video games in my spare time. You can also explore my photos in the <strong>Gallery</strong> section!
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="about-skills">
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="about-links">
        <button className="resume-btn">
          <a href="/resume.pdf" download="Ryan_Arafeh_Resume">Download Resume</a>
        </button>
        <button className="github-btn">
          <a href="https://github.com/issryan" target="_blank" rel="noopener noreferrer">GitHub</a>
        </button>
        <button className="linkedin-btn">
          <a href="https://www.linkedin.com/in/ryanarafeh" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </button>
      </div>
    </div>
  );
}

export default About;