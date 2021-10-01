import Layout from '@/components/Layout'
import PageHero from '@/components/PageHero'
import BoxStyles from '@/components/BoxStyles'

const StylePage = () => {
  return (
    <Layout>
      <PageHero
        title="Box Styles"
        img="https://via.placeholder.com/1200x450.png?text=Style"
      />
      <BoxStyles />
    </Layout>
  )
}

export default StylePage
