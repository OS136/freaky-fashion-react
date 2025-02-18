import express from "express";

const port = 8000;

const app = express();

// TODO: Implementera web API som returnerar studerande (/api/students). 
// Informationen ska hämtas från databas, se wireframe för information.

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
