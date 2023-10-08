function calculateTotalSalesWithTax(products, tax) {
  const price = products.reduce(
    (acc, cur) => acc + cur.quantity * cur.price,
    0
  );
  const taxAmount = (price * tax) / 100;
  return price + taxAmount;
}

module.exports = calculateTotalSalesWithTax;
