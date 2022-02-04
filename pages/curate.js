import MainLayout from '@/layouts/MainLayout'
import Curate from '@/components/Curate'
import { curate } from '@/copy/curate'

const CuratePage = () => {
  return (
    <MainLayout>
      <Curate 
        title={curate.title}
        title2={curate.title2}
        paragraphOne={curate.paragraphOne}
        paragraphTwo={curate.paragraphTwo} 
        paragraphThree={curate.paragraphThree} 
        paragraphFour={curate.paragraphFour} 
      />
    </MainLayout>
  )
}

export default CuratePage
