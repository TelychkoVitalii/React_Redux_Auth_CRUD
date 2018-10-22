import axios from 'axios';

const baseUrl = 'http://localhost:5000/';

export const registerUser = (firstname, lastname, email, password) => {
  return axios({
    method: 'post',
    url: baseUrl + 'account/register',
    data: { firstname, lastname, email, password }
  }).then(response => response.data).catch(error => error);
};