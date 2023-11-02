const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7f53c794bamsh44a0092fbe18485p1e5ed5jsna030a49b5bda",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

export const fetchCars = async (filters) => {
  const { manufacturer, model, fuel, year, limit } = filters;
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&year=${year}&fuel_type=${fuel}&limit=${limit}`;
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const generateImageUrl = (car, angle) => {
  const { make, model, year } = car;

  const url = new URL("https://cdn.imagin.studio/getimage");

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("modelYear", year);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};
