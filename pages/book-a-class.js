import MainLayout from '@/layouts/MainLayout'
import ClassForms from '@/components/ClassForms'
import InstructorBookAClass from '@/components/ClassForms/InstructorBookAClass'
import StudentJoinAClass from '@/components/ClassForms/StudentJoinAClass'

const BookAClassPage = () => {
  return (
    <MainLayout>
      <InstructorBookAClass />
      <StudentJoinAClass />
    </MainLayout>
  )
}

export default BookAClassPage