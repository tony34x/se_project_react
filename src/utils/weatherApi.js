export const getweather = (latitude, longitude, APIkey) => {
  if (!APIkey) {
    return Promise.reject(
      "Missing OpenWeather API key. Add VITE_OPENWEATHER_API_KEY to your .env.local file."
    );
  }

  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return res
      .json()
      .then((error) =>
        Promise.reject(`Error: ${res.status} - ${error.message}`)
      );
  });
};

export const filterweatherData = (data) => {
  const temperature = Math.round(data.main.temp);

  let type = "hot";

  if (temperature < 66) {
    type = "cold";
  } else if (temperature < 86) {
    type = "warm";
  }

  return {
    temperature,
    type,
  };
};
