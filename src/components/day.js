
const Day = ({day}) => {
    return(
        <div className="col-lg-2 day">
            <p style={{color:'#F4F4F9'}}>{day.date}</p>
            <img style={{width:100}} src={day.day.condition.icon} />
            <h6>{day.day.condition.text}</h6>
            <h5>{day.day.maxtemp_c} &#176;C</h5>
            <p className="daily">{day.day.daily_chance_of_rain}% for rain<br/>
            {day.day.maxwind_kph} kph
            </p>
        </div>
    )
}

export default Day;