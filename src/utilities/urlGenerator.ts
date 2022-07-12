import express from 'express';
import { port } from '..';

export const imagesList: string[] = [];
async function generateUrl(
  req: express.Request,
  res: express.Response
): Promise<void> {
  const { width, height } = await req.body;
  const filename = req.file?.filename;
  res.send(
    `<a href="http://localhost:${port}/api/image?filename=${filename}&width=${width}&height=${height}" target="_self">Show Processed Image</a>`
  );
}

export default generateUrl;
