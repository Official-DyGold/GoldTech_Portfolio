import React from 'react';

const contactInfo = [
  {
    iconClass: "fa fa-map-marker",
    iconCircle: 'address-circle',
    label: "Address:",
    value: "Sagamu, Ogun State, Nigeria"
  },
  {
    iconClass: "fa fa-envelope",
    iconCircle: 'email-circle',
    label: "Email: @gmail.com",
    value: "emmanueld1topthings"
  },
  {
    iconClass: "fa fa-phone",
    iconCircle: 'phone-circle',
    label: "Phone:",
    value: "+234 703 345 4994"
  },
];

function ContactUS() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">CONTACT ME</h2>
        <div className="section-divider"></div>
        <div className="contactus-grid">
          <div className="contactus-info">
            <h3>Get in Touch</h3>
            <ul className="contactus-row">
              {contactInfo.map((item, idx) => (
                <li className="contact-address" key={idx}>
                  <span className={`contact-icon-circle ${item.iconCircle}`}>
                    <i className={item.iconClass}></i>
                  </span>
                  <div>
                    <span className="contact-label">{item.label}</span>
                    <div className="contact-address-detail">{item.value}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="contactus-form">
            <h3>Send a Message</h3>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-default">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUS;