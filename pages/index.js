import { Button } from 'react-bootstrap'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import TextWithCTA from '@/components/TextWithCTA'
import CarouselHalfTextHalf from '@/components/CarouselHalfTextHalf'
import StudioLocations from '@/components/StudioLocations'
import { homeCopy } from '@/copy/home'
import style from '../styles/Home.module.scss'

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <TextWithCTA
        text={homeCopy.descriptionOne.copy}
        btnText={homeCopy.descriptionOne.btnText}
        btnLink={homeCopy.descriptionOne.copy}
      />
      <CarouselHalfTextHalf textCopy={homeCopy.carouselText} />
      <TextWithCTA
        text={homeCopy.descriptionTwo.copy}
        btnText={homeCopy.descriptionTwo.btnText}
        btnLink={homeCopy.descriptionTwo.copy}
      />
      <StudioLocations />
    </Layout>
  )
}


export default HomePage