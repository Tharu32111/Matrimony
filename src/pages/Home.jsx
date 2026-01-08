import { Link } from "react-router-dom";
import Chatbot from "../components/Chatbot/chatbot";
import { useAuth } from "../context/AuthContext";
import './Home.css';

export default function Home() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <div className="home-container">
      {/* Hero Section */}
      
      <section className="hero-section"
        
  style={{
    minHeight: "100vh",
    backgroundImage: "url('/download.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
>

        <div className="hero-content">
          {/* Floating Login Card */}
          <div className="login-card">
            <h2>Login</h2>
            <form className="login-form">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter Mobile No"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-input"
                />
              </div>
              <div className="forgot-password">
                <Link to="/forgot-password" className="forgot-link">Forgot Password?</Link>
              </div>
              <button type="submit" className="login-btn">Login</button>
              <div className="terms-text">
                You agree to our <Link to="/terms" className="terms-link">Terms & Conditions</Link>
              </div>
              <div className="register-text">
                Don't have an account? <Link to="/register" className="register-link">Register now</Link>
              </div>
            </form>
          </div>
        </div>

        {/* Floating Action Icons */}
        <div className="floating-icons">
          <a href="https://wa.me/919876543210" className="floating-icon whatsapp" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="tel:+919876543210" className="floating-icon call">
            <i className="fas fa-phone"></i>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Why Choose Eshama Matrimony?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Secure & Safe</h3>
              <p>Your privacy and security are our top priorities</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-id-card"></i>
              </div>
              <h3>Aadhar Verified</h3>
              <p>All profiles are verified with Aadhar for authenticity</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Verified Profiles</h3>
              <p>Thousands of verified profiles to choose from</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Perfect Matches</h3>
              <p>Advanced algorithm finds your perfect life partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Authenticated User Navigation */}
      {isAuthenticated && (
        <section className="user-navigation">
          <div className="container">
            <h3>Welcome back, {user?.name || 'User'}!</h3>
            <div className="nav-buttons">
              <Link to="/matches" className="nav-btn">
                <i className="fas fa-heart"></i> My Matches
              </Link>
              <Link to="/profiles" className="nav-btn">
                <i className="fas fa-users"></i> Browse Profiles
              </Link>
              <Link to="/create-profile" className="nav-btn">
                <i className="fas fa-user-plus"></i> Update Profile
              </Link>
              <button onClick={logout} className="nav-btn logout">
                <i className="fas fa-sign-out-alt"></i> Logout
              </button>
            </div>
          </div>
        </section>
      )}

      <Chatbot />
    </div>
  );
}
