import MainLayout from '@/layouts/MainLayout'
import Instructors from '@/components/Instructors'
// import axios from 'axios'

const InstructorsPage = () => {
  return (
    <MainLayout>
      <Instructors />
    </MainLayout>
  )
}

// export async function getServerSideProps() {
//   const response = await axios.get('http://localhost:3000/api/instructors')
//   const data = response.data
//   return {
//     props: { data }
//   }
// }

export default InstructorsPage
