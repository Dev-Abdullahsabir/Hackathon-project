// Selecting DOM elements and adding types
const saveResumeButton = document.querySelector("{data-role='save-resume'}") as HTMLButtonElement;
const resumeHeadingInput = document.querySelector("{data-role = 'resume-heading'}") as HTMLInputElement;
const objectivesInput = document.querySelector("{data-role = 'objectives'}") as HTMLTextAreaElement;
const educationInput = document.querySelector("{data-role = 'education'}") as HTMLTextAreaElement;
const skillsInput = document.querySelector("{data-role = 'skills'}") as HTMLTextAreaElement;
const experienceInput = document.querySelector("{data-role = 'experience'}") as HTMLTextAreaElement;
const certificationsInput = document.querySelector("{data-role = 'certifications'}") as HTMLTextAreaElement;
const referencesInput = document.querySelector("{data-role = 'references'}") as HTMLTextAreaElement;
const imageUploadInput = document.querySelector("{data-role = 'image-upload'}") as HTMLInputElement;
const previewContentDiv = document.querySelector("{data-role = 'preview-content'}") as HTMLDivElement;


interface ResumeData {
  resumeHeading: string;
  objectives: string;
  education: string;
  skills: string;
  experience: string;
  certifications: string;
  references: string;
}

// Event listener for the button
saveResumeButton.addEventListener("click", function (event: MouseEvent): void {
  event.preventDefault();
  
  // Get values from the text fields
  const resumeHeading: string = resumeHeadingInput.value;
  const objectives: string = objectivesInput.value;
  const education: string = educationInput.value;
  const skills: string = skillsInput.value;
  const experience: string = experienceInput.value;
  const certifications: string = certificationsInput.value;
  const references: string = referencesInput.value;

  // Retrieve the uploaded image file (if any)
  const imageUpload = imageUploadInput.files ? imageUploadInput.files[0] : null;

  const displayPreview = (profileImageURL: string = ""): void => {
    const imageHTML = profileImageURL
      ? `<div class="text-center"><img src="${profileImageURL}" alt="Profile Image" class="image mb-3"></div>`
      : "";

    const previewContent = `
      ${imageHTML}
      <div class="preview-heading">${resumeHeading}</div>
      <div class="preview-section">
        <div class="preview-sub-heading">Objectives</div>
        <div class="preview-text">${objectives}</div>
      </div>
      <div class="preview-section">
        <div class="preview-sub-heading">Education</div>
        <div class="preview-text">${education}</div>
      </div>
      <div class="preview-section">
        <div class="preview-sub-heading">Skills</div>
        <div class="preview-text">${skills}</div>
      </div>
      <div class="preview-section">
        <div class="preview-sub-heading">Experience</div>
        <div class="preview-text">${experience}</div>
      </div>
      <div class="preview-section">
        <div class="preview-sub-heading">Certifications</div>
        <div class="preview-text">${certifications}</div>
      </div>
      <div class="preview-section">
        <div class="preview-sub-heading">References</div>
        <div class="preview-text">${references}</div>
      </div>
    `;

    previewContentDiv.innerHTML = previewContent;

    // Save data to local storage (without image for simplicity)
  };

  // Check if an image file is selected
  if (imageUpload) {
    const reader = new FileReader();
    reader.onload = function (e: ProgressEvent<FileReader>) {
      if (e.target && typeof e.target.result === "string") {
        displayPreview(e.target.result);
      }
    };
    reader.readAsDataURL(imageUpload);
  } else {
    // No image selected, display preview without image
    displayPreview();
  }
})