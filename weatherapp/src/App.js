import React, { useState } from "react";
import axios from "axios";

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&,uk&APPID=6eb404aa5cfdce082b8c969fdb85309e`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input type="text" onKeyPress={searchLocation} value={location} onChange={event => setLocation(event.target.value)} placeholder='enter' />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div>


            <p>Wind_Humidity</p>
            {data.main ? <h1>{data.wind.speed}_{data.main.humidity}</h1> : null}


            <div className="bold">
              <p>Temperature</p>
              {data.main ? <h1>{(data.main.temp-32/1.8000).toFixed(2)}</h1> : null}


              <p>Feels Like</p>
              {data.main ? <h1>{(data.main.feels_like-32/1.8000).toFixed(2)}</h1> : null}
            </div>
            

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;