import { useRouter } from 'next/router'
import InstructorHeader from './InstructorHeader'
import InstructorBio from './InstructorBio'
import InstructorImages from './InstructorImages'
import InstructorExperience from './InstructorExperience'
import InstructorInstagram from './InstructorInstagram'

const InstructorDetail = () => {
  const router = useRouter()
  const routerId = parseFloat(router.query.id)
  return (
    <div>
      <InstructorHeader />
      <InstructorBio />
      <InstructorImages id={routerId} />
      <InstructorExperience />
      <InstructorInstagram />
    </div>
  )
}

export default InstructorDetail
