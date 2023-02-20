import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv'
dotenv.config()

import categoriesRoutes from './routes/categories.js';
import subCategoriesRoutes from './routes/subCategories.js';


const app = express(); 

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/category', categoriesRoutes); 
app.use('/sub-categories', subCategoriesRoutes);

const CONNECTION_URL = process.env.LIVE === 'TRUE' ? process.env.ATLAS_URI : process.env.LOCAL_URI
const PORT = process.env.PORT || 5000;

mongoose.set('strictQuery', true);
mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));