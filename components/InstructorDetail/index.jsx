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
  const [details, setDetails] = useState(instructorDetail)
  console.log('instructorDetail', instructorDetail)
  return details ? (
    <>
      <InstructorHeader
        bio={details?.bio}
        contact={details?.contact}
        instructorFullName={details?.fullName}
        instructorFirstName={details?.firstName}
        classesTaught={details?.classesTaught}
      />
      <InstructorImages
        desktopPhotos={details.desktopPhotos}
        mobilePhotos={details.mobilePhotos}
      />
      {details.experience?.credentials && (
        <>
          <InstructorExperienceTabs experience={details.experience} />
          <InstructorExperienceCollapse experience={details.experience} />
        </>
      )}
      {details.contact?.instagram && (
        <InstructorInstagram
          instagramHandle={details?.contact?.instagram}
          imagesArray={details?.mobilePhotos}
        />
      )}
    </>
  ) : (
    <CustomSpinner />
  )
}

export default InstructorDetail
