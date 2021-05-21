import React, { useState, useEffect } from 'react';
import Item from "./Components/Item";
import Input from './Components/Input';


// const country = 'London';


const unit = 'imperial';


const App = () => {

  const [url, setUrl] = useState('');
  const [cityName, setCityName] = useState('');
  const [listCity, setListCity] = useState([]);
  const [myCity, setMyCity] = useState({
    name: '',
    temp: '',
    img: '',
    description: '',
    feels_like: '',
    humitidy: '',
    temp_min: '',
    temp_max: '',
    country: ''
  });


  function handleChange(e, myCityName) {
    setCityName(myCityName);
  }

  useEffect(() => {
    setUrl(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unit}&appid=${process.env.REACT_APP_API_KEY}`);
  }, [cityName]);

  useEffect(() => {
    //add the city to list city
    setListCity(prev => [...prev, myCity]);

    console.log(listCity);

  }, [myCity]);

  function handleClick(e) {
    e.preventDefault();
    console.log('---------', url);
    fetch(url)
      .then(response => {
        console.log(response.status);
        return response.json();
      })
      .then(city => {

        setMyCity({
          name: city.name,
          temp: city.main.temp,
          img: `http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`,
          description: city.weather[0].description,
          feels_like: city.main.feels_like,
          humidity: city.main.humidity,
          temp_min: city.main.temp_min,
          temp_max: city.main.temp_max,
          country: city.sys.country
        });
        return city;
      })
      .catch(err => {
        console.error(err);
      });
  }

  return (
    <>

      <Input button={(e) => handleClick(e)} change={(e, cityName) => handleChange(e, cityName)} />
      <div className="List__item">

        {listCity.map(city => {
          return city.name ? <Item myCity={city} /> : ''
        })}


      </div>


    </>
  )
}

export default App;
