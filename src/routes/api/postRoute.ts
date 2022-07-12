import express from 'express';
import upload from '../../utilities/uploadImg';
import generateUrl from '../../utilities/urlGenerator';
const postRoute = express.Router();

postRoute.post('/upload', upload.single('avatar'), generateUrl);

export default postRoute;
