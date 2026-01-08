import React from 'react';

const Contact = () => {
  return (
    <div className="page-container fade-in">
      <h1>Contact Us</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        <div className="card">
          <h3>Get In Touch</h3>
          <div style={{ marginBottom: '1rem' }}>
            <strong>Phone:</strong> +91 98765 43210
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <strong>Email:</strong> info@eshamatrimony.com
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <strong>Address:</strong><br />
            123 Matrimony Street<br />
            Marriage City, India - 110001
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <strong>Business Hours:</strong><br />
            Monday - Saturday: 9:00 AM - 9:00 PM<br />
            Sunday: 10:00 AM - 6:00 PM
          </div>
        </div>

        <div className="card">
          <h3>Send us a Message</h3>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" className="form-control" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" className="form-control" />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Your Phone" className="form-control" />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" className="form-control"></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;