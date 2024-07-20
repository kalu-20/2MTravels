const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3000;

app.use(cors())
app.use(express.json());

app.use('/', (req, res) => {
    res.status(200).send({ msg: "hola mundo" });
});
app.use((res, req) => {
    res.status(404).send({ msg: "error, recurso no encontrado." });
});

app.listen(PORT, () => {
    console.log(`Server listen on port: ${PORT}.`)
});
