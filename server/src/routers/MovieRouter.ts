import Express from 'express';
import { MovieService } from '../services/MovieService';

const router = Express.Router();

router.get('/:id', async (req, res) => {
  const movie = await MovieService.find({ _id: req.params.id.split(',') });
  res.send(movie);
})

router.get('/', async (req, res) => {
  const { name, ...rest } = req.body;
  const result = await MovieService.find(name ? { name: new RegExp(name, "g") } : {}, rest.limit, rest.page - 1);
  res.send(result);
})

router.post('/', async (req, res) => {

  res.send('post');
})

router.put('/', (req, res) => {
  res.send('put')
})

router.delete('/', (req, res) => {
  res.send('delete')
})


export default router;