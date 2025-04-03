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
    origin: "http://localhost:3002",
  })
);
app.use(express.json());

app.get("/api/products", (req, res) => {
  const products = db.prepare("SELECT * FROM products").all();
  res.json(products);
});

app.get("/api/search", (req, res) => {
  const query = req.query.q;
  const searchQuery = `%${query}%`;
  const results = db
    .prepare("SELECT * FROM products WHERE name LIKE ? OR brand LIKE ?")
    .all([searchQuery, searchQuery]);
  res.json(results);
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

  console.log("Similar products found:", similarProducts);

  res.json(similarProducts);
});

app.get("/api/products/:url", (req, res) => {
  const url = req.params.url;

  const product = db.prepare("SELECT * FROM products WHERE url = ?").get(url);

  if (!product) {
    console.log("Product not found in database!");
    return res.status(404).json({ error: "Product not found" });
  }

  res.json(product);
});

app.post("/api/products", (req, res) => {
  const {
    productName,
    productPrice,
    productPicture,
    productUrl,
    productDescription,
    productBrand,
    productSKU,
  } = req.body;

  const insert = db.prepare(
    `INSERT INTO products (name, price, picture, url, description, brand, SKU) 
     VALUES (?, ?, ?, ?, ?, ?, ?)`
  );

  try {
    insert.run(
      productName,
      productPrice,
      productPicture,
      productUrl,
      productDescription,
      productBrand,
      productSKU
    );

    res.status(201).json({ message: "Product added successfully!" });
  } catch (error) {
    console.error("Database Error:", error);
    res.status(500).json({ error: "Failed to add product" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
