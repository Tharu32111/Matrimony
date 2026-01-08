import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function AadharVerify() {
  const [aadharLastFour, setAadharLastFour] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { updateProfile } = useAuth();

  const sendOTP = () => {
    if (aadharLastFour.length !== 4) {
      setErrors({ aadharLastFour: 'Enter last 4 digits of your Aadhar number' });
      return;
    }
    if (mobile.length !== 10) {
      setErrors({ mobile: 'Enter valid 10-digit mobile number' });
      return;
    }
    setErrors({});
    setShowOTP(true);
    alert("OTP sent to your registered mobile number");
  };

  const verifyOTP = () => {
    if (otp.length !== 6) {
      setErrors({ otp: 'Enter valid 6-digit OTP' });
      return;
    }

    // Demo OTP verification
    if (otp === "123456") {
      updateProfile({ 
        aadharVerified: true, 
        aadharLastFour: aadharLastFour,
        mobileVerified: true 
      });
      navigate("/create-profile");
    } else {
      setErrors({ otp: 'Invalid OTP' });
    }
  };

  return (
    <div className="page-container fade-in">
      <h2><i className="fas fa-id-card"></i> Aadhar Verification</h2>

      <div className="card">
        <p className="text-center mb-3" style={{ color: 'var(--text-color)' }}>
          Verify your Aadhar number using OTP sent to your registered mobile
        </p>

        <div className="form-group">
          <label><i className="fas fa-id-card"></i> Last 4 digits of Aadhar:</label>
          <input
            type="text"
            placeholder="Enter last 4 digits"
            value={aadharLastFour}
            onChange={(e) => {
              setAadharLastFour(e.target.value.replace(/\D/g, '')); // Only allow digits
              if (errors.aadharLastFour) setErrors({ ...errors, aadharLastFour: '' });
            }}
            className={errors.aadharLastFour ? 'error' : ''}
            maxLength="4"
          />
          {errors.aadharLastFour && <div className="error-message">{errors.aadharLastFour}</div>}
        </div>

        <div className="form-group">
          <label><i className="fas fa-mobile-alt"></i> Registered Mobile Number:</label>
          <input
            type="text"
            placeholder="Enter 10-digit mobile number"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value.replace(/\D/g, '')); // Only allow digits
              if (errors.mobile) setErrors({ ...errors, mobile: '' });
            }}
            className={errors.mobile ? 'error' : ''}
            maxLength="10"
          />
          {errors.mobile && <div className="error-message">{errors.mobile}</div>}
        </div>

        <button onClick={sendOTP} className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem' }}>
          <i className="fas fa-paper-plane"></i> Send OTP
        </button>

        {showOTP && (
          <>
            <div className="form-section">
              <h4><i className="fas fa-key"></i> Enter OTP</h4>
              <div className="form-group">
                <label>OTP sent to your mobile:</label>
                <input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => {
                    setOtp(e.target.value.replace(/\D/g, '')); // Only allow digits
                    if (errors.otp) setErrors({ ...errors, otp: '' });
                  }}
                  className={errors.otp ? 'error' : ''}
                  maxLength="6"
                />
                {errors.otp && <div className="error-message">{errors.otp}</div>}
              </div>

              <button onClick={verifyOTP} className="btn btn-success" style={{ width: '100%' }}>
                <i className="fas fa-check-circle"></i> Verify Aadhar
              </button>
            </div>

            <div className="text-center mt-2">
              <small style={{ color: 'var(--text-color)', opacity: 0.7 }}>
                <i className="fas fa-info-circle"></i> Demo OTP: 123456
              </small>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AadharVerify;