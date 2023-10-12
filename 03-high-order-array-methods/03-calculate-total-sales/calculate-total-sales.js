const calculateTotalSalesWithTax = (products, tax) => {
  const amount = products.reduce((acc, cur) => {
    acc += cur.price * cur.quantity;

    return acc;
  }, 0);
  const taxAmount = (amount * tax) / 100;
  return amount + taxAmount;
};

module.exports = calculateTotalSalesWithTax;
