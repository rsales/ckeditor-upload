import axios from "axios";

const token = document.getElementsByName('csrf-token')[0].getAttribute('content');
axios.defaults.headers.common['X-CSRF-Token'] = token;

export default axios.create({
  baseURL: '/api/v1/',
  headers: {
    'Content-type': 'application/json'
  }
});