let courses = [];

function addCourse() {
  let courseName = document.getElementById('courseName').value;

  courses.push({ name: courseName});

  // Clear form fields after adding course
  document.getElementById('courseForm').reset();
}

function redirectToCGPA() {
  // Redirect to cgpa.html
  window.location.href = "cgpa1.html";
}
