import express from 'express';
import galleryRoute from './api/galleryRoute';
import postRoute from './api/postRoute';
import resizRoute from './api/resizeRoute';
const router = express.Router();

router.get(
  '/',
  async (
    req: express.Request,
    res: express.Response
  ): Promise<express.Response> => {
    return res.send(`home page`);
  }
);
router.use(postRoute);
router.use(resizRoute);
router.use(galleryRoute);

export default router;
