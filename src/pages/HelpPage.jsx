export default function HelpPage() {
  return (
    <div className="page-container fade-in">
      <h2><i className="fas fa-question-circle"></i> Help & Support</h2>

      <div className="card">
        <h3>Welcome to Eshama Matrimony</h3>
        <p>We're here to help you find your perfect life partner. Here's everything you need to know:</p>

        <div className="form-section">
          <h4><i className="fas fa-sign-in-alt text-primary"></i> Getting Started</h4>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Create your profile with accurate information</li>
            <li>Verify your mobile number with OTP</li>
            <li>Complete your detailed profile information</li>
            <li>Upload a clear profile photo</li>
          </ul>
        </div>

        <div className="form-section">
          <h4><i className="fas fa-search text-secondary"></i> Finding Matches</h4>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Browse through verified profiles</li>
            <li>Use filters to find compatible matches</li>
            <li>Send connect requests to potential partners</li>
            <li>Respond to received interest requests</li>
          </ul>
        </div>

        <div className="form-section">
          <h4><i className="fas fa-shield-alt text-success"></i> Safety & Privacy</h4>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>All profiles are manually verified</li>
            <li>Your personal information is secure</li>
            <li>Report suspicious profiles immediately</li>
            <li>Never share sensitive information with strangers</li>
          </ul>
        </div>

        <div className="form-section">
          <h4><i className="fas fa-envelope text-warning"></i> Contact Us</h4>
          <p>For any questions or support, reach out to us:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div><i className="fas fa-envelope"></i> Email: support@eshamatrimony.com</div>
            <div><i className="fas fa-phone"></i> Phone: +91-1800-XXX-XXXX</div>
            <div><i className="fas fa-clock"></i> Support Hours: 9 AM - 9 PM IST</div>
          </div>
        </div>
      </div>
    </div>
  );
}