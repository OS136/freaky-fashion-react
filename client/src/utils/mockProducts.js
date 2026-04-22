export const mockProducts = [
  {
    id: 1,
    name: "Classic Denim Jacket",
    brand: "Urban North",
    description: "A timeless denim jacket with a relaxed fit.",
    price: 799,
    SKU: "FF-1001",
    url: "classic-denim-jacket",
    picture:
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Soft Knit Sweater",
    brand: "Nordic Thread",
    description: "Soft knit sweater made for everyday comfort.",
    price: 649,
    SKU: "FF-1002",
    url: "soft-knit-sweater",
    picture:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Tailored Wool Coat",
    brand: "Urban North",
    description: "Elegant wool coat with a modern tailored silhouette.",
    price: 1599,
    SKU: "FF-1003",
    url: "tailored-wool-coat",
    picture:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Relaxed Chino Pants",
    brand: "City Basics",
    description: "Relaxed chinos for workdays and weekends.",
    price: 549,
    SKU: "FF-1004",
    url: "relaxed-chino-pants",
    picture:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Minimal Leather Sneakers",
    brand: "City Basics",
    description: "Clean leather sneakers with lightweight cushioning.",
    price: 899,
    SKU: "FF-1005",
    url: "minimal-leather-sneakers",
    picture:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Oversized Hoodie",
    brand: "Nordic Thread",
    description: "Cozy oversized hoodie in brushed cotton fleece.",
    price: 499,
    SKU: "FF-1006",
    url: "oversized-hoodie",
    picture:
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=800&q=80",
  },
];

export const getMockProductByUrl = (url) =>
  mockProducts.find((product) => product.url === url) ?? null;

export const getMockSimilarProducts = (excludeUrl, brand) =>
  mockProducts
    .filter((product) => product.url !== excludeUrl && product.brand === brand)
    .slice(0, 3);

export const getMockSearchResults = (query) => {
  const search = (query ?? "").trim().toLowerCase();
  if (!search) return mockProducts;

  return mockProducts.filter((product) => {
    const name = product.name.toLowerCase();
    const brand = product.brand.toLowerCase();
    return name.includes(search) || brand.includes(search);
  });
};
