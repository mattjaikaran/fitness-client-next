import MainLayout from '@/layouts/MainLayout'
import InstructorBookAClass from '@/components/ClassForms/InstructorBookAClass'
import StudentJoinAClass from '@/components/ClassForms/StudentJoinAClass'
import SearchForClass from '@/components/ClassForms/SearchForClass'

const BookAClassPage = () => {
  return (
    <MainLayout>
      <InstructorBookAClass />
      <StudentJoinAClass />
      <SearchForClass />
    </MainLayout>
  )
}

export default BookAClassPage