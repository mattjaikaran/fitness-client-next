import Layout from '@/components/Layout'
import HomeHero from '@/components/HomeHero'
import TextWithCTA from '@/components/TextWithCTA'
import CarouselHalfTextHalf from '@/components/CarouselHalfTextHalf'
import StudioLocations from '@/components/StudioLocations'
import { homeCopy } from '@/copy/home'

const HomePage = () => {
  return (
    <Layout>
      <HomeHero />
      <TextWithCTA
        text={homeCopy.descriptionOne.copy}
        btnText={homeCopy.descriptionOne.btnText}
        btnLink={homeCopy.descriptionOne.btnLink}
      />
      <CarouselHalfTextHalf textCopy={homeCopy.carouselText} />
      <TextWithCTA
        text={homeCopy.descriptionTwo.copy}
        btnText={homeCopy.descriptionTwo.btnText}
        btnLink={homeCopy.descriptionTwo.btnLink}
      />
      <StudioLocations homePage />
    </Layout>
  )
}


export default HomePage