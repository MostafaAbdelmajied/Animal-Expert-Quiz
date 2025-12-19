import {uploadImage} from "./cloud.js"
import {saveItem} from "./LocalStorageManager.js"
class Student {
  static file;
  constructor(form) {
    this.id=Date.now();
    this.name = form.username.value;
    this.password = btoa(form.password.value);
    this.email = form.email.value;
    this.phone = form.mobile.value;
    this.grade = form.grade.value;
    this.image=null;
    Student.file=form.file.files[0];
    this.required_exams=[];
    this.finished_exams=[];
    this.prossing_exam;
  }

  async urlImage(file){
    if (file){
      this.image=await uploadImage(file);
    }
  }
}


const pictureInput = document.querySelector("#file");
const image = document.querySelector("#image");
const cameraIcon = document.querySelector("#cameraIcon");
document.querySelector(".picture").addEventListener("click",()=>
  pictureInput.click())

pictureInput.addEventListener('change', function() {
  const file = pictureInput.files[0];
  image.src = URL.createObjectURL(file);
  cameraIcon.classList.add('d-none');
  image.classList.remove('d-none');


});

const form = document.forms[0];
form.addEventListener("submit", function(e) {
  e.preventDefault(); 
  const student = new Student(form);
  image.src=""
  cameraIcon.classList.add('d-none');
  image.classList.add('d-none');
  form.reset();
  (async () => {
    
  await student.urlImage(Student.file);
  saveItem(student,"students");
  })()
  });
  
