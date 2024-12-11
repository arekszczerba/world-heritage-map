const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/locations', (req, res) => {
  const { category } = req.query; 

  const csvFilePath = path.join(__dirname, '../public/whc-sites.csv');
  fs.readFile(csvFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading CSV file:', err);
      return res.status(500).send('Error reading CSV file');
    }

    const parsedData = Papa.parse(data, { header: true });
    let locations = parsedData.data;

    if (category) {
      locations = locations.filter((location) => location.category === category);
    }

    res.json(locations);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});