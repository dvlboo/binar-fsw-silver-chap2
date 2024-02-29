const kukuh = {
  fullname : 'Kukuh Cokro Wibowo',
  address : {
    city: 'Kediri',
    province : 'East Java',
    country : 'Indonesia',
  },
  class : {
    id : 1,
    name : "Fullstack Web - 2"
  }
}

const jokowi = {
  fullname : 'Ir. H. Joko Wibodo',
  address : {
    city: 'Surakarta',
    province : 'Central Java',
    country : 'Indonesia',
  },
  class : {
    id : 1,
    name : "Fullstack Web - 1"
  }
}

const student = []
student.push(kukuh)
student.push(jokowi)

student.map((name, index) => {
  console.log(`The student in table ${index} is ${name.fullname}`)
})