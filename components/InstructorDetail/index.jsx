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

const InstructorDetail = ({ instructorDetail }) => {
  console.log('🚀 ~ file: index.jsx ~ line 60 ~ InstructorDetail ~ instructorDetail', instructorDetail)
  return (
    <>
      <InstructorHeader
        bio={instructorDetail?.bio}
        contact={instructorDetail?.contact}
        instructorFullName={instructorDetail?.fullName}
        instructorFirstName={instructorDetail?.firstName}
        classesTaught={instructorDetail?.classesTaught}
      />
      {/* <InstructorCalendar /> */}
      <InstructorImages
        desktopImages={
          instructorDetail?.desktopPhotos || sampleDesktopInstructorImages
        }
        mobileImages={
          instructorDetail?.mobilePhotos || sampleMobileInstructorImages
        }
      />
      <InstructorExperienceTabs experience={instructorDetail?.experience} />
      <InstructorExperienceCollapse experience={instructorDetail?.experience} />
      <InstructorInstagram
        instagramHandle={instructorDetail?.contact?.instagram}
        imagesArray={
          instructorDetail?.mobilePhotos || sampleMobileInstructorImages
        }
      />
    </>
  )
}

export default InstructorDetail
