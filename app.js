import express  from 'express';
import helmet from 'helmet';
import cors from 'cors';

const app = express();

const port = process.env.PORT | 10000;


import { getAllQuotes } from "./libs/quotes.js";

app.use(express.json())

app.use(cors());


app.use(helmet());



/* 
This handler function sets up a welcome message to users of the API
*/

app.get('/', (req, res) => {
    res.send("Hello world! Welcome to the That's What She Said API")
});



/* 
This listener tells our Express.js app to start listening for incoming requests on a specific port.
*/

app.listen(port, () => {
    console.log(`We are now listening on port ${port}`)
})

/* 
This handler function returns either:
• the array of all activities 
• an error message including a status code and explanation 
*/


app.get("/quotes", async (req, res) => {
    try {
        const payload = await getAllQuotes();
        res.status(200).json({
            "success": true,
            "payload": payload
        });
    } catch (error) {
        res.status(404).json({
            "error": error.message
        });
    }
});