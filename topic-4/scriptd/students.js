import studentsData from './data/students.json' assert {type : "json"}

class Student {
  getAllStudents() {
    return studentsData
  }

  searchStudents(search) {
    const searchStudents = studentsData.filter(student => 
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.address.city === search.toLowerCase() ||
      student.address.province === search.toLowerCase()
    );

    return searchStudents
  }
}

export default new Student()