import React from 'react'

const WeatherInfo = props => {
  return(
    <div className='row justify-content-center'>
      <div className='d-flex flex-wrap justify-content-around'>
        {
          props.data ? props.data.map((each, index) => (
            <div className='mt-2 p-2 bg-light mx-lg-2' key={index}>
              <div className=''>
                <div>
                  <img src={each.icon_url} alt='weather icon'/>
                </div>
                <div>
                  <div>{each.conditions}</div>
                  <div className=''>
                    {`${each.date.weekday_short} ${each.date.month}/${each.date.day}`}
                  </div>
                  <div className='small'>High {each.high.fahrenheit}°</div>
                  <div className='small'>Low {each.low.fahrenheit}°</div>
                </div>
              </div>
              <div className='small'>
                {`${each.pop}% chance of rain / ${each.qpf_allday.in}in`}
              </div>
              <hr />
              <p className='small'>
                {`Humidity ${each.avehumidity}°. Winds ${each.maxwind.dir} at
                ${each.avewind.mph} to ${each.maxwind.mph} mph.`}
              </p>
            </div>
          )) : null
        }
      </div>
    </div>
  )
}

export default WeatherInfo


// props.data.map((each, index) => (
//   each.forecast
// ))
