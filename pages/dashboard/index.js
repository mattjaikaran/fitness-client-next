import DashboardLayout from '@/layouts/DashboardLayout'
import FitnessClasses from '@/components/dashboard/FitnessClasses'
import { Container } from 'react-bootstrap'

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <Container>
        <h3>Dashboard</h3>
        <FitnessClasses />
      </Container>
    </DashboardLayout>
  )
}

export default DashboardPage
