import express from 'express';
const app = express();

import bodyParser from 'body-parser'

import userRoutes from './routes/users.js'
const port = 5000;
app.get("/",(req,res) => {
    res.send ("Hello World!");
})

  

// this is dummy api
app.get("/api/v1",(req,res) => 
{
    res.json(
        {
            message: "Welcome to API"
        }
    )
})

//adding body parser for json
app.use(bodyParser.json());

app.use('/users',userRoutes);


app.listen(port,() => {
    console.log(`Server started on port ${port}`);
})

// yes i am the one