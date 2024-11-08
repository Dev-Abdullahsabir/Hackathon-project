"use strict";
// Selecting DOM elements and adding types
const saveResumeButton = document.getElementById("save-resume-button");
const resumeHeadingInput = document.getElementById("resume-heading");
const objectivesInput = document.getElementById("objectives");
const educationInput = document.getElementById("education");
const skillsInput = document.getElementById("skills");
const experienceInput = document.getElementById("experience");
const certificationsInput = document.getElementById("certifications");
const referencesInput = document.getElementById("references");
const imageUploadInput = document.getElementById("image-upload");
const previewContentDiv = document.getElementById("preview-content");
// Event listener for the button
saveResumeButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent page reload
    // Get values from the text fields
    const resumeHeading = resumeHeadingInput.value;
    const objectives = objectivesInput.value;
    const education = educationInput.value;
    const skills = skillsInput.value;
    const experience = experienceInput.value;
    const certifications = certificationsInput.value;
    const references = referencesInput.value;
    // Retrieve the uploaded image file (if any)
    const imageUpload = imageUploadInput.files ? imageUploadInput.files[0] : null;
    const displayPreview = (profileImageURL = "") => {
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
        const resumeData = {
            resumeHeading,
            objectives,
            education,
            skills,
            experience,
            certifications,
            references,
        };
        localStorage.setItem("resumeData", JSON.stringify(resumeData));
    };
    // Check if an image file is selected
    if (imageUpload) {
        const reader = new FileReader();
        reader.onload = function (e) {
            if (e.target && typeof e.target.result === "string") {
                displayPreview(e.target.result);
            }
        };
        reader.readAsDataURL(imageUpload);
    }
    else {
        // No image selected, display preview without image
        displayPreview();
    }
});
