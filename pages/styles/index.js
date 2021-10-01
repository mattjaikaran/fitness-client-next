import Layout from '@/components/Layout'
import PageHero from '@/components/PageHero'
import BoxStyles from '@/components/BoxStyles'

const StylePage = () => {
  return (
    <Layout>
      <PageHero
        title="Box Styles"
        subtitle="space designed for your: vibe | mood | energy"
      />
      <BoxStyles />
    </Layout>
  )
}

export default StylePage
