function show() {
  let photo1 = document.getElementById("photo").files[0];
  document.getElementById("myphoto").alt = "Selected Image";
  if (photo1) {
    let reader = new FileReader();
    reader.onload = function() {
      document.getElementById("myphoto").src = reader.result;
    }
    reader.readAsDataURL(photo1);
  }
};


// JavaScript to handle image input change event
document.getElementById('imageInput').addEventListener('change', function(event) {
  // Get the selected file
  const selectedFile = event.target.files[0];
  
  // Check if a file is selected
  if (selectedFile) {
      // Create a FileReader object
      const reader = new FileReader();

      // Set up the FileReader onload event
      reader.onload = function(event) {
          // Set the src attribute of the image tag to the data URL of the selected file
          document.getElementById('selectedImage').src = event.target.result;
      };


      // Read the selected file as a data URL
      reader.readAsDataURL(selectedFile);
  }
});

function printResume() {
  // Personal Information
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;

  // Education
  var educationFields = document.querySelectorAll(
    "#education_fields_container .input-container"
  );
  var educationInfo = [];
  educationFields.forEach(function (field) {
    var course = field.querySelector("input[id='Course']").value;
    var college = field.querySelector("input[id='College']").value;
    var cfrom = field.querySelector("input[id='cfrom']").value;
    var cto = field.querySelector("input[id='cto']").value;
    var percentage = field.querySelector("input[id='percentage']").value;
    educationInfo.push({
      course: course,
      college: college,
      cfrom: cfrom,
      cto: cto,
      percentage: percentage,
    });
  });

  // Professional Information
  var job = document.getElementById("job").value;
  var bio = document.getElementById("bio").value;

  // Work Experience
  var experienceFields = document.querySelectorAll(
    "#experience_fields_container .input-container"
  );
  var experienceInfo = [];
  experienceFields.forEach(function (field) {
    var company = field.querySelector("input[id='company']").value;
    var jobtitle = field.querySelector("input[id='jobtitle']").value;
    var jfrom = field.querySelector("input[id='jfrom']").value;
    var jto = field.querySelector("input[id='jto']").value;
    var overview = field.querySelector("textarea[id='overview']").value;
    experienceInfo.push({
      company: company,
      jobTitle: jobtitle,
      durationFrom: jfrom,
      durationTo: jto,
      overview: overview,
    });
  });

  // Links
  var linkedin = document.getElementById("linkedin").value;
  var github = document.getElementById("github").value;
  var instagram = document.getElementById("instagram").value;

  // Creating a printable version
  var printableContent = `
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
  <link rel="stylesheet" href="template-style.css">
</head>
      <body>
      <div class="row">
            <div class="col-md-4">
              <section id="section">

              <div id="imageContainer">
              <!-- Image tag to display the selected image -->
              <img id="myphoto" style="padding: 5px; max-width:200px;border-radius: 10%;" alt="Selected Image">

              </div>

                    <h3><u>Links</u></h3>
                    <i class="bi bi-linkedin"></i><p>${linkedin}</p>
                    <i class="bi bi-github"></i><p>${github}</p> 
                    <i class="bi bi-instagram"></i><p>${instagram}</p>

                    <h3><u>Soft Skills</u></h3>
                    <p>Adaptive Learning</p>
                    <p>Critical Thinking</p>
                    <p>Active Listening </p>
                    <p>Conflict Resolution</p>

                    <h3><u>Tech Skills</u></h3>
                    <p>C C++ Java Python</p>
                    <p>HTML   CSS  Bootstrap C#</p>
                    <p>React Node.js TypeScript </p>
                    <p>MySQL Django MongoDB</p>

                    <h3><u>Languages</u></h3>
                    <p class="big"><b>English</b><i>(Professional)</i><br>
                    <b>Kannada</b><i>(Native)</i><br>
                    <b>Hindi</b><i>(Limited)</i></p>

                </section>
              
            </div>

         <div class="col-md-8">
         <div class="jumbotron jumbotron text-center">
             <h1>${name}</h1>
             <h6>${job}</h6>
             <h6><i class="bi bi-phone"></i> : ${phone} | <i class="bi bi-envelope"></i> : ${email}</h7>
             <h6><i class="bi bi-signpost"></i> : ${address} </h6> 
               
         </div>
         <hr style="height:5px;color: rgb(36, 60, 84);">
         <section>
             
             <h2><b>Summary</b></h2>
                 <h6><i>${bio}</i></h6>    
             
             <div>
  
                  <h2 class="section-title">Education</h2>
                  ${educationInfo
                    .map(function (education) {
                      return `
                      <div class="resume-content">
                          <h3>${education.course}</h3>
                          <p>${education.college}</p>
                          <p>Year: ${education.cfrom} - ${education.cto}</p>
                          <p>Percentage: ${education.percentage}% </p>
                      </div>
                      `;
                    })
                    .join("")}
              </div>
  
              <div class="professional-section">
  
              <div class="experience-section">
                  <h2 class="section-title">Work Experience</h2>
                  ${experienceInfo
                    .map(function (experience) {
                      return `
                      <div class="resume-content">
                          <h3>${experience.jobTitle}</h3>
                          <p>${experience.company}</p>
                          <p>Duration: ${experience.durationFrom} - ${experience.durationTo}</p>
                          <p>Overview: ${experience.overview}</p>
                      </div>
                      `;
                    })
                    .join("")}
              </div>
          </div>
        </div>
          </div>
         
      </body>
      `;

  // Open a new window and print the content
  var printWindow = window.open("", "", "width=900,height=1200");
  printWindow.document.write(printableContent);
}






