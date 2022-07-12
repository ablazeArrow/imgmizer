import express from 'express';
import resizer from '../../utilities/resizeProcess';
import readImage from '../../utilities/readImage';
const resizRoute = express.Router();

resizRoute.get('/api/image', resizer, readImage, async () => {
  //do nothing
});

export default resizRoute;
