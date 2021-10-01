import Layout from '@/components/Layout'
import ClassForms from '@/components/ClassForms'
import InstructorBookAClass from '@/components/ClassForms/InstructorBookAClass'
import StudentJoinAClass from '@/components/ClassForms/StudentJoinAClass'

const BookAClassPage = () => {
  return (
    <Layout>
      <InstructorBookAClass />
      <StudentJoinAClass />
    </Layout>
  )
}

export default BookAClassPage