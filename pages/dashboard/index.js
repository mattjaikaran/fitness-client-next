import DashboardLayout from '@/layouts/DashboardLayout'
import FitnessClasses from '@/components/dashboard/FitnessClasses'
import EditClass from '@/components/ClassForms/EditClass'
import ChangeInstructor from '@/components/ClassForms/ChangeInstructor'
import InstructorClassDetails from '@/components/dashboard/InstructorClassDetails'
import InstructorStats from '@/components/dashboard/InstructorStats'
import Container from 'react-bootstrap/Container'
import { sampleClasses } from '@/copy/sampleClasses'

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <Container>
        <h3>Dashboard</h3>
        <FitnessClasses />
        <InstructorClassDetails fitnessClass={sampleClasses[0]} />
        <InstructorStats />
        <EditClass fitnessClass={sampleClasses[0]} />
        <ChangeInstructor fitnessClass={sampleClasses[0]} />
      </Container>
    </DashboardLayout>
  )
}

export default DashboardPage
