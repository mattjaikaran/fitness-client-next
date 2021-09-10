import { useEffect } from 'react'
import InstructorHeader from './InstructorHeader'
import InstructorCalendar from './InstructorCalendar'
import InstructorImages from './InstructorImages'
import InstructorExperienceTabs from './InstructorExperienceTabs'
import InstructorExperienceCollapse from './InstructorExperienceCollapse'
import InstructorInstagram from './InstructorInstagram'
import './InstructorDetail.module.scss'

const sampleMobileInstructorImages = [
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

const sampleDesktopInstructorImages = [
  {
    id: 1,
    imgUrl: 'https://via.placeholder.com/500x600.png'
  },
  {
    id: 2,
    imgUrl: 'https://via.placeholder.com/500x290.png'
  },
  {
    id: 3,
    imgUrl: 'https://via.placeholder.com/500x290.png'
  },
  {
    id: 4,
    imgUrl: 'https://via.placeholder.com/500x600.png'
  },
  {
    id: 5,
    imgUrl: 'https://via.placeholder.com/500x600.png'
  },
]

const InstructorDetail = () => {
  return (
    <>
      <InstructorHeader />
      <InstructorCalendar />
      <InstructorImages
        desktopImages={sampleDesktopInstructorImages}
        mobileImages={sampleMobileInstructorImages}
      />
      <InstructorExperienceTabs />
      <InstructorExperienceCollapse />
      <InstructorInstagram imagesArray={sampleMobileInstructorImages} />
    </>
  )
}

export default InstructorDetail
