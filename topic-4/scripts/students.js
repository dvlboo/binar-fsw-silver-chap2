import studentData from './data/students.json' assert {type : 'json'}

class Student {
  getAllStudent() {
    return studentData;
  }

  searchStudents(search, sortBy = 'name', sortOrder = 'ascending') {
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
    );

    searchedStudents.sort((a, b) => {
      const propertyA = a[sortBy].toLowerCase();
      const propertyB = b[sortBy].toLowerCase();
      if (sortOrder === 'ascending') {
        if (propertyA < propertyB) {
          return -1;
        }
        if (propertyA > propertyB) {
          return 1;
        }
      } else {
        if (propertyA > propertyB) {
          return -1;
        }
        if (propertyA < propertyB) {
          return 1;
        }
      }
      return 0;
    });

    return searchedStudents;
  }
}

export default new Student();
