import React, { useEffect, useState } from 'react'

function WeatherComponent(data) {
    const {weather} =data;
    useEffect(() => {
        getData(weather)
        // const date=new Date(weather.dt*1000)
        // console.log(date)
        // console.log(weather.name)
    }, [data])
    const [name, setName] = useState("");
    const [date, setDate] = useState(new Date())
    const [status, setStatus] = useState("")
    const imgurl=`owf owf-${weather.weather[0].id} owf-5x`
const getData = (weather) =>{
    setName(weather.name);
console.log(imgurl)
    // getTime();
    const unixTimestamp = weather.dt
    const date1 = new Date(unixTimestamp*1000);
    setDate(date1)
    console.log(weather.weather[0].main)
    setStatus(weather.weather[0].main)
}




  return (<>
<div>


<section className="vh-100" style={{backgroundColor: "lightgray"}}>
  <div className="container py-5 h-100">

    <div className="row d-flex justify-content-center align-items-center h-100}">
      <div className="col-md-8 col-lg-6 col-xl-4">

        <div className="card" style={{color: "#4B515D", borderRadius: "35px"}}>
          <div className="card-body p-4">

            <div className="d-flex">
              <h6 className="flex-grow-1">{name}</h6>
              {/* <h6>{((new Date()).getTime()+ (new Date().getTimezoneOffset(weather.timezone))).toLocaleString()}   15:07</h6> */}
              {/* <h6>{(new Date()).getTimezoneOffset(weather.timezone)/60}   15:07</h6> */}
              <h6> : {date.getHours()} : {date.getMinutes()} : {date.getSeconds()}</h6>

            </div>

            <div className="d-flex flex-column text-center mt-5 mb-4">
              <h6 className="display-4 mb-0 font-weight-bold" style={{color: "#1C2331"}}> {(weather.main.temp-273.15).toFixed(2)} C </h6>
              <span className="small" style={{color: "#868B94"}}>{status}</span>
            </div>

            <div className="d-flex align-items-center" style={{color:"red"}}>
              <div className="flex-grow-1" style={{fontSize: "1rem"}}>
                <div><i className="fas fa-wind fa-fw" style={{color: "#868B94"}}></i> <span className="ms-1">Wind Speed - {weather.wind.speed } m/s </span></div>
                <div><i className="fas fa-tint fa-fw" style={{color: "#868B94"}}></i> <span className="ms-1">Humidity - {weather.main.humidity} % </span></div>
              </div>
              <div style={{marginLeft:"20px"}}>
                  <i className={imgurl}></i>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

  </div>
</section>



</div>




  </>
  )
}

export default WeatherComponent