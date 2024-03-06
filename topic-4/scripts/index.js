import students from "./students.js";

const studentCard = document.getElementById('student-card')
const navbarBrand = document.getElementsByClassName('navbar-brand')
const searchSubmit = document.getElementById('searchSubmit')

studentCard.innerHTML = '<dotlottie-player src="https://lottie.host/403d0a97-9f82-48a9-a87f-35c2474ecdce/wxArJCJVfY.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></dotlottie-player>'

setTimeout(() => {
  const allStudents = students.getAllStudent()
  let studentCardWithAllStudents = ""
  allStudents.map((student) => {
    studentCardWithAllStudents += `<div class="col-md-4">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${student.name}</h5>
                <p class="card-text">${student.address.city}, ${student.address.province}</p>
            </div>
        </div>
    </div>`
  })

  studentCard.innerHTML = studentCardWithAllStudents
  navbarBrand[0].innerHTML = "hahahahha"
}, 4000)