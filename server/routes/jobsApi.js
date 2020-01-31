import axios from 'axios';
import keys from '../config/dev';

export default app => {
  app.get('/api/alljobs', async (request, response) => {
    const apiResponse = await axios(
      `https://data.cityofnewyork.us/resource/kpav-sd4t.json/?$$app_token=${keys.APIKEY}`
    );
    const { data } = apiResponse;
    response.send({ data });
  });

  app.post('/api/getjobbykeyword', async (request, response) => {
    const { keyword = 'javascript' } = request.body;
    const apiResponse = await axios(
      `https://data.cityofnewyork.us/resource/kpav-sd4t.json/?$$app_token=${keys.APIKEY}&&${encodeURI(
        `$query=select * search '${keyword}' limit 100&$$query_timeout_seconds=60`
      )}`
    );
    const { data = {} } = apiResponse || {};
    response.send({ data });
  });
};
