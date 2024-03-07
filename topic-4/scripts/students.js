import studentData from './data/students.json' assert {type : 'json'}

class Student {
  getAllStudent() {
    return studentData
  }

  searchStudents(search) {
    const searchedStudents = studentData.filter(
      (student) => 
        student.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        student.address.city
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        student.address.province
          .toLowerCase()
          .includes(search.toLowerCase())
    )

    return searchedStudents
      
  }
}

export default new Student()