import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OTPPage() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const verifyOTP = () => {
    if (otp === "1234") {
      navigate("/matches");
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="page-container fade-in">
      <h2><i className="fas fa-key"></i> OTP Verification</h2>

      <div className="card">
        <p className="text-center mb-3" style={{ color: 'var(--text-color)' }}>
          <i className="fas fa-envelope"></i> OTP sent to your registered mobile number
        </p>

        <div className="form-group">
          <label>Enter OTP:</label>
          <input
            type="text"
            placeholder="Enter 4-digit OTP"
            value={otp}
            onChange={(e) => {
              setOtp(e.target.value);
              if (error) setError("");
            }}
            className={error ? 'error' : ''}
            maxLength="4"
            style={{ textAlign: 'center', fontSize: '1.2rem', letterSpacing: '0.5rem' }}
          />
          {error && <div className="error-message">{error}</div>}
        </div>

        <button onClick={verifyOTP} className="btn btn-success" style={{ width: '100%', fontSize: '1.1rem' }}>
          <i className="fas fa-check-circle"></i> Verify OTP
        </button>

        <div className="text-center mt-3">
          <small style={{ color: 'var(--text-color)', opacity: 0.7 }}>
            <i className="fas fa-info-circle"></i> Demo OTP: 1234
          </small>
        </div>

        <div className="text-center mt-2">
          <button className="btn btn-outline" style={{ fontSize: '0.9rem' }}>
            <i className="fas fa-redo"></i> Resend OTP
          </button>
        </div>
      </div>
    </div>
  );
}

