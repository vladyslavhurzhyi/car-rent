const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7f53c794bamsh44a0092fbe18485p1e5ed5jsna030a49b5bda",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

async function fetchCars(filters) {
  const { manufacturer, model, fuel, year, limit } = filters;
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export default fetchCars;
