import express from 'express';
import fs from 'fs';

const readImage = async (
  req: express.Request,
  res: express.Response,
  next: () => void
): Promise<void> => {
  fs.readFile(
    `assets/thumb/${req.query.width}x${req.query.height}-${req.query.filename}`,
    (error, pic) => {
      if (error) throw error;
      res.end(pic);
    }
  );
  next();
};

export default readImage;
