import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import InstructorHeader from './InstructorHeader'
import InstructorCalendar from './InstructorCalendar'
import InstructorImages from './InstructorImages'
import InstructorExperienceTabs from './InstructorExperienceTabs'
import InstructorExperienceCollapse from './InstructorExperienceCollapse'
import InstructorInstagram from './InstructorInstagram'
// import './InstructorDetail.module.scss'

// const sampleMobileInstructorImages = [
//   {
//     id: 1,
//     imgUrl: 'https://via.placeholder.com/350x350.png'
//   },
//   {
//     id: 2,
//     imgUrl: 'https://via.placeholder.com/350x350.png'
//   },
//   {
//     id: 3,
//     imgUrl: 'https://via.placeholder.com/350x350.png'
//   },
//   {
//     id: 4,
//     imgUrl: 'https://via.placeholder.com/350x350.png'
//   },
//   {
//     id: 5,
//     imgUrl: 'https://via.placeholder.com/350x350.png'
//   },
//   {
//     id: 6,
//     imgUrl: 'https://via.placeholder.com/350x350.png'
//   }
// ]

const InstructorDetail = ({ instructorDetail }) => {
  // const router = useRouter()
  // const [details, setDetails] = useState(instructorDetail)
  console.log('instructorDetail', instructorDetail)
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
        desktopPhotos={instructorDetail.desktopPhotos}
        mobilePhotos={instructorDetail.mobilePhotos}
      />
      <InstructorExperienceTabs experience={instructorDetail?.experience} />
      <InstructorExperienceCollapse experience={instructorDetail?.experience} />
      <InstructorInstagram
        instagramHandle={instructorDetail?.contact?.instagram}
        imagesArray={instructorDetail?.mobilePhotos}
      />
    </>
  )
}

export default InstructorDetail
