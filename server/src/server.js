// ES6-moduler
import express from "express";
import Database from "better-sqlite3";
import cors from "cors";

// Anslut till SQLite-databasen (skapar en ny fil om den inte finns)
const db = new Database("./db/products.db", {
  verbose: console.log,
});

const port = 8000;

const app = express();

app.use(
  cors({
    origin: "http://localhost:3002", // Allow only requests from this origin
  })
);
app.use(express.json());

// TODO: Implementera web API som returnerar studerande (/api/students).
// Informationen ska hämtas från databas, se wireframe för information.

app.get("/api/products", (req, res) => {
  const products = db.prepare("SELECT * FROM products").all();
  res.json(products);
});

app.get("/api/products/similiar", (req, res) => {
  const excludeUrl = req.query.exclude;
  const includeBrand = req.query.includeBrand;

  if (!excludeUrl || !includeBrand) {
    return res.status(400).json({ error: "Exclude parameter is required" });
  }

  const similarProducts = db
    .prepare(
      "SELECT * FROM products WHERE url != ? AND brand = ? ORDER BY RANDOM() LIMIT 3"
    )
    .all(excludeUrl, includeBrand);

  console.log("Similar products found:", similarProducts); // Debug log

  res.json(similarProducts);
});

app.get("/api/products/:url", (req, res) => {
  const url = req.params.url;
  // console.log("Requested product URLfgdfgdf:", url); // Debugging log
  const product = db.prepare("SELECT * FROM products WHERE url = ?").get(url);

  if (!product) {
    console.log("Product not found in database!");
    return res.status(404).json({ error: "Product not found" });
  }

  // console.log("Product found:", product);
  res.json(product);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
