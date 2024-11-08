//Get referance to the form and displayarea
var Form = document.getElementById('resume-form');
var resumedisplayElement = document.getElementById('resume-display');
//handle form submision
Form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collection input value
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var phone = document.getElementById("Phone").value;
    var education = document.getElementById("Education").value;
    var experience = document.getElementById("Experience").value;
    var skills = document.getElementById("Skills").value;
    //genrate the resume content dynamically
    var resumHTML = "\n    <h2><b>Editable Resume</h2>\n    <h3>Personal Information</h3>\n    <p><b>Name : </b><spane contenteditable=\"true\">".concat(name, "</spane></p>\n     <p><b>Email : </b><spane contenteditable=\"true\">").concat(email, "</spane></p>\n      <p><b>Phone : </b><spane contenteditable=\"true\">").concat(phone, "</spane></p>\n\n      <h3>Education</h3>\n      <p contenteditable=\"true\">").concat(education, "</p>\n\n      <h3>Experience</h3>\n      <p contenteditable=\"true\">").concat(experience, "</p>\n\n      <h3>Skills</h3>\n      <p contenteditable=\"true\">").concat(skills, "</p>");
    //Display the genrated resume
    if (resumedisplayElement) {
        resumedisplayElement.innerHTML = resumHTML;
    }
    else {
        console.error("The resume display elementis missing.");
    }
});
