import { getJobs } from './getJobs';

export default app => {
  app.get('/api/alljobs', async (req, res) => {
    try {
      const { data } = await getJobs();
      res.status(200).send(data);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  });

  app.post('/api/get-job-by-keyword', async (req, res) => {
    try {
      const { keyword } = req.body;
      const { data } = await getJobs(keyword);
      res.status(200).send({ data });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  });
};
