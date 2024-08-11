//cd scripts
//k6 run basic-test.js
// (100.00%) 1 scenario, 1 max VUs, 10m30s max duration (incl. graceful stop):

//Load testing
//k6 run --vus 10 --duration 30s basic-test.js
// (100.00%) 1 scenario, 10 max VUs, 1m0s max duration (incl. graceful stop):

//Soak Testing command
//k6 run --vus 100 --duration 8h basic-script.js
import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
    http.get('https://localhost:7140/weatherforecast');
    sleep(1);
}