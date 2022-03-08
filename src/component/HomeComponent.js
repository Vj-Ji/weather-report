import React, { useEffect, useState } from 'react'
import './Home.css'
import WeatherComponent from './WeatherComponent';
var axios = require("axios").default;

function HomeComponent() {
    let selectedCountry="";
    let selectedCity="";
    let dC="India";
    let dCity="Jaipur"
    const [countries, setCountries] = useState([])
    let cities=[];
    const [weatherData, setWeatherData] = useState()
    useEffect(() => {
        getCountries();
        getWeather(dCity,dC);
    }, [])

    const getCountries=async()=>{
        await axios.get("https://restcountries.com/v2/all?fields=name").then(function (response) {
            response.data.forEach(country=>{
                countries.push(country.name)
            })
            countries.sort();
            countries.forEach(country=>{
                document.getElementById("country").innerHTML=document.getElementById("country").innerHTML+`<option value="${country}">${country}</option>`
            })
        }).catch(function (error) {
            console.error(error);
        });
}
const getCities=async (cg)=>{
    await axios.post("https://countriesnow.space/api/v0.1/countries/cities",{"country": cg}).then((response)=>{
        response.data.data.forEach(city=>{
            cities.push(city)
        })
    }).catch((error)=>{
        console.log(error)
    });
    cities.sort();
    document.getElementById("city").innerHTML=``;
    cities.forEach(city=>{
        document.getElementById("city").innerHTML=document.getElementById("city").innerHTML+`<option value="${city}">${city}</option>`
    })
}
const cselected=async (e)=>{
    const cid=document.getElementById('country');
    selectedCountry=cid.options[cid.selectedIndex].text
    getCities(selectedCountry)
}
const ciselected=async (e)=>{
    const cid=document.getElementById('city');
    selectedCity=cid.options[cid.selectedIndex].text
    getWeather(selectedCity,selectedCountry);
}
const getWeather=async (city,country)=>{
    var options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/weather',
        params: {
          q: city,country
        },
        headers: {
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          'x-rapidapi-key': '4ba3a12e14mshf36c705c275fdbfp16eeaejsn75f43e7dedd4'
        }
      };
    const {data} = axios.request(options).then(function (response) {
        console.log(response.data);
        setWeatherData(response.data)
    }).catch(function (error) {
        console.error(error);
    });
}
  return (
      <>
    <div className='selector'>
        <div className="select">
<select name="country" id="country" onChange={cselected} width="5000px"></select>
        </div>
        
        <div className="select">
<select name="city" id="city" onChange={ciselected} width="5000px"></select>
        </div>
    </div>

{weatherData && <div>
    <WeatherComponent weather={weatherData}/>
    </div>}

      </>
  )
}

export default HomeComponent