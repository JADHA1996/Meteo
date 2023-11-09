
document.getElementById("getWeather").addEventListener("click", function() {
    const city = document.getElementById("city").value;
    const apiKey = "20507738aba672158b5a71c7ea05da97"; 
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`)
      .then(response => response.json())
      .then(data => {
        const temperature = data.main.temp - 273.15; // Convertir la température en Celsius
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        
        document.getElementById("temperature").textContent = `${temperature.toFixed(2)}°C`;
        document.getElementById("description").textContent = description;
        document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${icon}.png`;
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des données météorologiques : " + error.message);
      });
  });
  
  
  
  
  
  
  