import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    profileFor: '',
    gender: '',
    mobile: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateLoginForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const validateRegisterForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.profileFor) newErrors.profileFor = 'Please select profile type';
    if (!formData.gender) newErrors.gender = 'Please select gender';
    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required';
    } else if (formData.mobile.length !== 10) {
      newErrors.mobile = 'Enter valid 10-digit mobile number';
    }
    return newErrors;
  };

  const handleLogin = async () => {
    const validationErrors = validateLoginForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    const result = await login({ email: formData.email, password: formData.password });
    setLoading(false);

    if (result.success) {
      navigate('/matches');
    } else {
      setErrors({ general: result.error || 'Login failed' });
    }
  };

  const handleRegister = async () => {
    const validationErrors = validateRegisterForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    const result = await register({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      profileFor: formData.profileFor,
      gender: formData.gender,
      mobile: formData.mobile
    });
    setLoading(false);

    if (result.success) {
      navigate('/mobile-verify');
    } else {
      setErrors({ general: result.error || 'Registration failed' });
    }
  };

  return (
    <div className="page-container fade-in">
      <h2><i className="fas fa-sign-in-alt"></i> {isLogin ? 'Login' : 'Register'}</h2>

      <div className="card">
        {/* Tab Switcher */}
        <div className="tab-container" style={{ display: 'flex', marginBottom: '1rem', borderBottom: '1px solid #ddd' }}>
          <button
            className={`tab-btn ${isLogin ? 'active' : ''}`}
            onClick={() => {
              setIsLogin(true);
              setErrors({});
              setFormData({ email: '', password: '', name: '', profileFor: '', gender: '', mobile: '' });
            }}
            style={{
              flex: 1,
              padding: '0.5rem',
              border: 'none',
              background: isLogin ? '#007bff' : 'transparent',
              color: isLogin ? 'white' : '#666',
              cursor: 'pointer'
            }}
          >
            <i className="fas fa-sign-in-alt"></i> Login
          </button>
          <button
            className={`tab-btn ${!isLogin ? 'active' : ''}`}
            onClick={() => {
              setIsLogin(false);
              setErrors({});
              setFormData({ email: '', password: '', name: '', profileFor: '', gender: '', mobile: '' });
            }}
            style={{
              flex: 1,
              padding: '0.5rem',
              border: 'none',
              background: !isLogin ? '#007bff' : 'transparent',
              color: !isLogin ? 'white' : '#666',
              cursor: 'pointer'
            }}
          >
            <i className="fas fa-user-plus"></i> Register
          </button>
        </div>

        {errors.general && (
          <div className="error-message" style={{ marginBottom: '1rem', textAlign: 'center' }}>
            {errors.general}
          </div>
        )}

        {isLogin ? (
          // Login Form
          <>
            <p className="text-center mb-3" style={{ color: 'var(--text-color)' }}>
              Welcome back! Please sign in to your account
            </p>

            <div className="form-group">
              <label><i className="fas fa-envelope"></i> Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>

            <div className="form-group">
              <label><i className="fas fa-lock"></i> Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={errors.password ? 'error' : ''}
              />
              {errors.password && <div className="error-message">{errors.password}</div>}
            </div>

            <button
              onClick={handleLogin}
              className="btn btn-primary"
              style={{ width: '100%', fontSize: '1.1rem' }}
              disabled={loading}
            >
              {loading ? <i className="fas fa-spinner fa-spin"></i> : <i className="fas fa-sign-in-alt"></i>}
              {loading ? ' Signing In...' : ' Sign In'}
            </button>
          </>
        ) : (
          // Registration Form
          <>
            <p className="text-center mb-3" style={{ color: 'var(--text-color)' }}>
              Create your account to find your perfect match
            </p>

            <div className="form-group">
              <label><i className="fas fa-user"></i> Full Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <div className="error-message">{errors.name}</div>}
            </div>

            <div className="form-group">
              <label><i className="fas fa-envelope"></i> Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>

            <div className="form-group">
              <label><i className="fas fa-lock"></i> Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                className={errors.password ? 'error' : ''}
              />
              {errors.password && <div className="error-message">{errors.password}</div>}
            </div>

            <div className="form-group">
              <label><i className="fas fa-user"></i> Profile Created For:</label>
              <select
                name="profileFor"
                value={formData.profileFor}
                onChange={handleChange}
                className={errors.profileFor ? 'error' : ''}
              >
                <option value="">Select Profile Type</option>
                <option value="self">Self</option>
                <option value="son">Son</option>
                <option value="daughter">Daughter</option>
              </select>
              {errors.profileFor && <div className="error-message">{errors.profileFor}</div>}
            </div>

            <div className="form-group">
              <label><i className="fas fa-venus-mars"></i> Gender:</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={errors.gender ? 'error' : ''}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.gender && <div className="error-message">{errors.gender}</div>}
            </div>

            <div className="form-group">
              <label><i className="fas fa-mobile-alt"></i> Mobile Number:</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter 10-digit mobile number"
                maxLength="10"
                className={errors.mobile ? 'error' : ''}
              />
              {errors.mobile && <div className="error-message">{errors.mobile}</div>}
            </div>

            <button
              onClick={handleRegister}
              className="btn btn-success"
              style={{ width: '100%', fontSize: '1.1rem' }}
              disabled={loading}
            >
              {loading ? <i className="fas fa-spinner fa-spin"></i> : <i className="fas fa-user-plus"></i>}
              {loading ? ' Creating Account...' : ' Create Account'}
            </button>
          </>
        )}

        <div className="text-center mt-3">
          <small style={{ color: 'var(--text-color)', opacity: 0.7 }}>
            <i className="fas fa-shield-alt"></i> Your information is secure and encrypted
          </small>
        </div>
      </div>
    </div>
  );
}