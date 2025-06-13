import React from 'react'

const profileInfo = [
  { label: "Name", value: "Temidayo Emmanuel Olagunju" },
  { label: "Profile", value: "Software Engineering, Python Developer, Backend Developer, Machine Learning Engineer" },
  { label: "Email", value: "emmanueld1topthings@gmail.com" },
  { label: "Location", value: "Sagamu, Ogun State, Nigeria" },
  { label: "Phone Number", value: "+234 703 345 4994" }
];

const skills = [
  { name: "Python", percent: 82 },
  { name: "JavaScript", percent: 78 },
  { name: "TypeScript", percent: 71 },
  { name: "Java", percent: 62 },
  { name: "C++", percent: 58 }
];

const summaryPoints = [
  "I am a passionate individual dedicated to providing the best service possible. Our mission is to deliver quality and excellence in everything we do.",
  "With years of experience in the TechBase, I have pride on my commitment to satisfaction and my ability to adapt to the ever-changing tech community.",
  "I am skilled in building robust backend systems, scalable APIs, cloud-native solutions, and integrating machine learning capabilities.",
  "Proficient in Python, JavaScript, TypeScript, React, Django, Flask, Express, Nodejs, MongoDB, PostgreSQL, and FastAPI, with strong DevOps experience using Docker, GitHub Actions, and CI/CD pipelines.",
  "Passionate about automation, API security, cloud optimization, and solving real-world problems with efficient, well-architected backend and machine learning systems."
];

function AboutUs() {
  return (
    <section id="about" className="section active">
      <div className="container">
        <h2 className="section-title">ABOUT</h2>
        <div className="section-divider"></div>
        <div className="aboutus-container">
          <div className="aboutus-left">
            <div className="profile-flex">
                <div className="profile-img-container">
                    <img src="https://res.cloudinary.com/dat6vptxu/image/upload/v1749734614/gold_iljryj.png" alt="Temidayo Emmanuel Olagunju" className="profile-big-img" />
                </div>
              <div className="profile-details">
                <h3>Profile</h3>
                <div className="about-underline"></div>
                {profileInfo.map((item, idx) => (
                  <p key={idx}><span>{item.label}:</span> {item.value}</p>
                ))}
              </div>
            </div>
            <div className="skills">
              <h3>Programming Skill</h3>
              <div className="about-underline"></div>
              <ul>
                {skills.map((skill, idx) => (
                  <li key={idx}>
                    <span>{skill.name}</span>
                    <div className="progress-bar">
                      <div style={{ width: `${skill.percent}%` }}></div>
                    </div>
                    <span className="skill-percentage">{skill.percent}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="aboutus-right">
            <h3>Summary</h3>
            <div className="about-underline"></div>
            <div className="section-summary">
              <ul className="aboutme-list">
                {summaryPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs