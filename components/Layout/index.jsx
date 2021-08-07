import { Container } from 'react-bootstrap'
import Header from '@/components/Header'
import Footer from "@/components/Footer"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container fluid>
        {children}
      </Container>
      <Footer />
    </div>
  )
}

export default Layout
