const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

console.log("Seja Bem vindo");
app.use(routes);
app.listen(3000);