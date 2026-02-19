import express from 'express';
import { config } from 'dotenv';

const path = process.cwd()
config({ path: `${path}/.env` });


const app = express();
const port = process.env.PORT || 3000

app.get('/', (req,res) => {
  return res.json({ data: "welcome to the world" })
})

app.listen(port, () => {
  console.log("succesfully running at port ", port)
})
