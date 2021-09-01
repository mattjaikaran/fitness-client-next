import { Container } from 'react-bootstrap'
import Layout from '@/components/Layout'

const CalendarPage = () => {
  return (
    <Layout>
      <h1 className="p-5 text-center">Calendar</h1>
      <Container>
        <iframe
          src="https://app.squarespacescheduling.com/schedule.php?owner=23729247"
          title="Schedule Appointment"
          width="100%"
          height="800"
          frameBorder="0"
        />
        {/* <a
          href="https://app.squarespacescheduling.com/schedule.php?owner=23729247"
          target="_blank"
          rel="noreferrer"
          class="acuity-embed-button"
          style={{
            background: '#5fb8b9', 
            color: '#fff',
            padding: '8px 12px', 
            border: '0px',
            boxShadow: '0 -2px 0 rgba(0,0,0,0.15) inset',
            borderRadius: '4px',
            textDecoration: 'none',
            display: 'inline-block'
          }}>
          Schedule Appointment
        </a>
        <link
          rel="stylesheet"
          href="https://embed.acuityscheduling.com/embed/button/23729247.css"
          id="acuity-button-styles"
        />
        <script
          src="https://embed.acuityscheduling.com/embed/button/23729247.js"
          async></script> */}
      </Container>
    </Layout>
  )
}

export default CalendarPage
