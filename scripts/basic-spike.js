import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    // Key configurations for spike in this section
    stages: [
        { duration: '2m', target: 2000 }, // fast ramp-up to a high point
        // No plateau
        { duration: '1m', target: 0 }, // quick ramp-down to 0 users
    ],
};

export default () => {
    http.get('https://localhost:7140/weatherforecast');
    sleep(1);
};