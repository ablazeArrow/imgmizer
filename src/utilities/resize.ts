import sharp from 'sharp';

const resize = async (
  w: number,
  h: number,
  inputImg: string,
  path: string,
  imageName: string,
  next: () => void
): Promise<void> => {
  await sharp(inputImg)
    .resize(w, h, { fit: 'contain' })
    .toFile(`${path}${imageName}`);
  next();
};

export default resize;
