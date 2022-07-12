import express from 'express';
import fs from 'fs';
import sharp from 'sharp';

const app = express();
const port = 3400;


const resize = async (req, res, next) => {
  await sharp(`./full/${req.query.filename}.jpg`)
    .resize(parseInt(req.query.width), parseInt(req.query.height))
    .toFile('output.jpg');
  next();
};

const sendBack = async (req, res, next) => {
  await fs.readFile('output.jpg', function (err, data) {
    if (err) throw err; // Fail if the file can't be read.
    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    res.end(data); // Send the file data to the browser.
  });
  next();
};

app.listen(port, () => {
  console.log(`server running on port:${port} `);
});

app.get('/', (req, res) => {
  res.send('startiing');
});

app.get('/api/images', resize, sendBack, (req, res) => {});
