require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const router = express.Router();
const dbConfig = require('./backend/config/connection');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(dbConfig.production);


sequelize.sync({ force: false })
  .then(() => {
    console.log('Database synced successfully.');
  })
  .catch((err) => {
    console.error('Error syncing the database:', err);
  });

app.use(express.json());

const authRoutes = require('./backend/routes/authRoutes');
app.use('/api/auth', authRoutes);


const travelDestinationRoutes = require('./backend/routes/travelDestinationRoutes');
app.use('/api/travelDestinations', travelDestinationRoutes);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const imageUpload = require('./backend/routes/imageUploads');
app.use('/api', imageUpload);