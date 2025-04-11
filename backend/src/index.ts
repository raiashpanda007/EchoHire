import express from 'express'


const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Hello World!')
})

import jobroute from './routes/jobs.routes'

app.use('/api/jobs', jobroute)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
}
);
