import Layout from '@/components/Layout'
import Instructors from '@/components/Instructors'
// import axios from 'axios'

const InstructorsPage = () => {
  return (
    <Layout>
      <Instructors />
    </Layout>
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
