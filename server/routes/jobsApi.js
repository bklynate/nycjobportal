import axios from 'axios';
import keys from '../config/dev';

export default app => {
  app.get('/api/alljobs', async (req, res) => {
    try {
      const response = await axios(
        `https://data.cityofnewyork.us/resource/kpav-sd4t.json/?$$app_token=${keys.APIKEY}`
      );
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  });

  app.post('/api/getjobbykeyword', async (req, res) => {
    try {
      const { keyword } = req.body;
      const response = await axios(
        `https://data.cityofnewyork.us/resource/kpav-sd4t.json/?$$app_token=${
          keys.APIKEY
        }&&${encodeURI(
          `$query=select * search '${keyword}' limit 100&$$query_timeout_seconds=60`
        )}`
      );
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  });
};
