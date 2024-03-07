import students from "./students.js";

const studentCard = document.getElementById('student-card')
const navbarBrand = document.getElementsByClassName('navbar-brand')
const searchSubmit = document.getElementById('search-submit')


searchSubmit.addEventListener('submit', (event) => {
  event.preventDefault()
  const studentFilter = document.querySelector('#search-submit input[type="search"]').value

  console.log(studentFilter)

  studentCard.innerHTML = '<dotlottie-player src="https://lottie.host/403d0a97-9f82-48a9-a87f-35c2474ecdce/wxArJCJVfY.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></dotlottie-player>'


  setTimeout(() => {
    const getStudentFil = students.searchStudents(studentFilter)
    let studentCardWithFilterStudents = ""
    getStudentFil.map((student) => {
      studentCardWithFilterStudents += `<div class="col-md-4">
        <div class="card">
            <div class="card-body">
              <h5 class="card-title">${student.name}</h5>
              <p class="card-text">${student.address.city}, ${student.address.province}</p>
          </div>
        </div>
      </div>`
    })

    console.log(getStudentFil)
    studentCard.innerHTML = studentCardWithFilterStudents
  

    // const allStudents = students.getAllStudent()
    // let studentCardWithAllStudents = ""
    // allStudents.map((student) => {
    //   studentCardWithAllStudents += `<div class="col-md-4">
    //       <div class="card">
    //           <div class="card-body">
    //               <h5 class="card-title">${student.name}</h5>
    //               <p class="card-text">${student.address.city}, ${student.address.province}</p>
    //           </div>
    //       </div>
    //   </div>`
    // })
  
    // console.log(allStudents)
    // studentCard.innerHTML = studentCardWithAllStudents
  
    navbarBrand[0].innerHTML = "hahahahha"
  }, 2000)
})