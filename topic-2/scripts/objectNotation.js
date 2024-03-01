const student = [ 
  {
    name : "Nida",
    address : {
      city : "Jakarta",
      province : "DKI Jakarta"
    }
  },
  {
    name : "Dwi",
    address : {
      city : "Tangerang",
      province : "Banten"
    }
  },
  {
    name : "Feb",
    address : {
      city : "Tangerang",
      province : "Banten"
    }
  },
  {
    name : "Hukma",
    address : {
      city : "Bandung",
      province : "Jawa Barat"
    }
  },
  {
    name : "Fauzan",
    address : {
      city : "Bandung",
      province : "Jawa Barat"
    }
  },
  {
    name : "Shahrizan",
    address : {
      city : "Palembang",
      province : "Sumatera Selatan"
    }
  }
]

student.map(student => {
  console.log(
    `${student.name} is from ${student.address.city}, ${student.address.province}`
    )
})

// // di filtering
const filterStudent = student.filter(student => student.address.city === "Bandung");

filterStudent.map(student => {
  console.log(`${student.name} is from ${student.address.city}, ${student.address.province}`);
});

// // cara map
const cityStudent = "Bandung"

student.map(student => {
  if (student.address.city === cityStudent) {
    console.log(`${student.name} is from ${student.address.city}, ${student.address.province}`);
  }
});



// Mencari Berdasarkan includes nama
const filterStudents = student.filter(student => student.name.toLowerCase().includes("zan"));

filterStudents.map(student => {
  console.log(`${student.name} is from ${student.address.city}, ${student.address.province}`);
});



student.map(student => {
  if (student.name.includes("zan")) {
    console.log(`${student.name} is from ${student.address.city}, ${student.address.province}`);
  }
})


const filterData = "a"

const filteredStudents = student.filter(student => 
  student.name.toLowerCase().includes(filterData) ||
  student.address.city === filterData ||
  student.address.province === filterData
);

filteredStudents.map(
  student => console.log(`${student.name} is from ${student.address.city}, ${student.address.province}`)
)


console.log("\n= = = = = = = = = =  USING MAP = = = = = = = = = = = = = =\n")


const findData = "i";

student.map(student => {
  if (student.name.includes(findData) || student.address.city === findData || student.address.province === findData) {
    console.log(`${student.name} is from ${student.address.city}, ${student.address.province}`);
  }
});

