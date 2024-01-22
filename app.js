const express = require('express');
const app = express();
const morgan = require('morgan');

//1
// mongoose ===>  'UNABLE_TO_GET_ISSUER_CERT_LOCALLY'
// const mongoose = require('mongoose');

// const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@articles-api.2ftvfa1.mongodb.net/?retryWrites=true&w=majority`;
// mongoose.connect(uri, {
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true
// });

// mongoose.connection.on('connected', () => {
//     console.log('MongoDB Connected!');
// });

//2
// mongo ====>   'UNABLE_TO_GET_ISSUER_CERT_LOCALLY'
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://<USERNAME>:<PASSWORD>@articles-api.2ftvfa1.mongodb.net/?&retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


const articlesRoutes = require('./api/routes/articles');
const categoriesRoutes = require('./api/routes/categories');
const usersRoutes = require('./api/routes/users');

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}))

app.use((req, res, next) => {
    res.header("Access-Control-allow-Origin", "*");
    res.header("Access-Control-allow-Headers", "Origin, X-Requested=With, Content-Type, Accept, Authorization");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

// Routes
app.use('/articles', articlesRoutes);
app.use('/categories', categoriesRoutes);
app.use('/users', usersRoutes);


//end for error
app.use((req,res, next) => {
    const error = new Error('Not Found!');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
res.status(error.status|| 500);
res.json({
    error: {
        message: error.message
    }
})
});

module.exports = app;