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
        bio={instructorDetail?.page?.bio}
        contact={instructorDetail?.page?.contact}
        instructorFullName={instructorDetail?.page?.fullName}
        instructorFirstName={instructorDetail?.page?.firstName}
        classesTaught={instructorDetail?.page?.classesTaught}
      />
      <InstructorImages
        desktopPhotos={instructorDetail?.page?.desktopPhotos}
        // mobilePhotos={instructorDetail?.page?.mobilePhotos}
      />
      {instructorDetail.page.instructorExperience?.instructorCredentials.length && (
        <>
          <InstructorExperienceTabs experience={instructorDetail.page.instructorExperience} />
          <InstructorExperienceCollapse
            experience={instructorDetail.page.instructorExperience}
          />
        </>
      )}
      {instructorDetail.page.contact?.instagram && (
        <InstructorInstagram
          instagramHandle={instructorDetail?.page?.contact?.instagram}
          imagesArray={instructorDetail?.page?.mobilePhotos}
        />
      )}
    </>
  ) 
}

export default InstructorDetail
