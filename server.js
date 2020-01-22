const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');

require('dotenv').config();
const PORT = process.env.PORT;


// ------------ MiddleWare ----------- //


// CORS - Cross Origi Resource Sharing
const corsOptions = {
  origin: [`http://localhost:3000`],
  credentials: true, // allows the session cookie to be sent back and forth from server to client
  optionsSuccessStatus: 200 // some legacy browsers choke on satus 204
};
app.use(cors(corsOptions));

// BodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Multer 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, 'public')
},
filename: function (req, file, cb) {
  cb(null, Date.now() + '-' +file.originalname )
}
})

const upload = multer({ storage: storage }).array('file');

app.post('/upload',function(req, res) {
     
  upload(req, res, function (err) {
         if (err instanceof multer.MulterError) {
             return res.status(500).json(err)
         } else if (err) {
             return res.status(500).json(err)
         }
    return res.status(200).send(req.file)
  })
});



app.listen( PORT, () => console.log(`Server connected at http://localhost:${PORT}`));