import API_BASE_URL from '../config/config';
import axios from 'axios';

export const fetchProductsService = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};
