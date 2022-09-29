const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db/db-connection.js');

const app = express();

const PORT = 5005;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route /api
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Port 5005' });
});

// API for endangered species
app.get('/api/species', cors(), async (req, res) => {
  try {
    const { rows: species } = await db.query('SELECT * FROM species;');
    res.send(species);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

// API for individual endangered animals
app.get('/api/individual', cors(), async (req, res) => {
  try {
    const { rows: individual } = await db.query('SELECT * FROM individual;');
    res.send(individual);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

// API for sightings 
app.get('/api/sightings', cors(), async (req, res) => {
  try {
    const { rows: sightings } = await db.query('SELECT * FROM sightings;');
    res.send(sightings);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

// create the POST request for individual sightings
// app.post('/api/sightings', cors(), async (req, res) => {
//   const newSighting = {
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//   };
//   console.log([newUser.firstname, newUser.lastname]);
//   const result = await db.query(
//     'INSERT INTO students(firstname, lastname) VALUES($1, $2) RETURNING *',
//     [newUser.firstname, newUser.lastname],
//   );
//   console.log(result.rows[0]);
//   res.json(result.rows[0]);
// });

// create the POST request for individual sightings
app.post('/api/sightings', cors(), async (req, res) => {
  const newSighting = {
    sighting_date: req.body.sighting_date,
    individual: req.body.individual,
    location: req.body.location,
    healthy: req.body.healthy,
    created_on: Date,
    email: req.body.email

  };
  console.log([newSighting.sighting_date, newSighting.individual]);
  const result = await db.query(
    'INSERT INTO sightings(sighting_date, individual, location, healthy, created_on, email) VALUES($1, $2) RETURNING *',
    [newUser.firstname, newUser.lastname],
  );
  console.log(result.rows[0]);
  res.json(result.rows[0]);
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Bruh bruh, we still live on ${PORT}`);
});
