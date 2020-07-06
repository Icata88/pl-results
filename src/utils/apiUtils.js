  
import axios from 'axios';
import handleError from './handleError';

const token = 'f48d4b012dbe4c22b1cefdbc9c321188';

const getHeaders = () => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',  
        'X-Auth-Token': token  
    }
    return headers;
};

// HTTP GET Request - Returns Resolved or Rejected Promise
export const get = (path) => {
  return new Promise((resolve, reject) => {
    axios({ url: path, method: 'get', headers: getHeaders() })
      .then(response => { resolve(response) })
      .catch(error => { reject(handleError(error)) });
  });
};