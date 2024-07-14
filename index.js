const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');

connectToMongo();
const app = express()
const port = 5000

app.use(cors(
  {
    origin: ["*https://6693b70499701536b18c5d78--flourishing-gnome-aa6782.netlify.app/", "*http://localhost:3000","https://6693b70499701536b18c5d78--flourishing-gnome-aa6782.netlify.app/", "http://localhost:3000"],
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