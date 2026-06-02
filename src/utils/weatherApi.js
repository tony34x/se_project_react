export const getWeather = (latitude, longitude, apiKey) => {
  if (!apiKey) {
    return Promise.reject(
      "Missing OpenWeather API key. Add VITE_OPENWEATHER_API_KEY to your .env.local file.",
    );
  }

  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`,
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return res
      .json()
      .then((error) =>
        Promise.reject(`Error: ${res.status} - ${error.message}`),
      );
  });
};

const getWeatherType = (temperature) => {
  if (temperature < 66) {
    return "cold";
  }

  if (temperature < 86) {
    return "warm";
  }

  return "hot";
};

const getWeatherCondition = (condition) => {
  const normalizedCondition = condition.toLowerCase();

  if (["drizzle", "rain"].includes(normalizedCondition)) {
    return "rain";
  }

  if (normalizedCondition === "thunderstorm") {
    return "storm";
  }

  if (normalizedCondition === "snow") {
    return "snow";
  }

  if (normalizedCondition === "clouds") {
    return "cloudy";
  }

  if (
    [
      "mist",
      "smoke",
      "haze",
      "dust",
      "fog",
      "sand",
      "ash",
      "squall",
      "tornado",
    ].includes(normalizedCondition)
  ) {
    return "fog";
  }

  return "clear";
};

const isDay = (sunrise, sunset) => {
  const now = Date.now();
  return sunrise * 1000 < now && now < sunset * 1000;
};

export const filterWeatherData = (data) => {
  const temperature = Math.round(data.main.temp);

  return {
    city: data.name,
    temp: { F: temperature },
    type: getWeatherType(temperature),
    condition: getWeatherCondition(data.weather[0].main),
    isday: isDay(data.sys.sunrise, data.sys.sunset),
  };
};
