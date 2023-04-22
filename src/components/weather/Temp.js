import React from 'react'
import "./style.css"
import Weathercard from './Weathercard';

const Temp = () => {
    const [searchValue,setsearchValue]=React.useState("pune");
    const [tempInfo,SettempInfo]=React.useState({});
    const getWeatherInfo=async ()=>{
            try {
                    let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=fb01f0668af698bb79f67e456c6c4db6`
                    const res=await fetch(url);
                    const data=await res.json();
                    // console.log(data)

                    const {temp,humidity,pressure}=data.main
                    const {main:weathermood}= data.weather[0];
                    const {name}=data
                    // console.log(temp)
                    const {speed}=data.wind
                    const {country,sunset}=data.sys
                    const myNewWeatherInfo={
                        temp,humidity,pressure,weathermood,name,speed,country,sunset
                    }
                    SettempInfo(myNewWeatherInfo)
                    console.log(myNewWeatherInfo)


            }
            catch(error){
                console.log(error);
            }
    }
    React.useEffect(()=>{getWeatherInfo()},[]);
  return(
  <>
   <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e)=> setsearchValue(e.target.value)}
  
          />

          <button
            className="searchButton"
            type="button" onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>
      <Weathercard tempInfo={tempInfo}/>
      
  </>
  )
}

export default Temp