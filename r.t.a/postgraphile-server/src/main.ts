import express from 'express';
import { config } from 'dotenv';
import postgraphileMiddleware from './postGrphile';
import cors from 'cors';
config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(postgraphileMiddleware);

const port = process.env.P_G_PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/graphiql`);
});
server.on('error', console.error);
