const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Route = require("../routes/routes");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(Route);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
