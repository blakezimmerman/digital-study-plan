import axios from 'axios';

export const apiBase = 'http://localhost:3000/api/';

export const api = (endpoint) => apiBase + endpoint;

export const post = (url, body, action) =>
  axios.post(url, body)
    .then((response) => action.SUCCESS(response.data))
    .catch((err) => action.FAILURE(err.response.data));

export const get = (url, action) =>
  axios.get(url)
    .then((response) => action.SUCCESS(response))
    .catch((err) => action.FAILURE(err.response.data));

export const passiveLogin = (action) =>
  axios.get(api('auth/passivelogin'))
    .then((response) => response.data !== 'Not Authorized'
      ? action.SUCCESS(response.data)
      : action.FAILURE(undefined)
    );
