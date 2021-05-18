import React,{useState} from 'react';


const url = `https://api.openweathermap.org/data/2.5/weather?q=bamako,ml&units=imperial&appid=${process.env.REACT_APP_API_KEY}`;


const App = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [myCity,setMyCity] = useState({
    name:'',
    temp:'',
    img:''
  });


  setTimeout(function () {
    fetch(url)
      .then(response => {
        console.log(response.status);
        return response.json();
      })
      .then(city => {
        // myCity.push(city);
        console.log(city);
        // console.log(myCity[0].main.temp);
        // console.log();
        setImageUrl(`http://openweathermap.org/img/wn/${city.weather[0].icon}`);
        return city;
      })
      .catch(err => {
        console.error(err);
      });
  }, 2000);

  // console.log(imageUrl);

  return (
    <div>
      <h1>{imageUrl}</h1>
    </div>
  )
}

export default App
