import { getJobs } from './getJobs.js'

export default app => {
  app.get('/api/alljobs', async (req, res) => {
    try {
      const response = await getJobs();
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  });

  app.post('/api/getjobbykeyword', async (req, res) => {
    try {
      const { keyword } = req.body;
      const response = await getJobs(keyword);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  });
};
