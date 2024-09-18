document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');
    //console.log('DOM fully loaded');
  
    // Hide the modal initially
    modal.style.display = 'none';
  
    cardForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // 🚨 Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage');
      const courseNameInput = document.getElementById('courseName'); 
  
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput.value ? courseNameInput.value : "a course"; // Fallback to "a course" if no input
  
      if (studentName.trim() === '' || personalMessage.trim() === '') {
        alert('Please fill in all fields');
        return;
      }
  
      // 🚨 Generate certificate content dynamically
      //title
      const certificateTitleElement = document.createElement('h1');
      certificateTitleElement.textContent = `Certificate of Achievement`;
      certificateContent.appendChild(certificateTitleElement);

      //intro
      const certificateIntroElement = document.createElement('p');
      certificateIntroElement.textContent = `This is to certify that`;
      certificateContent.appendChild(certificateIntroElement);
      
      //student name
      const studentNameElement = document.createElement('h2');
      studentNameElement.textContent = studentName;
      certificateContent.appendChild(studentNameElement);

      //almsot complete statement
      const completionStatementElement = document.createElement('p');
      completionStatementElement.textContent = `has almost completed the`;
      certificateContent.appendChild(completionStatementElement);

      //course name
      const courseNameElement = document.createElement('h3');
      courseNameElement.textContent = courseName;
      certificateContent.appendChild(courseNameElement);

      //achievement description
      const achievementDescription = document.createElement('p');
      achievementDescription.textContent = `with legendary perseverance and world-class bad-assery for never giving up 🏆`;
      certificateContent.appendChild(achievementDescription);

    //CodeSpace logo
      const codespaceLogoElement = document.createElement('img');
      codespaceLogoElement.src = 'logo.png';
      certificateContent.appendChild(codespaceLogoElement);

    //personalised message
      const personalMessageElement = document.createElement('p');
      personalMessageElement.textContent = personalMessage;
      certificateContent.appendChild(personalMessageElement);

      //  Display the modal
      modal.style.display = 'block';
  
      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if(courseNameInput) courseNameInput.value = '';
    });
  
    //  🚨 Close the modal when the close button is clicked
    closeModal.addEventListener('click', function() {
      //console.log('This element was clicked')
      modal.style.display = 'none';
    });
  });
  