const express = require('express');
const connectDB = require('./config/db');

const dotenv = require('dotenv');

dotenv.config();
const app = express();
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('👋 Welcome to WayBackend API');
});

const userRoutes = require('./routes/user.routes');
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
