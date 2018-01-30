import axios from 'axios';

export function loginUser(credentials) {
  return axios.post('/api/auth/login', credentials)
    .then(({ data }) => data);
}

export default { loginUser };
