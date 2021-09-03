import InstructorHeader from './InstructorHeader'
import InstructorBio from './InstructorBio'
import InstructorImages from './InstructorImages'
import InstructorExperienceTabs from './InstructorExperienceTabs'
import InstructorExperienceCollapse from './InstructorExperienceCollapse'
import InstructorInstagram from './InstructorInstagram'

const sampleInstructorImages = [
  {
    id: 1,
    imgUrl: 'https://via.placeholder.com/350x350.png'
  },
  {
    id: 2,
    imgUrl: 'https://via.placeholder.com/350x350.png'
  },
  {
    id: 3,
    imgUrl: 'https://via.placeholder.com/350x350.png'
  },
  {
    id: 4,
    imgUrl: 'https://via.placeholder.com/350x350.png'
  },
  {
    id: 5,
    imgUrl: 'https://via.placeholder.com/350x350.png'
  },
  {
    id: 6,
    imgUrl: 'https://via.placeholder.com/350x350.png'
  }
]

const InstructorDetail = () => {
  return (
    <>
      <InstructorHeader />
      <InstructorBio />
      <InstructorImages imagesArray={sampleInstructorImages} />
      <InstructorExperienceTabs />
      <InstructorExperienceCollapse />
      <InstructorInstagram imagesArray={sampleInstructorImages} />
    </>
  )
}

export default InstructorDetail
