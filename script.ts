//Get referance to the form and displayarea
const Form = document.getElementById('resume-form') as HTMLFormElement;
const resumedisplayElement = document.getElementById('resume-display') as HTMLDivElement;

//handle form submision
Form.addEventListener('submit' ,(event: Event) =>{
    event.preventDefault(); //prevent page reload
    //collection input value
    const name = (document.getElementById("Name") as HTMLInputElement).value
    const email = (document.getElementById("Email") as HTMLInputElement).value
    const phone = (document.getElementById("Phone") as HTMLInputElement).value
    const education = (document.getElementById("Education") as HTMLInputElement).value
    const experience = (document.getElementById("Experience") as HTMLInputElement).value
    const skills = (document.getElementById("Skills") as HTMLInputElement).value

    //genrate the resume content dynamically
    const resumHTML=`
    <h2><b>Editable Resume</h2>
    <h3>Personal Information</h3>
    <p><b>Name : </b><spane contenteditable="true">${name}</spane></p>
     <p><b>Email : </b><spane contenteditable="true">${email}</spane></p>
      <p><b>Phone : </b><spane contenteditable="true">${phone}</spane></p>

      <h3>Education</h3>
      <p contenteditable="true">${education}</p>

      <h3>Experience</h3>
      <p contenteditable="true">${experience}</p>

      <h3>Skills</h3>
      <p contenteditable="true">${skills}</p>`;
      //Display the genrated resume
      if(resumedisplayElement){
        resumedisplayElement.innerHTML = resumHTML;
      }else{
        console.error("The resume display elementis missing.");
      }
});