const express = require('express')
const app = express()
const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./db_connect');
//connectDB();
const db_fetch = require('./db_fetch');
db_fetch();

const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/api/createuser', require('./routes/CreateUser.js'));
app.use('/api/login', require('./routes/LoginUser.js'));
app.use('/api/displaydata', require('./routes/DisplayData.js'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});

