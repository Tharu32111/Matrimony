function ProfileList() {
  const profile = JSON.parse(localStorage.getItem("profile"));

  if (!profile) {
    return (
      <div className="page-container fade-in">
        <h2><i className="fas fa-users"></i> Matching Profiles</h2>
        <div className="card">
          <p className="text-center">No profiles found. Please create a profile first.</p>
          <div className="text-center mt-3">
            <a href="/create-profile" className="btn btn-primary">
              <i className="fas fa-user-plus"></i> Create Profile
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container fade-in">
      <h2><i className="fas fa-users"></i> Matching Profiles</h2>

      <div className="profile-card">
        <h3><i className="fas fa-user-circle"></i> {profile.name || 'Profile'}</h3>
        <div className="profile-info">
          <p><strong><i className="fas fa-birthday-cake"></i> Date of Birth:</strong> {profile.dob ? `${profile.dob.day}/${profile.dob.month}/${profile.dob.year}` : 'Not specified'}</p>
          <p><strong><i className="fas fa-language"></i> Mother Tongue:</strong> {profile.motherTongue || 'Not specified'}</p>
          <p><strong><i className="fas fa-pray"></i> Religion:</strong> {profile.religion || 'Not specified'}</p>
          <p><strong><i className="fas fa-users"></i> Caste:</strong> {profile.caste || 'Not specified'}</p>
          <p><strong><i className="fas fa-map-marker-alt"></i> Location:</strong> {profile.location || 'Not specified'}</p>
          <p><strong><i className="fas fa-briefcase"></i> Profession:</strong> {profile.profession || 'Not specified'}</p>
          <p><strong><i className="fas fa-ruler-vertical"></i> Height:</strong> {profile.height || 'Not specified'}</p>
          <p><strong><i className="fas fa-ring"></i> Marital Status:</strong> {profile.maritalStatus || 'Not specified'}</p>
          <p><strong><i className="fas fa-utensils"></i> Eating Habit:</strong> {profile.eatingHabit || 'Not specified'}</p>
          {profile.raasi && <p><strong><i className="fas fa-star"></i> Raasi:</strong> {profile.raasi}</p>}
          {profile.natchathiram && <p><strong><i className="fas fa-moon"></i> Natchathiram:</strong> {profile.natchathiram}</p>}
        </div>

        <div className="text-center mt-3">
          <button className="btn btn-success" style={{ fontSize: '1.1rem', padding: '12px 24px' }}>
            <i className="fas fa-heart"></i> Connect
          </button>
        </div>
      </div>

      <div className="card mt-3">
        <h4><i className="fas fa-info-circle"></i> Profile Completion Tips</h4>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li>Complete your profile with accurate information for better matches</li>
          <li>Upload a clear, recent photo to increase your visibility</li>
          <li>Be honest about your preferences and expectations</li>
          <li>Regularly check for new matches and connection requests</li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileList;

