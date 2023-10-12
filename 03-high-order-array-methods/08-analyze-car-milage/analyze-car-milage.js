function analyzeCarMileage(cars) {
  const result = cars.reduce(
    (res, cur) => {
      cur.mileage > cars[0].mileage && (res.highestMileageCar = cur);

      cur.mileage < cars[0].mileage && (res.lowestMileageCar = cur);

      res.totalMileage += cur.mileage;
      res.averageMileage = parseFloat(
        (res.totalMileage / cars.length).toFixed(2)
      );

      return res;
    },
    {
      highestMileageCar: cars[0],
      lowestMileageCar: cars[0],
      totalMileage: 0,
      averageMileage: 0,
    }
  );
  return result;
}

module.exports = analyzeCarMileage;
