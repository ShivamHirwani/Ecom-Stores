function sortProducts(products, sortCriteria) {
  switch (sortCriteria) {
    case "lowestPrice":
      return products.sort((a, b) => a.price - b.price);
    case "highestPrice":
      return products.sort((a, b) => b.price - a.price);
    case "newest":
      return products.sort((a, b) => b.date - a.date);
    case "mens":
      return products.filter(product => product.category === "men").sort((a, b) => b.date - a.date);
    case "womens":
      return products.filter(product => product.category === "women").sort((a, b) => b.date - a.date);
    default:
      return products;
  }
}
