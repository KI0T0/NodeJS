import 'reflect-metadata';
import express from 'express'; //coloquei anteriormente "import express {request, response} from 'express; NÃO SEI O MOTIVO (autocompletar às vezes atrapalha)"
import "./database";
import {router} from "./routes";

const app = express();
app.use(express.json());
app.use(router);

app.listen(3333,() => console.log("Server is running!"));