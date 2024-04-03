import express from 'express';
import cors from 'cors';


const app = express();


const corsOptions = {
    origin: 'http://localhost:4830',
};

app.use(cors(corsOptions));



app.get('/', (req, res) => {
    return res.send('Home page');
});

//////////////////////

const students = [
    {
        "name": "Jonas",
        "age": 99,
        "marks": [10, 2, 8, 4, 6],
    },
    {
        "name": "Maryte",
        "age": 88,
        "marks": [9, 9, 9, 9, 9, 9, 9, 9],
    },
    {
        "name": "Petras",
        "age": 77,
        "marks": [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
        "name": "Ona",
        "age": 66,
        "marks": [1010, 101, 0, 10, 6],
    }
];

let currentIndex = 0;

app.get('/api/student', (req, res) => {
    const student = students[currentIndex];
    currentIndex = (currentIndex + 1) % students.length;
    res.json(student);
});

app.get('/api/allstudents', (req, res) => {
    res.json(students);
});



//////////////////////

const PORT = 4831;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});