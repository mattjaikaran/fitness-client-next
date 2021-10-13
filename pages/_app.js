import { SSRProvider } from '@react-aria/ssr'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'react-calendar/dist/Calendar.css'
// import 'react-datetime-picker/dist/DateTimePicker.css'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  )
}

export default MyApp
