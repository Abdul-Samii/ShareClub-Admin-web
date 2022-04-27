import axios from 'axios'
import { Store } from '../store/Store'

const baseURL = 'http://localhost:3000';

export const httpRequest = axios.create({
    baseURL:baseURL,
});