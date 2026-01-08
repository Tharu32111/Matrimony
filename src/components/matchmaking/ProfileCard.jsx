export default function ProfileCard({ profile }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: 10,
      marginBottom: 10
    }}>
      <h3>{profile.name}</h3>
      <p>Age: {profile.age}</p>
      <p>Location: {profile.place}</p>
      <button>Connect Request</button>
    </div>
  );
}
