const express = require('express');
const multer = require('multer');
const path = require('path');
const xlsx = require('xlsx');
const fs = require('fs');
const fsP = require('fs').promises;

const bodyParser = require('body-parser');

const app = express();

const UPLOAD_DIR = './upload_dir/';

const port = process.env.PORT || 7777;

var storage;
var upload;

// Check if the destination folder exists, and if not, create it
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR);
}

try {

  // Multer's configuration for files upload
  storage = multer.diskStorage({
    destination: (req, file, cb) => {

      // Directory where files are saved
      cb(null, UPLOAD_DIR);
    },
    filename: (req, file, cb) => {

      // Uses the original name of the file
      cb(null, file.originalname);
    },
  });
  upload = multer({
    storage
  });
} catch (e) {
  throw new Error(e);
}

app.use(bodyParser.json());

// Middleware to serve static files from the "Public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Bind root request to index.html file
app.get('/', (req, res) => {
  try {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  } catch (e) {
    throw new Error(e);
  }
});

// Start the server on the specified door
app.listen(port, () => {
  console.log(`Listening server on port ${port}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack); // Registra l'errore nella console

  // Send an HTTP reply with the error message and the specified status
  res.status(500).json({
    message: err,
    data: err.stack
  });
});
