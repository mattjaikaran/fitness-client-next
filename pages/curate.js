import Layout from '@/components/Layout'
import Curate from '@/components/Curate'
import { curate } from '@/copy/curate'

const CuratePage = () => {
  return (
    <Layout>
      <Curate 
        title={curate.title}
        title2={curate.title2}
        paragraphOne={curate.paragraphOne}
        paragraphTwo={curate.paragraphTwo} 
        paragraphThree={curate.paragraphThree} 
        paragraphFour={curate.paragraphFour} 
      />
    </Layout>
  )
}

export default CuratePage
