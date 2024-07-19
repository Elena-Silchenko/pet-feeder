import { useState } from 'react'

const weekdays = [
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri'
]

const weekends = [
  'Sat',
  'Sun'
]

export default function Week () {
  const [selectedDay, setSelectedDay] = useState('')

  function handleClickDay (day) {
    setSelectedDay(day)
  }

  return (
    <div className='d-flex p-4'>
      <div className='week d-flex m-auto'>
        {
          weekdays.map((day, index) => (
            <div className={`weekday ${selectedDay === day ? 'selected' : ''}`} key={index} onClick={() => handleClickDay(day)}>{day}</div>
          ))
        }
        {
          weekends.map((day, index) => (
            <div className={`weekend ${selectedDay === day ? 'selected' : ''}`} key={5 + index} onClick={() => handleClickDay(day)}>{day}</div>
          ))
        }
      </div>
    </div>
  
  )
}
