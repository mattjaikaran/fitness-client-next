import { useState } from 'react'
import { Container } from 'react-bootstrap'
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
    start: new Date('2021-09-29T07:00:00'),
    end: new Date('2021-09-29T08:00:00'),
    allDay: false,
    resource: 'any'
  },
  {
    id: 2,
    title: 'Spin',
    details: 'At Tribeca Location. Nuclear Box',
    start: new Date('2021-09-29T12:00:00'),
    end: new Date('2021-09-29T13:00:00'),
    allDay: false,
    resource: 'any'
  },
  {
    id: 3,
    title: 'Hot Boxing',
    details: 'At Tribeca Location. Nuclear Box',
    start: new Date('2021-09-29T15:00:00'),
    end: new Date('2021-09-29T16:00:00'),
    allDay: false,
    resource: 'any'
  },
  {
    id: 4,
    title: 'Kick Boxing',
    details: 'At Flatiron Location. Sensei Box',
    start: new Date('2021-09-30T15:00:00'),
    end: new Date('2021-09-30T16:00:00'),
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
        {/* <Calendar
          popup
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectSlot={handleSelect}
          style={{ height: 500 }}
        /> */}
        {/* <h3 className="my-5 text-center">Book a Class</h3> */}

        {/* squarespace */}
        {/* <iframe
          src="https://app.squarespacescheduling.com/schedule.php?owner=23729247"
          // title="Schedule Appointment"
          width="100%"
          height="800"
          frameBorder="0"
        /> */}
        {/* Glofox */}
        <iframe
          src="https://app.glofox.com/portal/#/branch/61531d776084c400ba383d95/classes-week-view"
          frameborder="0"
          width="100%"
          height="1200"></iframe>
      </div>
    </Container>
  )
}

export default CalendarDetails