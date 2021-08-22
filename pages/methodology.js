import Layout from '@/components/Layout'
import Methodology from '@/components/Methodology'
import { methodology } from '@/copy/methodology'

const MethodologyPage = () => {
  return (
    <Layout>
      <Methodology
        title={methodology.title}
        p1={methodology.p1}
        p2={methodology.p2}
        p3={methodology.p3}
        p4={methodology.p4}
        p4={methodology.p4}
        p5={methodology.p5}
      />
    </Layout>
  )
}

export default MethodologyPage
