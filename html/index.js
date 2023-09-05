const inputElement = document.getElementById('input');
const locationHeader = document.getElementById('locationHeader');
const temperatureElement = document.getElementById('temperature');
const humidityElement = document.getElementById('humidity');
const weatherDescriptionElement = document.getElementById('weatherDescription');
const day2Background = document.getElementById('next2')
const day3Background = document.getElementById('next3')
const day4Background = document.getElementById('next4')
const weatherImageElement = document.getElementById('weaterImage');
const next3D = document.getElementById('next');
let buttonElement = document.getElementById('button');
let lanButtonElement=document.getElementById('toggleLanguageButton')
const apiKey = 'ac41bed561417ff210f21d5ff0aab487';
const weatherTranslations = {
    'Thunderstorm': 'סופת ברקים',
    'Drizzle': 'טפטוף',
    'rain': 'גשום',
    'snow': 'שלג',
    'clear': 'שמיים נקיים',
    'clear sky': 'שמיים נקיים',
    'clouds': 'מעונן',
    
};
const humidityTramslate={
    'humidity': 'לחות'}
async function fetchWeatherData(cityName) {
    let isFahrenheit = false;
    let isWeather=false;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    function updateBackgroundImage(weatherValue) {
        const image1 = document.getElementById('image1');
        const image2 = document.getElementById('image2');
        const image3 = document.getElementById('image3');
        const image4 = document.getElementById('image4');
        const image5 = document.getElementById('image5');
        const weatherContainer = document.querySelector('.details'); 
        if (weatherValue>800&&weatherValue<=804) {
            document.body.style.backgroundImage = 'url(" https://media.istockphoto.com/id/512218646/photo/storm-sky-rain.jpg?s=612x612&w=0&k=20&c=RoUDM9BMwqW8NkPXjzAzlDKCHPOmdZhmmeT3jGA2EaM=")'; 
            temperatureElement.style.backgroundColor= 'grey';
            humidityElement.style.backgroundColor='grey';
            weatherDescriptionElement.style.backgroundColor='grey';
            inputElement.style.backgroundColor='grey'
            day2Background.style.backgroundColor='grey'
            day3Background.style.backgroundColor='grey'
            day4Background.style.backgroundColor='grey'
            image1.style.display = 'none';
            image2.style.display = 'none';
            image3.style.display= 'block';
            image4.style.display = 'none';
            image5.style.display = 'none';
            buttonElement.style.backgroundColor='grey'
            buttonElement.style.color='white'
            lanButtonElement.style.backgroundColor='grey'
            lanButtonElement.style.color='white'
        } else if(weatherValue>=500&&weatherValue<=531) {
            document.body.style.backgroundImage = 'url("https://e0.pxfuel.com/wallpapers/119/476/desktop-wallpaper-rain-on-glass-rainy-sky.jpg")';
            temperatureElement.style.backgroundColor= 'black';
            humidityElement.style.backgroundColor='black';
            weatherDescriptionElement.style.backgroundColor='black';
            inputElement.style.backgroundColor='black';
            day2Background.style.backgroundColor='black'
            day3Background.style.backgroundColor='black'
            day4Background.style.backgroundColor='black'
            image1.style.display = 'none';
            image2.style.display = 'none';
            image3.style.display = 'none';
            image4.style.display= 'block';
            image5.style.display = 'none';
            buttonElement.style.backgroundColor='black'
            buttonElement.style.color='white'
            buttonElement.style.borderColor='white'
            lanButtonElement.style.backgroundColor='black'
            lanButtonElement.style.color='white'
            lanButtonElement.style.borderColor='white'
        }else if(weatherValue>=600&&weatherValue<=622){ 
            document.body.style.backgroundImage='url("https://img.freepik.com/free-photo/3d-render-snowy-landscape-with-falling-snowflakes_1048-13550.jpg?w=2000")'
            temperatureElement.style.backgroundColor= 'grey';
            humidityElement.style.backgroundColor='grey';
            weatherDescriptionElement.style.backgroundColor='grey';
            inputElement.style.backgroundColor='grey';
            day2Background.style.backgroundColor='grey'
            day3Background.style.backgroundColor='grey'
            day4Background.style.backgroundColor='grey'
            image1.style.display = 'none';
            image2.style.display = 'none';
            image3.style.display = 'none';
            image4.style.display= 'none';
            image5.style.display = 'block';
            buttonElement.style.backgroundColor='grey'
            buttonElement.style.color='white'
            lanButtonElement.style.backgroundColor='grey'
            lanButtonElement.style.color='white'
        }
        
        else if(weatherValue===800){ document.body.style.backgroundImage = 'url("https://c4.wallpaperflare.com/wallpaper/7/358/489/clouds-blue-sky-4k-sky-landscape-blue-white-wallpaper-preview.jpg")'
        temperatureElement.style.backgroundColor= 'rgb(252, 206, 88)';
        humidityElement.style.backgroundColor='rgb(252, 206, 88)';
        weatherDescriptionElement.style.backgroundColor='rgb(252, 206, 88)';
        inputElement.style.backgroundColor='rgb(0, 179, 255)';
        day2Background.style.backgroundColor='rgb(252, 206, 88)'
        day3Background.style.backgroundColor='rgb(252, 206, 88)'
        day4Background.style.backgroundColor='rgb(252, 206, 88)'
        image1.style.display= 'block';
        image2.style.display = 'none';
        image3.style.display = 'none';
        image4.style.display = 'none';
        image5.style.display = 'none';
        buttonElement.style.backgroundColor='rgb(0, 179, 255)'
        buttonElement.style.color='white'
        lanButtonElement.style.backgroundColor='rgb(0, 179, 255)'
        lanButtonElement.style.color='white'
    }else if(weatherValue>=300&&weatherValue<=321){
        document.body.style.backgroundImage='url("https://e0.pxfuel.com/wallpapers/119/476/desktop-wallpaper-rain-on-glass-rainy-sky.jpg")'
        temperatureElement.style.backgroundColor= 'grey';
        humidityElement.style.backgroundColor='grey';
        weatherDescriptionElement.style.backgroundColor='grey';
        inputElement.style.backgroundColor='grey';
        day2Background.style.backgroundColor='grey'
        day3Background.style.backgroundColor='grey'
        day4Background.style.backgroundColor='grey'
        image1.style.display = 'none';
        image2.style.display = 'none';
        image3.style.display = 'none';
        image4.style.display= 'block';
        image5.style.display = 'none';
        buttonElement.style.backgroundColor='grey'
        buttonElement.style.color='white'
        lanButtonElement.style.backgroundColor='grey'
            lanButtonElement.style.color='white'
    }else if(weatherValue>=200&&weatherValue<=232){
        document.body.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2020/10/08/04/53/lightning-5636948_1280.jpg")';
        temperatureElement.style.backgroundColor= 'black';
        humidityElement.style.backgroundColor='black';
        weatherDescriptionElement.style.backgroundColor='black';
        inputElement.style.backgroundColor='black';
        day2Background.style.backgroundColor='black'
        day3Background.style.backgroundColor='black'
        day4Background.style.backgroundColor='black'
        image1.style.display = 'none';
        image2.style.display = 'none';
        image3.style.display = 'none';
        image4.style.display= 'block';
        image5.style.display = 'none';
        buttonElement.style.backgroundColor='black'
        buttonElement.style.color='white'
        lanButtonElement.style.backgroundColor='black'
        lanButtonElement.style.color='white'
        
    }else{
        document.body.style.backgroundImage = 'url(" https://media.istockphoto.com/id/512218646/photo/storm-sky-rain.jpg?s=612x612&w=0&k=20&c=RoUDM9BMwqW8NkPXjzAzlDKCHPOmdZhmmeT3jGA2EaM=")'; 
        temperatureElement.style.backgroundColor= 'grey';
        humidityElement.style.backgroundColor='grey';
        weatherDescriptionElement.style.backgroundColor='grey';
        inputElement.style.backgroundColor='grey'
        day2Background.style.backgroundColor='grey'
        day3Background.style.backgroundColor='grey'
        day4Background.style.backgroundColor='grey'
        buttonElement.style.backgroundColor='grey'
        lanButtonElement.style.backgroundColor='grey'
    }}
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const temperature = data.main.temp.toFixed(1);
        const fahrenheit= ((temperature*1.8)+32).toFixed(1)
        const humidity = data.main.humidity;
        const weatherDescription = data.weather[0].description;
        const weatherMain=data.weather[0].main;
        const translatedWeatherDescription = translateWeatherDescription(weatherMain);
        const weatherValue=data.weather[0].id;
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDayIndex = new Date().getDay();
        const currentDay = days[currentDayIndex];
        updateBackgroundImage(weatherValue);
        locationHeader.textContent = cityName;
        const currentDayElement = document.getElementById('currentDay');
        currentDayElement.textContent = currentDay;
        toggleLanguageButton.addEventListener("click", function() {
            if (isWeather) {
                weatherDescriptionElement.textContent = `Weather: ${weatherDescription}`;
                humidityElement.textContent = `Humidity: ${humidity}%`;
                const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                const currentDayIndex = new Date().getDay();
                const currentDay = days[currentDayIndex];
                currentDayElement.textContent = currentDay;
                isWeather = false;
                lanButtonElement.textContent='He';
                inputElement.placeholder='Search country or city'
            } else {
                weatherDescriptionElement.textContent = `מזג אוויר: ${translatedWeatherDescription}`;
                humidityElement.textContent = `לחות: ${humidity}%`;
                const days = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];
                const currentDayIndex = new Date().getDay();
                const currentDay = days[currentDayIndex];
                currentDayElement.textContent = currentDay;
                currentDayElement.style.fontSize="3vw"
                isWeather = true;
                lanButtonElement.textContent='En';
                weatherDescriptionElement.style.fontSize='2vw'
                inputElement.placeholder='הכנס מדינה או עיר'
            }
        });

        buttonElement.addEventListener('mouseenter', () => {
          buttonElement.style.borderColor = 'skyblue';
        });
    
        buttonElement.addEventListener('mouseleave', () => {
          buttonElement.style.borderColor = 'lightgray';
        });
        lanButtonElement.addEventListener('mouseenter', () => {
          lanButtonElement.style.borderColor = 'skyblue';
        });
    
        lanButtonElement.addEventListener('mouseleave', () => {
          lanButtonElement.style.borderColor = 'lightgray';
        });
        button.addEventListener("click", function() {
            if (isFahrenheit) {
                temperatureElement.textContent = `${temperature}°C`; 
                isFahrenheit = false;
                buttonElement.textContent='°F';
            } else {
                temperatureElement.textContent = `${fahrenheit}°F`; 
                isFahrenheit = true;
                buttonElement.textContent='°C';
            }
        });
        function translateWeatherDescription(main) {
            return weatherTranslations[main.toLowerCase()] || main;
        }
        temperatureElement.textContent = `${temperature}°C`;
        humidityElement.textContent = `Humidity: ${humidity}%`;
        weatherDescriptionElement.textContent = `Weather: ${weatherDescription}`;
        fetchWeather(cityName)
    } catch (error) {
        alert('unvalid input', error);
    }
}
async function fetchWeather(cityName){
    let isFahrenheit1 = false;
    const foreCastKey = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`;
    
    const forecastResponse = await fetch(foreCastKey);
    const forecastData = await forecastResponse.json();
    const forecast= forecastData.list
    let j=8
    for(i=1;i<=3;i++){
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDayIndex = new Date().getDay();
        const nextDayIndex = (currentDayIndex +i) % 7;
        const nextDay = days[nextDayIndex];
        const days1 = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];
        const currentDayIndex1 = new Date().getDay();
        const nextDayIndex1 = (currentDayIndex1 +i) % 7;
        const nextDay1 = days1[nextDayIndex1];
     const forecastTemp2=forecast[j].main.temp.toFixed(1)
     const fahren=((forecastTemp2*1.8)+32).toFixed(1)
    const  forecastHumidity2=forecast[j].main.humidity.toFixed(1)
      j=j+8
      const dayForecast = document.getElementById(`day${i}`)
        const forecastTempElement = document.getElementById(`temp${i}`);
        const forecastHumidity3=document.getElementById(`humidity${i}`)
        button.addEventListener("click", function() {
            if (button.textContent === '°C') {
                forecastTempElement.textContent = `${fahren}°F`; 
                button.textContent = '°C';
            } else {
                forecastTempElement.textContent = `${forecastTemp2}°C`; 
                button.textContent = '°F';
            }
        });
        toggleLanguageButton.addEventListener("click", function() {
            if (toggleLanguageButton.textContent === 'He') {
                dayForecast.textContent=`${nextDay}`
                forecastHumidity3.textContent = `humidity: ${forecastHumidity2}%`;
                toggleLanguageButton.textContent = 'He';
            } else {
                dayForecast.textContent=`${nextDay1}`
                forecastHumidity3.textContent = `לחות:${forecastHumidity2}%`;
                
                toggleLanguageButton.textContent = 'En';
            }
        });
        
        
        dayForecast.textContent=`${nextDay}`
        forecastTempElement.textContent = `${forecastTemp2}°C`;
        forecastHumidity3.textContent = `humidity: ${forecastHumidity2}%`;
    }
}
document.addEventListener('DOMContentLoaded', function() {
    fetchWeatherData('Tel Aviv'); 
});

inputElement.addEventListener('keydown', async function(event) {
    if (event.key === 'Enter') {
        const cityName = inputElement.value;
        fetchWeatherData(cityName);
    }
});

