const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
const PORT = process.env.PORT;

const routes = require('./routes');


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


// Routes 
app.use("/api/v1/users", routes.user);

app.listen( PORT, () => console.log(`Server connected at http://localhost:${PORT}`));