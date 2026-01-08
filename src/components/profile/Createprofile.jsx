export default function CreateProfile() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Create Profile</h2>

      <label>Profile Created For</label>
      <select>
        <option>Self</option>
        <option>Son</option>
        <option>Daughter</option>
      </select>

      <label>Gender</label>
      <select>
        <option>Female</option>
        <option>Male</option>
      </select>

      <label>Mobile Number</label>
      <input placeholder="Enter mobile number" />

      <label>Date of Birth</label>
      <div style={{ display: "flex", gap: 10 }}>
        <input placeholder="DD" />
        <input placeholder="MM" />
        <input placeholder="YYYY" />
      </div>

      <label>Mother Tongue</label>
      <input placeholder="Tamil" />

      <label>Religion</label>
      <input placeholder="Hindu" />

      <label>Caste</label>
      <input />

      <label>Sub Caste</label>
      <input />

      <label>Dosham</label>
      <select>
        <option>No</option>
        <option>Yes</option>
      </select>

      <label>Password</label>
      <input type="password" />
<input
  type="text"
  value={mobile}
  onChange={(e) => setMobile(e.target.value)}
  placeholder="Enter mobile number"
  style={{
    width: "250px",
    padding: "8px",
    border: "1px solid #000",
    borderRadius: "4px"
  }}
/>
<input
  type="text"
  value={mobile}
  onChange={(e) => setMobile(e.target.value)}
  placeholder="Enter mobile number"
  style={{
    width: "250px",
    padding: "8px",
    border: "1px solid #000",
    borderRadius: "4px"
  }}
/>

      <br /><br />
      <button>Create Profile</button>
    </div>
  );
}
