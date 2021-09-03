import InstructorHeader from './InstructorHeader'
import InstructorBio from './InstructorBio'
import InstructorImages from './InstructorImages'
import InstructorExperienceTabs from './InstructorExperienceTabs'
// import InstructorExperienceCollapse from './InstructorExperienceCollapse'
import InstructorInstagram from './InstructorInstagram'

const InstructorDetail = () => {
  return (
    <div>
      <InstructorHeader />
      <InstructorBio />
      <InstructorImages />
      <InstructorExperienceTabs />
      {/* <InstructorExperienceCollapse /> */}
      <InstructorInstagram />
    </div>
  )
}

export default InstructorDetail
