import express from 'express'
import mongoose from 'mongoose'
const { connect } = mongoose;
import fileUpload from 'express-fileupload'

import env from 'dotenv'
env.config()
const PORT = process.env.PORT ?? 3000;
const app = express()

import router from './routes/router.js'

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api/v1/posts', router);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
  connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }, () => {
    console.log('Connection to database is successful.');
  });
})