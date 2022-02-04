import MainLayout from '@/layouts/MainLayout'
import PageHero from '@/components/PageHero'
import BoxStyles from '@/components/BoxStyles'

const StylePage = () => {
  return (
    <MainLayout>
      <PageHero
        title="Box Styles"
        subtitle="space designed for your: vibe | mood | energy"
      />
      <BoxStyles />
    </MainLayout>
  )
}

export default StylePage
