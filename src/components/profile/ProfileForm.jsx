import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateProfileForm() {
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const sendOTP = () => {
    if (mobile.length !== 10) {
      alert("Enter valid mobile number");
      return;
    }
    navigate("/otp", { state: { mobile } });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Create Profile</h2>

      <label>Mobile Number</label>
      <input
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        placeholder="Enter mobile number"
      />

      <br /><br />
      <button onClick={sendOTP}>Send OTP</button>
    </div>
  );
}
