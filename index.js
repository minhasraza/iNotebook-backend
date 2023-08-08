const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');

connectToMongo();
const app = express()
const port = 5000

app.use(cors(
  {
    origin: ["https://i-notebook-backend-delta.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
  }
));
app.use(express.json());

// Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});