import express from "express"; //imports express
import dotenv from "dotenv"; //imports dotenv
dotenv.config(); //use dotenv
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
const port = process.env.PORT || 5000;  //process .env port or use this
import userRoutes from './routes/userRoutes.js' //userRoutes in the routes page

connectDB();
const app = express(); //use express

app.use('/api/users', userRoutes) 

app.get('/', (req, res) => res.send('Server is ready')); //get the index

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`)); //listens 



// - **POST /api/users** - Register a user
// - **POST /api/users/auth** - Authenticate a user and get token
// - **POST /api/users/logout** user and clear cookie
// - **GET /api/users/profile** - Get user profile
// - **PUT /api/users/profile** - Update profile