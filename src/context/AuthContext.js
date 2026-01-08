import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app start
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      // Simulate API call
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Demo login - accept any email/password combination
          if (credentials.email && credentials.password) {
            const userData = {
              id: 1,
              email: credentials.email,
              name: 'Demo User',
              profileComplete: true
            };
            resolve({ user: userData, token: 'demo-token-123' });
          } else {
            reject(new Error('Invalid credentials'));
          }
        }, 1000);
      });

      const { user: userData, token } = response;
      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', token);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const register = async (userData) => {
    try {
      // Simulate API call
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          const newUser = {
            id: Date.now(),
            ...userData,
            profileComplete: false
          };
          resolve({ user: newUser, token: 'demo-token-123' });
        }, 1000);
      });

      const { user: userDataResponse, token } = response;
      setUser(userDataResponse);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(userDataResponse));
      localStorage.setItem('token', token);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  const updateProfile = (profileData) => {
    const updatedUser = { ...user, ...profileData, profileComplete: true };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    register,
    logout,
    updateProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};