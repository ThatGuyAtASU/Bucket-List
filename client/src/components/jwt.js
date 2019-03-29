import axios from 'axios';
import setAuthToken from './setAuthToken';
import jwt_decode from 'jwt-decode';



// Register User
export const registerUser = (userData) => {

  return axios.post('/api/user/register', userData);
    
};

// Login - Get User Token
export const loginUser = userData => {
 return axios
    .post('/api/user/login', userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
     
      // Set current user
     setCurrentUser(token);

     

     window.location.replace("/user");

    })
    
};

// Set logged in user
export const setCurrentUser = token => {
  return {
    payload: jwt_decode(token)
  };
};


export let getCurrentUser; 

// Log user out
export const logoutUser = () => {
  window.location.replace('/');
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  // setCurrentUser({});

  
};