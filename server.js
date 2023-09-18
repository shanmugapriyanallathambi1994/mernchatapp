const app = require('./app');
const http = require('http');
const dotenv = require('dotenv');
//const path = require('path');
const { chats } = require('./data/data');
dotenv.config({ path:( "./.env") });
const connectDB = require('./config/db');
connectDB();
const { notFound, errorHandler } = require("./Middleware/errorHandleMiddle");
const colors = require('colors');

app.get('/', (req, res) => {
    res.send("API is running sucesssfully wow");
});


// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);


app.listen(process.env.PORT, () => {
    console.log(`server connnected port: ${process.env.PORT}`);
});
