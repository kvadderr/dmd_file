let express = require('express');
let app = express();
let cors = require('cors');
app.listen(8000);

let multer = require('multer');
let EasyYandexS3 = require('easy-yandex-s3').default;

let s3 = new EasyYandexS3({
  auth: {
    accessKeyId: 'YCAJEVRWppkvppdyg2gXrQd_B',
    secretAccessKey: 'YCPNQb-vwfNPS8Ov90tWOSvY-2UFkMutpVskjs25',
  },
  Bucket: 'dmd',
  debug: false,
});

app.use(cors({allowedHeaders: 'Content-Type,x-requested-with'}));
app.use(multer().any());

app.post('/uploadImage', async (req, res) => {
  let buffer = req.files[0].buffer;
  let upload = await s3.Upload({ buffer }, '/meditations/');
  res.send(upload);
});

app.post('/uploadVoice', async (req, res) => {
  let buffer = req.files[0].buffer;
  let upload = await s3.Upload({ buffer }, '/voices/');
  res.send(upload);
});

app.post('/uploadSlogan', async (req, res) => {
  let buffer = req.files[0].buffer;
  let upload = await s3.Upload({ buffer }, '/voices/');
  res.send(upload);
});

app.post('/uploadSound', async (req, res) => {
  let buffer = req.files[0].buffer;
  let upload = await s3.Upload({ buffer }, '/voices/');
  res.send(upload);
});


app.post('/uploadAudio', async (req, res) => {
  let buffer = req.files[0].buffer;
  let upload = await s3.Upload({ buffer }, '/voices/');
  res.send(upload);
});

app.post('/uploadAvatar', async (req, res) => {
  let buffer = req.files[0].buffer;
  let upload = await s3.Upload({ buffer }, '/avatars/');
  res.send(upload);
});