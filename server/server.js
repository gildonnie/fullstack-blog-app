const express = require('express');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/posts', require('./routes/postRoutes'));

app.listen(PORT, () => console.log(`Server started on port ${port}`));