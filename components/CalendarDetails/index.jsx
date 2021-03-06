import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const locales = {
  'en-US': enUS
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const eventList = [
  {
    id: 1,
    title: 'Yoga',
    details: 'At Flatiron Location. Rooted Box',
    start: new Date('2022022-07-12-12-29T07:00:00'),
    end: new Date('2022-07-12-29T08:00:00'),
    allDay: false,
    resource: 'any'
  },
  {
    id: 2,
    title: 'Spin',
    details: 'At Tribeca Location. Nuclear Box',
    start: new Date('2022-07-20-29T12:00:00'),
    end: new Date('2022-07-20-29T13:00:00'),
    allDay: false,
    resource: 'any'
  },
  {
    id: 3,
    title: 'Hot Boxing',
    details: 'At Tribeca Location. Nuclear Box',
    start: new Date('2022-07-15-29T15:00:00'),
    end: new Date('2022-07-15-29T16:00:00'),
    allDay: false,
    resource: 'any'
  },
  {
    id: 4,
    title: 'Kick Boxing',
    details: 'At Flatiron Location. Sensei Box',
    start: new Date('2022-07-12-30T15:00:00'),
    end: new Date('2022-07-12-30T16:00:00'),
    allDay: false,
    resource: 'any'
  }
]

const CalendarDetails = () => {
  const [events, setEvents] = useState(eventList)
  const handleSelect = ({ start, end }) => {
    console.log(start, end)
    const title = window.prompt('New Event name')
    const details = {
      start, end, title: title || null
    }
    if (title) {
      setEvents(...events, details)
    }
    console.log(details)
  }
  return (
    <Container>
      <h1 className="p-5 text-center">Book A Class</h1>
      <div>
        <Calendar
          popup
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectSlot={handleSelect}
          style={{ height: 500 }}
        />
      </div>
    </Container>
  )
}

export default CalendarDetails