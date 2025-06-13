import React from 'react'

 const portfolioItems = [
    {
      title: "BridgeEdge Real Estate Website",
      image: "https://res.cloudinary.com/dat6vptxu/image/upload/v1749734828/bridgeedge_strdwi.png",
      description: "A modern real estate website with property listings and search functionality, built with React and Express.js. Includes features like user authentication, property management, and a responsive design.",
    },
    {
      title: "VicsMall E-Commerce Platform",
      image: "https://res.cloudinary.com/dat6vptxu/image/upload/v1749734834/VicsmallFE_uqxyjy.png",
      description: "An e-commerce platform with product listings, shopping cart, and payment integration. Built with React for the frontend and DjangoRestFullAPI for the backend.",
    },
    {
      title: "VicsMall E-Commerce Backend",
      image: "https://res.cloudinary.com/dat6vptxu/image/upload/v1749734833/vicsmall_by099t.png",
      description: "The backend for VicsMall, providing RESTful APIs for product management, user authentication, order processing and payment transactions. Built with Django Rest Framework.",
    },
    {
      title: "Full Stack CBT Test Platform",
      image: "https://res.cloudinary.com/dat6vptxu/image/upload/v1749734833/cbt_test_u001lx.png",
      description: "A full-stack Computer-Based Test (CBT) platform that allows users to take tests online. Built with Flask Framework, it includes features like user registration, test management, and result tracking.",
    },
    {
      title: "SMS Gateway Service",
      image: "https://res.cloudinary.com/dat6vptxu/image/upload/v1749734832/sms_dzkclo.png",
      description: "A FullStack SMS gateway service that allows users to send SMS messages. Built with bootstrap and php for sms sending functionality, integrates with Bulk SMS API.",
    },
    {
      title: "Blog Website",
      image: "https://res.cloudinary.com/dat6vptxu/image/upload/v1749734834/personalblog_ctlaz9.png",
      description: "A full-stack blog platform inspired by Twitter workflow, featuring user authentication, post creation, editing of post, and responsive UI. this platform was built with Django frame work and React was used for the frontend.",
    }
    
  // Add more items as needed
];

function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="section-title">PORTFOLIO</h2>
        <div className="section-divider"></div>
        <div className="services-grid">
          {portfolioItems.map((item, idx) => (
            <div className="portfolio-card" key={idx}>
              <img src={item.image} alt={item.title} className="portfolio-img" />
              <div className="portfolio-card-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.link && (
                  <a href={item.link} className="portfolio-link" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;