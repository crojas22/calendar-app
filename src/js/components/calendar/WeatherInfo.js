import React from 'react'
import FaClockO from 'react-icons/lib/fa/clock-o'
import { connect } from 'react-redux'
import ForecastInfo from './ForecastInfo'

const WeatherInfo = props => {
  return(
    props.weather ? props.weather.map(({current_observation}, index) => (
      <div key={index}>
        <div className='row'>
          <div className='col'>
            <span className="d-block py-2 small text-muted">
              Elev {current_observation.display_location.elevation}
               {current_observation.display_location.longitude.slice(0,6)} °N,
               {current_observation.display_location.latitude.slice(0,6)} °W
            </span>
            <h3>{current_observation.display_location.full}</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6'>
            <span className='small'>
              <FaClockO/>{current_observation.observation_time}
            </span>
            <div className='d-flex justify-content-around mt-3'>
              <div className='conditions-circle my-auto'>
                <div className='text-center py-4'>
                  <span>Humidity {current_observation.relative_humidity}</span>
                  <div className='temperature'>
                    <span>
                      {current_observation.temp_f.toString().slice(0,2)}
                    </span>
                    <span>F</span>
                  </div>
                  <p>Feels {current_observation.feelslike_f}°</p>
                </div>
              </div>
              <div className='d-flex align-items-center'>
                <div className='text-center'>
                  <img style={{width: 80}} className='img-fluid'
                  src={current_observation.icon_url} alt='weather icon'/>
                  <p>{current_observation.weather}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ForecastInfo data={props.forecast} />
      </div>
    )) : <div style={{height: 300}}></div>
  )
}

const mapStateToProps = state => {
  return {
    weather: state.weatherData,
    forecast: state.forecastData
  }
}

export default connect(mapStateToProps)(WeatherInfo)
