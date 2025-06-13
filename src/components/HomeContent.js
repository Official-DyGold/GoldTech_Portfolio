import React from 'react'

const socialLinks = [
  {
    href: "https://www.facebook.com/share/12MVrcGEHfy/",
    iconClass: "fa fa-facebook fa-2x fa-fw fb-blue",
    label: "Facebook"
  },
  {
    href: "https://github.com/Official-DyGold",
    iconClass: "fa fa-github fa-2x fa-fw github-black",
    label: "Github"
  },
  {
    href: "https://www.linkedin.com/in/gold-tech",
    iconClass: "fa fa-linkedin fa-2x fa-fw in-blue",
    label: "Linkedin"
  },
  {
    href: "https://wa.me/2347033454994",
    iconClass: "fa fa-whatsapp fa-2x fa-fw whatsapp-green",
    label: "WhatsApp"
  }
];

function HomeContent() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Welcome to GoldTech</h1>
        <p>Experience the perfect blend of creativity and technology with our innovative solutions.</p>
        <ul className="list-inline">
          {socialLinks.map((link, idx) => (
            <li key={idx}>
              <a href={link.href} id='social' className="btn btn-default" target="_blank" rel="noopener noreferrer">
                <i className={link.iconClass}></i>
                <span className="valign">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>        
        <button className="cta-button" onClick={() => window.open("https://drive.google.com/file/d/1CRdkdp1hOG8n3EKRvQDPJ5r0AeXljh_A/view?usp=drivesdk")}>My CV</button>
      </div>
    </section>
  )
}

export default HomeContent