import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';

const PORT = 4819;
const app = express();

const corsOptions = {
    origin: 'http://localhost:4818',
};
const helmetOptions = {
    crossOriginResourcePolicy: false,
};

app.use(cors(corsOptions));
app.use(helmet(helmetOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    return res.send('Home page');
});

app.get('/about', (req, res) => {
    return res.send('About page');
});

// GET = suzinoti info
// POST = sukurti nauja irasa
// PUT = paredaguoti irasa - visa (overwrite)
// PATCH = paredaguoti irasa - dalinis
// DELETE = istrinti irasa

app.get('/api/calc', (req, res) => {
    return res.send(JSON.stringify({
        result: 123,
    }));
});

app.post('/api/calc', (req, res) => {
    const data = req.body;
    const { pirmas, antras } = data;

    if (isNaN(+pirmas)) {
        return res.send(JSON.stringify({
            result: 'Pirmoji reiksme nera skaicius',
        }));
    }

    if (isNaN(+antras)) {
        return res.send(JSON.stringify({
            result: 'Antroji reiksme nera skaicius',
        }));
    }

    return res.send(JSON.stringify({
        result: +pirmas + +antras,
    }));
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});