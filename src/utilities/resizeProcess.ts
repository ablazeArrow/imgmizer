import express from 'express';
import { imagesList } from '../routes/api/galleryRoute';
import resize from './resize';

const resizer = async (
  req: express.Request,
  res: express.Response,
  next: () => void
): Promise<void> => {
  const width: number = parseInt(req.query.width as string);
  const height: number = parseInt(req.query.height as string);
  const filename = req.query.filename as string;
  const inputImg = `assets/full/${filename}`;
  const path = `assets/thumb/`;
  const imageName = `${width}x${height}-${filename}`;
  if (!imagesList.includes(imageName)) imagesList.push(imageName);
  try {
    if (isNaN(width) || width < 50)
      res.send(`<h1>Invalid input for width: ${width}</h1>`);
    else if (isNaN(height) || height < 50)
      res.send(`<h1>Invalid input for height: ${height}</h1>`);
    else if (!/[a-zA-Z]+\.[jpegn]+/i.test(filename))
      res.send(`<h1>Invalid input for File Name:${filename}</h1>`);
    else resize(width, height, inputImg, path, imageName, next);
  } catch (error) {
    res.send(`<h1>${error}</h1>`);
  }
};
export default resizer;
