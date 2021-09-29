import HomeHero from '@/components/HomeHero'
import TextWithCTA from '@/components/TextWithCTA'
import CarouselHalfTextHalf from '@/components/CarouselHalfTextHalf'
import StudioLocations from '@/components/StudioLocations'
import { homeCopy } from '@/copy/home'

const Home = () => {
  return (
    <div>
      <HomeHero />
      <TextWithCTA
        text={homeCopy.descriptionOne.copy}
        // btnText={homeCopy.descriptionOne.btnText}
        // btnLink={homeCopy.descriptionOne.btnLink}
      />
      <CarouselHalfTextHalf
        textCopy={homeCopy.carouselText}
        images={homeCopy.carouselImages}
      />
      <TextWithCTA
        text={homeCopy.descriptionTwo.copy}
        btnText={homeCopy.descriptionTwo.btnText}
        btnLink={homeCopy.descriptionTwo.btnLink}
      />
      <StudioLocations homePage />
    </div>
  )
}

export default Home
