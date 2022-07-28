import axios from 'axios';

axios.defaults.baseURL = 'https://62d1de75d4eb6c69e7e49d2c.mockapi.io/api/v1/';

export const fetch = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const post = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const del = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};