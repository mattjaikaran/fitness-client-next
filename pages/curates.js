import Layout from '@/components/Layout'
import CuratedClassesAndEvents from '@/components/CuratedClassesAndEvents'
// import Curate from '@/components/Curate'
// import { curate } from '@/copy/curate'

const CuratePage = () => {
  return (
    <Layout>
      <CuratedClassesAndEvents />
      {/* <Curate 
        title={curate.title}
        title2={curate.title2}
        paragraphOne={curate.paragraphOne}
        paragraphTwo={curate.paragraphTwo} 
        paragraphThree={curate.paragraphThree} 
        paragraphFour={curate.paragraphFour} 
      /> */}
    </Layout>
  )
}

export default CuratePage
