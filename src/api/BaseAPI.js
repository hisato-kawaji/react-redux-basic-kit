import * as API from '../constants/API';
import Axios from 'axios';

const BaseApi = Axios.create({
  baseURL: API.baseApiRoot,
  timeout: 5000,
  headers: {
  //  'Authorization': localStorage.getItem('token'),
    'x-api-key': process.env.REACT_APP_BASE_API_KEY,
  }
});

export {
  BaseApi,
}
