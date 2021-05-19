import React, { useState } from 'react';
import Item from "./Components/Item";


const country = 'London';

const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`;


const App = () => {
  // const [temp, setTemp] = useState(0);
  // const [imageUrl, setImageUrl] = useState('');
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




  function handleClick() {
    fetch(url)
      .then( response => {
        console.log(response.status);
        return response.json();
      })
      .then( city => {

        setMyCity({
          name: city.name,
          temp: city.main.temp,
          img: `http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`,
          description: city.weather[0].description,
          feels_like: city.main.feels_like,
          humitidy: city.main.humidity,
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
      {/*    <h1>{myCity.name},{myCity.country}</h1>
         <h2>{myCity.temp}</h2>
         <div>
           <h2>{myCity.description}
             <img src={myCity.img} alt={myCity.name} />
           </h2>
         </div>
         <div>
           <h2>Feels like {myCity.feels_like} waterDropPic {myCity.humitidy}%</h2>
         </div>
         <div>
           <h2>RedupArrow {myCity.temp_max} blueDownArrow {myCity.temp_min}</h2>

         </div> */}
      
      <button type="" onClick={handleClick}>click</button>
      <Item myCity={myCity}/>
    </>
  )
}

export default App
