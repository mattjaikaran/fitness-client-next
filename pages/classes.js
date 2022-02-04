import DashboardLayout from '@/layouts/DashboardLayout'
import FitnessClasses from '@/components/dashboard/FitnessClasses'
import { Container } from 'react-bootstrap'

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <Container>
        <FitnessClasses />
      </Container>
    </DashboardLayout>
  )
}

export default DashboardPage
