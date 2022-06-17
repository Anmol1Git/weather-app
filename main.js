let userform = document.querySelector('form');
let userinput = document.querySelector('input');
let container = document.querySelector('.container');
let wcity = document.getElementById('city');
let wcountry = document.getElementById('country');
let weatherd = document.getElementById('howwas');
let h1 = document.querySelector('h1');
let wspeed = document.getElementById('speed');
let whumidity = document .getElementById('humidity');
let winddir = document.getElementById('wind-direction');
let cimg = document.querySelector('img');


userform.addEventListener('submit', wfunc);


async function wfunc(e){
    e.preventDefault()

    let resta = await fetch(`https://api.weatherapi.com/v1/current.json?key=9dba512d280f4ac39ed80615221606&q=${userinput.value}&aqi=yes`)
    let data = await resta.json()

    if(!data.error === false){
        window.alert('Type correct City-name')
    }else{
        let cityname = data.location.name
        let countryname = data.location.country
        let tempr = data.current.temp_c
        let humi = data.current.humidity
        let weather = data.current.condition.text
        let winds = data.current.wind_kph
        let windd = data.current.wind_dir
        let icon = data.current.condition.icon



        wcity.innerText = `${cityname}, `
        wcountry.innerText = countryname
        weatherd.innerText = weather
        h1.innerText = `${tempr}°C`
        whumidity.innerText = `Humidity: ${humi}`
        wspeed.innerText = `Wind-speed: ${winds}kmph`
        winddir.innerText = `Wind-direction: ${windd}`
        cimg.setAttribute("src", icon)
    



        console.log(container)
        if(tempr>20){
            container.style.backgroundImage = "url('./assets/Sunburst_lake-1.jpg')"
        }
    }

    userform.reset()

}