import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    // Key configurations for spike in this section
    stages: [
        { duration: '30s', target: 100 }, 
        { duration: '1m', target: 200 }, 
        { duration: '30s', target: 300 }, 
        { duration: '1m', target: 400 }, 
        { duration: '30s', target: 500 }, 
    ],
};

export default () => {
    http.get('https://localhost:7140/weatherforecast');
    sleep(1);
};