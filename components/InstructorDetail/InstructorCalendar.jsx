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
    details: 'detail 1',
    start: new Date('2021-09-29T07:00:00'),
    end: new Date('2021-09-29T08:00:00'),
    allDay: false,
    resource: 'any'
  },
  {
    id: 2,
    title: 'Spin',
    details: 'detail 1',
    start: new Date('2021-09-29T12:00:00'),
    end: new Date('2021-09-29T13:00:00'),
    allDay: false,
    resource: 'any'
  },
  {
    id: 3,
    title: 'Hot Boxing',
    details: 'detail 1',
    start: new Date('2021-09-29T15:00:00'),
    end: new Date('2021-09-29T16:00:00'),
    allDay: false,
    resource: 'any'
  },
  {
    id: 4,
    title: 'Kick Boxing',
    details: 'detail 1',
    start: new Date('2021-09-30T15:00:00'),
    end: new Date('2021-09-30T16:00:00'),
    allDay: false,
    resource: 'any'
  }
]



const InstructorCalendar = () => {
  const [events, setEvents] = useState(eventList)
  const handleSelect = ({ start, end }) => {
    console.log(start, end);
    // const title = window.prompt('New Event name')
    // if (title)
    //   this.setState({
    //     events: [
    //       ...this.state.events,
    //       {
    //         start,
    //         end,
    //         title
    //       }
    //     ]
    //   })
  }
  return (
    <Container fluid="xl">
      <h3 className="text-center mb-4 my-sm-5">Calendar</h3>
      <Calendar
        popup
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectSlot={handleSelect}
        style={{ height: 500 }}
      />
    </Container>
  )
}

export default InstructorCalendar