import React from 'react'

const serviceItems = [
  {
    title: "Custom Software Development",
    icon: "🔧",
    image: "https://res.cloudinary.com/dat6vptxu/image/upload/v1749734677/CustomSoftware_ier0or.png",
    description: "End-to-end software solutions tailored to business needs — including web apps, mobile apps, and desktop tools."
  },
  {
    title: "Full-Stack Development",
    icon: "💻",
    image: "https://res.cloudinary.com/dat6vptxu/image/upload/v1749734681/FullStack_ccfvan.png",
    description: "React, Django, Flask, Node.js, Express, and GoLang — frontend to backend, I deliver scalable, secure applications."
  },
  {
    title: "API & Backend Services",
    icon: "🛠️",
    image: "https://res.cloudinary.com/dat6vptxu/image/upload/v1749734692/Backend_gc81tc.png",
    description: "Designing and integrating REST/GraphQL APIs, securing endpoints, and implementing business logic with scalable architecture."
  },
  {
    title: "Authentication & Security",
    icon: "🔐",
    image: "https://res.cloudinary.com/dat6vptxu/image/upload/v1749734681/AuthSecurity_z58nfq.png",
    description: "Implement secure user auth systems, session handling, and role-based access control."
  },
  {
    title: "Database Management",
    icon: "⚙️",
    image: "https://res.cloudinary.com/dat6vptxu/image/upload/v1749811910/databasde_2_gkhzua.png",
    description: "Schema design, query optimization, and data modeling using MySQL, PostgreSQL, or MongoDB for efficient data access."
  },
  {
    title: "Cloud & Deployment",
    icon: "☁️",
    image: "https://res.cloudinary.com/dat6vptxu/image/upload/v1749811496/cloud_okfnqi.png",
    description: "Deploying applications with CI/CD, Docker, and cloud services like AWS, Vercel, and DigitalOcean for production-ready systems."
  }
];

function Service() {
  return (
      <section id="services" className="section">
        <div className="container">
          <h2 className="section-title">MY SERVICES</h2>
          <div className="section-divider"></div>
          <div className="services-grid">
            {serviceItems.map((item, idx) => (
              <div className="service-card" key={idx}>
                <img src={item.image} alt={item.title + " Icon"} />
                <div className="service-card-overlay">
                  <h3>{item.icon} {item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
export default Service