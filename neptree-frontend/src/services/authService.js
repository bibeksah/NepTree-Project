import axiosInstance from '../axiosInstance';

const register = async (username, password, email) => {
  const response = await axiosInstance.post('/register/', {
    username,
    password,
    email,
  });
  return response.data;
};

const login = async (username, password) => {
  const response = await axiosInstance.post('/login/', {
    username,
    password,
  });
  return response.data;
};

export { register, login };
