import Layout from '@/components/Layout'
import Instructors from '@/components/Instructors'
import axios from 'axios'

const InstructorsPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Instructors instructors={data} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const response = await axios.get('http://localhost:3000/api/instructors')
  const data = response.data
  return {
    props: { data }
  }
}

export default InstructorsPage
