import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import InstructorHeader from './InstructorHeader'
import InstructorCalendar from './InstructorCalendar'
import InstructorImages from './InstructorImages'
import InstructorExperienceTabs from './InstructorExperienceTabs'
import InstructorExperienceCollapse from './InstructorExperienceCollapse'
import InstructorInstagram from './InstructorInstagram'
import CustomSpinner from '@/components/CustomSpinner'
// import './InstructorDetail.module.scss'

const InstructorDetail = ({ instructorDetail }) => {
  // const router = useRouter()
  // const [details, setDetails] = useState(instructorDetail)
  console.log('instructorDetail', instructorDetail)
  return  (
    <>
      <InstructorHeader
        bio={instructorDetail?.bio}
        contact={instructorDetail?.contact}
        instructorFullName={instructorDetail?.fullName}
        instructorFirstName={instructorDetail?.firstName}
        classesTaught={instructorDetail?.classesTaught}
      />
      <InstructorImages
        desktopPhotos={instructorDetail.desktopPhotos}
        mobilePhotos={instructorDetail.mobilePhotos}
      />
      {instructorDetail.experience?.credentials && (
        <>
          <InstructorExperienceTabs experience={instructorDetail.experience} />
          <InstructorExperienceCollapse experience={instructorDetail.experience} />
        </>
      )}
      {instructorDetail.contact?.instagram && (
        <InstructorInstagram
          instagramHandle={instructorDetail?.contact?.instagram}
          imagesArray={instructorDetail?.mobilePhotos}
        />
      )}
    </>
  ) 
}

export default InstructorDetail
