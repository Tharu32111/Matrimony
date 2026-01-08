import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function MobileVerify() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { updateProfile } = useAuth();

  const sendOTP = () => {
    if (mobile.length !== 10) {
      setErrors({ mobile: 'Enter valid 10-digit mobile number' });
      return;
    }
    setErrors({});
    setShowOTP(true);
    alert("OTP sent ");
  };

  const verifyOTP = () => {
    if (otp === "123456") {
      updateProfile({ mobileVerified: true });
      navigate("/aadhar-verify");
    } else {
      setErrors({ otp: 'Invalid OTP' });
    }
  };

  return (
    <div className="page-container fade-in">
      <h2><i className="fas fa-mobile-alt"></i> Mobile Verification</h2>

      <div className="card">
        <p className="text-center mb-3" style={{ color: 'var(--text-color)' }}>
          Verify your mobile number to continue creating your profile
        </p>

        <div className="form-group">
          <label><i className="fas fa-phone"></i> Mobile Number:</label>
          <input
            type="text"
            placeholder="Enter 10-digit mobile number"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
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
                <label>OTP:</label>
                <input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => {
                    setOtp(e.target.value);
                    if (errors.otp) setErrors({ ...errors, otp: '' });
                  }}
                  className={errors.otp ? 'error' : ''}
                  maxLength="6"
                />
                {errors.otp && <div className="error-message">{errors.otp}</div>}
              </div>

              <button onClick={verifyOTP} className="btn btn-success" style={{ width: '100%' }}>
                <i className="fas fa-check-circle"></i> Verify OTP
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

export default MobileVerify;
