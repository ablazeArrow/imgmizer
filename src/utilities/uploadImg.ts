import muter from 'multer';

const storage = muter.diskStorage({
  destination: (req, file, cb) => cb(null, `assets/full`),
  filename: (req, file, cb) => cb(null, file.originalname),
});

const upload = muter({ storage });

export default upload;
