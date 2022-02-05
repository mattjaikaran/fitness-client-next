import Image from 'next/image'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Carousel from 'react-bootstrap/Carousel'
import {
  tribecaRootedSchedule,
  tribecaNuclearSchedule,
  flatironNaturalSchedule
} from '@/copy/studioLocations'
import RateTable from '@/components/RatesTabs/RateTable'
import floorPlan from '@/assets/img/floor-plan.jpeg'

const sliderImages = [
  {
    id: 1,
    imgUrl:
      'https://images.unsplash.com/photo-1599447421376-611783057464?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'
  },
  {
    id: 2,
    imgUrl:
      'https://images.unsplash.com/photo-1609218316109-9f284664dd49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'
  },
  {
    id: 3,
    imgUrl:
      'https://images.unsplash.com/photo-1551656941-dc4f2593028b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'
  }
]


const BoxStylesTabs = ({ slug }) => {
  const renderCarouselImages = (sliderImages) => {
    return sliderImages?.map(({ id, imgUrl }) => {
      return (
        <Carousel.Item key={id}>
          <Image
            width={1296}
            height={729}
            layout="responsive"
            src={imgUrl}
            alt={`Carousel slide ${id}`}
          />
        </Carousel.Item>
      )
    })
  }
  return (
    <Tabs defaultActiveKey="gallery" id="box-details-tabs" className="px-0">
      <Tab eventKey="gallery" title="Gallery">
        <Carousel interval={null} controls={false}>
          {renderCarouselImages(sliderImages)}
        </Carousel>
      </Tab>
      <Tab eventKey="video" title="Video">
        <Image
          width={1296}
          height={729}
          layout="responsive"
          src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2550&q=80"
          alt="video"
        />
      </Tab>
      <Tab eventKey="floorPlan" title="Floor Plan">
        <div>
          <Image
            width={1296}
            height={729}
            layout="responsive"
            src={floorPlan}
            alt="floor plan"
          />
        </div>
      </Tab>
      <Tab eventKey="rates" title="Rates">
        <RateTable
          box={
            slug === 'rooted-box'
              ? tribecaRootedSchedule
              : slug === 'nuclear-box'
              ? tribecaNuclearSchedule
              : flatironNaturalSchedule
          }
        />
      </Tab>
    </Tabs>
  )
}
export default BoxStylesTabs