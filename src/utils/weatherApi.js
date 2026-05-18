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

const filterweatherData = (data) => {
const
}
