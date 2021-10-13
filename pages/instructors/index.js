import Layout from '@/components/Layout'
import Instructors from '@/components/Instructors'
import axios from 'axios'

const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://sstudioss.com'
const InstructorsPage = ({ data }) => {
  console.log('🚀 ~ file: index.js ~ line 6 ~ InstructorsPage ~ data', data)
  return (
    <Layout>
      <Instructors data={data} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const response = await axios.get(`${url}/api/instructors`)
  const data = response.data
  return {
    props: { data }
  }
}

export default InstructorsPage
