import DashboardHeader from '@/components/dashboard/DashboardHeader'
import Footer from '@/components/Footer'

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <DashboardHeader />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default DashboardLayout
