import axios from 'axios';
import setAuthToken from './setAuthToken';
import jwt_decode from 'jwt-decode';



// Register User
export const registerUser = (userData) => {
    console.log("Hello from JWT");
  axios
    .post('/api/user/register', userData)
    .then(res => console.log(res))
    .catch(err =>
      console.log(err)
    );
};

// Login - Get User Token
export const loginUser = userData => {
  axios
    .post('/api/user/login', userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      setCurrentUser(decoded);
    })
    .catch(err =>
      console.log(err)
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  setCurrentUser({});
};