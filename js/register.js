const pictureInput = document.querySelector("#file");
const image = document.querySelector("#image");
const cameraIcon = document.querySelector("#cameraIcon");

document.querySelector(".picture").addEventListener("click",()=>
pictureInput.click())

pictureInput.addEventListener('change', function() {
  const file = pictureInput.files[0];
  image.src = URL.createObjectURL(file);
  URL.revokeObjectURL(file); 
    image.style.setProperty("display","block","important");
    cameraIcon.style.display = "none";
});

class Student {
  #img
  constructor(form) {
    this.userName = form.username.value;
    this.password = form.password.value;
    this.email = form.email.value;
    this.phone = form.mobile.value;
    this.grade = form.grade.value;
    if (form.file.files[0]) {
      this.#img = form.file.files[0];
    }
  }


}

const form = document.forms[0];
form.addEventListener("submit", function(e) {
  e.preventDefault(); 
  const student = new Student(form);
  console.log(student);
  image.src=""
  image.style.display="none"
      cameraIcon.style.display = "block";
  form.reset();
  });
  
