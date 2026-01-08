import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CreateProfilePage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [profile, setProfile] = useState({

    profileFor: '',
    gender: '',
    mobile: '',

    name: '',
    dob: { day: '', month: '', year: '' },
    motherTongue: '',
    email: '',

    height: '',
    weight: '',
    bodyType: '',
    complexion: '',
    physicalStatus: '',
    maritalStatus: '',

    religion: '',
    caste: '',
    subcaste: '',
    gothram: '',
    dosham: 'No',

    location: '',
    city: '',
    state: '',
    country: '',
    citizenship: '',

    education: '',
    educationDetails: '',
    profession: '',
    company: '',
    income: '',
    workLocation: '',

    fatherName: '',
    fatherOccupation: '',
    motherName: '',
    motherOccupation: '',
    siblings: '',
    familyType: '',
    familyStatus: '',
    familyValues: '',

    password: '',
    // Multiple Photos
    photos: [],

    music: '',
    reading: '',
    movies: '',
    food: '',
    sports: '',
    travel: '',
    cooking: '',
    dancing: '',

    birthTime: '',
    birthPlace: '',
    raasi: '',
    natchathiram: '',
    manglik: 'No',

    eatingHabit: '',
    smoking: 'No',
    drinking: 'No',

    expectations: '',
    aboutMe: ''
  });

  useEffect(() => {
    
    const loginData = JSON.parse(localStorage.getItem('loginData') || '{}');
    setProfile(prev => ({
      ...prev,
      profileFor: loginData.profileFor || '',
      gender: loginData.gender || '',
      mobile: loginData.mobile || ''
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setProfile(prev => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value }
      }));
    } else {
      setProfile(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setProfile(prev => ({
      ...prev,
      photos: [...prev.photos, ...files].slice(0, 6) // Limit to 6 photos
    }));
  };

  const removePhoto = (index) => {
    setProfile(prev => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index)
    }));
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const submitProfile = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    navigate("/profile-details");
  };

  const renderStepIndicator = () => {
    const steps = [
      'Basic Details', 'Family Details', 'Religious', 'Education Details',
       'Password & Photos', 'Hobbies',
      'Horoscope', 'Lifestyle', 'About Me'
    ];

   /* return (
      <div className="step-indicator">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${currentStep === index + 1 ? 'active' : currentStep > index + 1 ? 'completed' : ''}`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    );*/
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="form-section">
            <h3><i className="fas fa-user"></i> Basic Details</h3>
            <div className="form-group">
              <label>Full Name:</label>
              <input name="name" value={profile.name} onChange={handleChange} placeholder="Enter your full name" />
            </div>
            <div className="form-group">
              <label>Date of Birth:</label>
              <div className="grid-inputs">
                <input name="dob.day" placeholder="DD" value={profile.dob.day} onChange={handleChange} maxLength="2" />
                <input name="dob.month" placeholder="MM" value={profile.dob.month} onChange={handleChange} maxLength="2" />
                <input name="dob.year" placeholder="YYYY" value={profile.dob.year} onChange={handleChange} maxLength="4" />
              </div>
            </div>
            <div className="form-group">
              <label>Mother Tongue:</label>
              <input name="motherTongue" value={profile.motherTongue} onChange={handleChange} placeholder="e.g., Tamil, Hindi, English" />
            </div>
            <div className="form-group">
              <label>Email Address:</label>
              <input type="email" name="email" value={profile.email} onChange={handleChange} placeholder="your.email@example.com" />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="form-section">
            <h3><i className="fas fa-home"></i> Family Details</h3>
            <div className="form-group">
              <label>Father's Name:</label>
              <input name="fatherName" value={profile.fatherName} onChange={handleChange} placeholder="Father's full name" />
            </div>
            <div className="form-group">
              <label>Father's Occupation:</label>
              <input name="fatherOccupation" value={profile.fatherOccupation} onChange={handleChange} placeholder="Father's profession" />
            </div>
            <div className="form-group">
              <label>Mother's Name:</label>
              <input name="motherName" value={profile.motherName} onChange={handleChange} placeholder="Mother's full name" />
            </div>
            <div className="form-group">
              <label>Mother's Occupation:</label>
              <input name="motherOccupation" value={profile.motherOccupation} onChange={handleChange} placeholder="Mother's profession" />
            </div>
            <div className="form-group">
              <label>Siblings:</label>
              <input name="siblings" value={profile.siblings} onChange={handleChange} placeholder="e.g., 2 brothers, 1 sister" />
            </div>
            <div className="form-group">
              <label>Family Type:</label>
              <select name="familyType" value={profile.familyType} onChange={handleChange}>
                <option value="">Select Family Type</option>
                <option value="nuclear">Nuclear Family</option>
                <option value="joint">Joint Family</option>
              </select>
            </div>
            <div className="form-group">
              <label>Family Status:</label>
              <select name="familyStatus" value={profile.familyStatus} onChange={handleChange}>
                <option value="">Select Family Status</option>
                <option value="upper-middle">Upper Middle Class</option>
                <option value="middle">Middle Class</option>
                <option value="lower-middle">Lower Middle Class</option>
              </select>
            </div>
            <div className="form-group">
              <label>Family Values:</label>
              <select name="familyValues" value={profile.familyValues} onChange={handleChange}>
                <option value="">Select Family Values</option>
                <option value="traditional">Traditional</option>
                <option value="moderate">Moderate</option>
                <option value="liberal">Liberal</option>
              </select>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="form-section">
            <h3><i className="fas fa-pray"></i> Religious Details</h3>
            <div className="form-group">
              <label>Religion:</label>
              <input name="religion" value={profile.religion} onChange={handleChange} placeholder="e.g., Hindu, Muslim, Christian" />
            </div>
            <div className="form-group">
              <label>Caste:</label>
              <input name="caste" value={profile.caste} onChange={handleChange} placeholder="Enter your caste" />
            </div>
            <div className="form-group">
              <label>Sub Caste:</label>
              <input name="subcaste" value={profile.subcaste} onChange={handleChange} placeholder="Enter your sub caste" />
            </div>
            <div className="form-group">
              <label>Gothram:</label>
              <input name="gothram" value={profile.gothram} onChange={handleChange} placeholder="Enter your gothram" />
            </div>
            <div className="form-group">
              <label>Kulam:</label>
              <input name="kulam" value={profile.kulam} onChange={handleChange} placeholder="Enter your kulam" />
            </div>
            <div className="form-group">
              <label>Dosham:</label>
              <select name="dosham" value={profile.dosham} onChange={handleChange}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
          </div>
        );
        case 4:
        return (
          <div className="form-section">
            <h3><i className="fas fa-graduation-cap"></i> Education Details</h3>
            <div className="form-group">
              <label>Highest Education:</label>
              <select name="education" value={profile.education} onChange={handleChange}>
                <option value="">Select Education</option>
                <option value="high-school">High School</option>
                <option value="intermediate">Intermediate</option>
                <option value="bachelors">Bachelor's Degree</option>
                <option value="masters">Master's Degree</option>
                <option value="phd">PhD</option>
                <option value="doctorate">Doctorate</option>
              </select>
            </div>
            <div className="form-group">
              <label>Education Details:</label>
              <input name="educationDetails" value={profile.educationDetails} onChange={handleChange} placeholder="e.g., B.Tech in Computer Science" />
            </div>
            <div className="form-section">
            <h3><i className="fas fa-briefcase"></i> Professional Details</h3>
            <div className="form-group">
              <label>Profession:</label>
              <input name="profession" value={profile.profession} onChange={handleChange} placeholder="Your occupation or job title" />
            </div>
            <div className="form-group">
              <label>Company:</label>
              <input name="company" value={profile.company} onChange={handleChange} placeholder="Company name" />
            </div>
            <div className="form-group">
              <label>Annual Income:</label>
              <select name="income" value={profile.income} onChange={handleChange}>
                <option value="">Select Income Range</option>
                <option value="under-2">Under ₹2 Lakhs</option>
                <option value="2-5">₹2-5 Lakhs</option>
                <option value="5-10">₹5-10 Lakhs</option>
                <option value="10-20">₹10-20 Lakhs</option>
                <option value="above-20">Above ₹20 Lakhs</option>
              </select>
            </div>
            <div className="form-group">
              <label>Work Location:</label>
              <input name="workLocation" value={profile.workLocation} onChange={handleChange} placeholder="City where you work" />
            </div>
          </div>
          </div>
        );
      case 5:
        return (
          <div className="form-section">
            <h3><i className="fas fa-map-marker-alt"></i> Location Details</h3>
            <div className="form-group">
              <label>Current Location:</label>
              <input name="location" value={profile.location} onChange={handleChange} placeholder="City, State, Country" />
            </div>
            <div className="form-group">
              <label>City:</label>
              <input name="city" value={profile.city} onChange={handleChange} placeholder="Enter your city" />
            </div>
            <div className="form-group">
              <label>State:</label>
              <input name="state" value={profile.state} onChange={handleChange} placeholder="Enter your state" />
            </div>
            <div className="form-group">
              <label>Country:</label>
              <input name="country" value={profile.country} onChange={handleChange} placeholder="Enter your country" />
            </div>
            <div className="form-group">
              <label>Citizenship:</label>
              <input name="citizenship" value={profile.citizenship} onChange={handleChange} placeholder="Your citizenship" />
            </div>
          </div>
        );
      
        case 6:
        return (
          <div className="form-section">
            <h3><i className="fas fa-male"></i> Physical Details</h3>
            <div className="form-group">
              <label>Height:</label>
              <input name="height" value={profile.height} onChange={handleChange} placeholder="e.g., 5'6&quot;" />
            </div>
            <div className="form-group">
              <label>Weight:</label>
              <input name="weight" value={profile.weight} onChange={handleChange} placeholder="e.g., 65 kg" />
            </div>
            <div className="form-group">
              <label>Body Type:</label>
              <select name="bodyType" value={profile.bodyType} onChange={handleChange}>
                <option value="">Select Body Type</option>
                <option value="slim">Slim</option>
                <option value="athletic">Athletic</option>
                <option value="average">Average</option>
                <option value="heavy">Heavy</option>
              </select>
            </div>
            <div className="form-group">
              <label>Complexion:</label>
              <select name="complexion" value={profile.complexion} onChange={handleChange}>
                <option value="">Select Complexion</option>
                <option value="fair">Fair</option>
                <option value="wheatish">Wheatish</option>
                <option value="dark">Dark</option>
              </select>
            </div>
            <div className="form-group">
              <label>Physical Status:</label>
              <select name="physicalStatus" value={profile.physicalStatus} onChange={handleChange}>
                <option value="">Select Physical Status</option>
                <option value="normal">Normal</option>
                <option value="physically-challenged">Physically Challenged</option>
              </select>
            </div>
            <div className="form-group">
              <label>Marital Status:</label>
              <select name="maritalStatus" value={profile.maritalStatus} onChange={handleChange}>
                <option value="">Select Marital Status</option>
                <option value="never-married">Never Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
                <option value="separated">Separated</option>
              </select>
            </div>
          </div>
        );
      
      /*case 8:
        return (
          <div className="form-section">
            <h3><i className="fas fa-lock"></i> Create Password</h3>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" name="password" value={profile.password} onChange={handleChange} placeholder="Create a strong password" />
            </div>
          </div>
        );*/      
        case 7:
        return (
          
          <div className="form-section">
            <div className="form-group">
              <label>Password:</label>
              <input type="password" name="password" value={profile.password} onChange={handleChange} placeholder="Create a strong password" />
            </div>
            <h3><i className="fas fa-camera"></i> Upload Photos</h3>
            <div className="form-group">
              <label>Profile Photos (Max 6):</label>
              <input type="file" accept="image/*" multiple onChange={handleFileChange} />
              <small style={{ color: 'var(--text-color)', opacity: 0.7 }}>
                Upload clear, recent photos for better matches. First photo will be your profile picture.
              </small>
            </div>
            {profile.photos.length > 0 && (
              <div className="photo-preview">
                <h4>Selected Photos:</h4>
                <div className="photo-grid">
                  {profile.photos.map((photo, index) => (
                    <div key={index} className="photo-item">
                      <img
                        src={URL.createObjectURL(photo)}
                        alt={`Photo ${index + 1}`}
                        style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
                      />
                      <button
                        type="button"
                        onClick={() => removePhoto(index)}
                        className="remove-photo"
                        style={{
                          position: 'absolute',
                          top: '-5px',
                          right: '-5px',
                          background: 'red',
                          color: 'white',
                          border: 'none',
                          borderRadius: '50%',
                          width: '20px',
                          height: '20px',
                          cursor: 'pointer'
                        }}
                      >
                        ×
                      </button>
                      {index === 0 && <span className="profile-pic-badge">Profile Pic</span>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      /*case 7:
        return (
          <div className="form-section">
            <h3><i className="fas fa-music"></i> Hobbies and Interests</h3>
            <div className="form-group">
              <label>Music:</label>
              <input name="music" value={profile.music} onChange={handleChange} placeholder="Your favorite music genres" />
            </div>
            <div className="form-group">
              <label>Reading:</label>
              <input name="reading" value={profile.reading} onChange={handleChange} placeholder="Books, magazines, etc." />
            </div>
            <div className="form-group">
              <label>Movies:</label>
              <input name="movies" value={profile.movies} onChange={handleChange} placeholder="Favorite movie genres" />
            </div>
            <div className="form-group">
              <label>Food:</label>
              <input name="food" value={profile.food} onChange={handleChange} placeholder="Favorite cuisines or dishes" />
            </div>
            <div className="form-group">
              <label>Sports:</label>
              <input name="sports" value={profile.sports} onChange={handleChange} placeholder="Sports you play or follow" />
            </div>
            <div className="form-group">
              <label>Travel:</label>
              <input name="travel" value={profile.travel} onChange={handleChange} placeholder="Favorite destinations or travel interests" />
            </div>
            <div className="form-group">
              <label>Cooking:</label>
              <input name="cooking" value={profile.cooking} onChange={handleChange} placeholder="Cooking skills or favorite dishes to cook" />
            </div>
            <div className="form-group">
              <label>Dancing:</label>
              <input name="dancing" value={profile.dancing} onChange={handleChange} placeholder="Dance forms you know or enjoy" />
            </div>
          </div>
        );*/
      case 8:
        return (
          <div className="form-section">
            <h3><i className="fas fa-star"></i> Horoscope Details</h3>
            <div className="form-group">
              <label>Birth Time:</label>
              <input name="birthTime" value={profile.birthTime} onChange={handleChange} placeholder="HH:MM (24-hour format)" />
            </div>
            <div className="form-group">
              <label>Birth Place:</label>
              <input name="birthPlace" value={profile.birthPlace} onChange={handleChange} placeholder="City where you were born" />
            </div>
            <div className="form-group">
              <label>Raasi:</label>
              <input name="raasi" value={profile.raasi} onChange={handleChange} placeholder="Your zodiac sign" />
            </div>
            <div className="form-group">
              <label>Natchathiram:</label>
              <input name="natchathiram" value={profile.natchathiram} onChange={handleChange} placeholder="Your star sign" />
            </div>
            <div className="form-group">
              <label>Manglik:</label>
              <select name="manglik" value={profile.manglik} onChange={handleChange}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
             <h3><i className="fas fa-glass-martini-alt"></i> Lifestyle</h3>
            <div className="form-group">
              <label>Eating Habit:</label>
              <select name="eatingHabit" value={profile.eatingHabit} onChange={handleChange}>
                <option value="">Select Eating Habit</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="non-vegetarian">Non-Vegetarian</option>
                <option value="eggetarian">Eggetarian</option>
                <option value="vegan">Vegan</option>
              </select>
            </div>
            <div className="form-group">
              <label>Smoking:</label>
              <select name="smoking" value={profile.smoking} onChange={handleChange}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
                <option value="occasionally">Occasionally</option>
              </select>
            </div>
            <div className="form-group">
              <label>Drinking:</label>
              <select name="drinking" value={profile.drinking} onChange={handleChange}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
                <option value="occasionally">Occasionally</option>
              </select>
            </div>
          </div>
        );
     
      case 9:
        return (
          <div className="form-section">
            <h3><i className="fas fa-user-edit"></i> About Me & Expectations</h3>
            <div className="form-group">
              <label>About Me:</label>
              <textarea
                name="aboutMe"
                value={profile.aboutMe}
                onChange={handleChange}
                placeholder="Tell us about yourself, your personality, goals, etc."
                rows="4"
              />
            </div>
            <div className="form-group">
              <label>Partner Expectations:</label>
              <textarea
                name="expectations"
                value={profile.expectations}
                onChange={handleChange}
                placeholder="What are you looking for in a partner?"
                rows="4"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="page-container fade-in">
      <h2><i className="fas fa-user-plus"></i> Create Profile</h2>
 

      {renderStepIndicator()}

      <div className="card">
        {renderStep()}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
        {currentStep > 1 && (
          <button onClick={prevStep} className="btn btn-outline">
            <i className="fas fa-arrow-left"></i> Previous
          </button>
        )}

        {currentStep < 13 ? (
          <button onClick={nextStep} className="btn btn-primary" style={{ marginLeft: 'auto' }}>
            Next <i className="fas fa-arrow-right"></i>
          </button>
        ) : (
          <button onClick={submitProfile} className="btn btn-success" style={{ marginLeft: 'auto' }}>
            <i className="fas fa-check"></i> Create Profile
          </button>
        )}
      </div>
    </div>
  );
}

export default CreateProfilePage;
