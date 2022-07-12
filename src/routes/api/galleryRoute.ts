import express from 'express';
const galleryRoute = express.Router();

export const imagesList: string[] = [];

galleryRoute.get(
  '/all',
  async (
    req: express.Request,
    res: express.Response
  ): Promise<express.Response> => {
    return res.send(imagesList);
  }
);

export default galleryRoute;
