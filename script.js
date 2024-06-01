document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 1}s`;
    });
});

function checkAnswer() {
    const answer = document.getElementById('answer').value.trim().toLowerCase();
    const correctAnswer = "sky"; // Replace with the correct answer
    const container = document.querySelector('.container');
    const message = document.getElementById('message');
    const questionBox = document.querySelector('.question-box');
    const wishBox = document.querySelector('.wish-box');
    const wishText = document.getElementById('wish-text');
    
    if (answer !== correctAnswer) {
        container.classList.add('shake');
        message.classList.remove('hidden');
        setTimeout(() => {
            container.classList.remove('shake');
        }, 500); // Duration of the shake animation
    } else {
        message.classList.add('hidden');
        questionBox.classList.add('fade-out');
        setTimeout(() => {
            wishBox.classList.remove('hidden');
            wishBox.classList.add('pop-up');
            typeWriter(wishText);
        }, 1000); // Wait for the fade-out animation to complete
    }
}

function typeWriter(element) {
    const text = element.innerText;
    element.innerText = "";
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 40);
        }else {
            // Call function to show the "Next" button when typing finishes
            showNextButton();
        }
    }
    typing();
}

function showNextButton() {
    var nextButton = document.getElementById("next-button");
    nextButton.classList.remove("hidden");
}

function handleNext() {
    openModal();
  }
  
  // Function to open the modal
  function openModal() {
    var modal = document.getElementById("image-popup");
    modal.classList.remove("hidden");
  }
  
  // Function to close the modal
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }