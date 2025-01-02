// Show loader while page loads
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.getElementById("loader").style.display = "none";
      document.querySelector(".container").style.display = "block";
    }, 2000); // Adjust the timeout as needed
  });
  
  function sendResponse(response) {
    const message = response === 'Yes' 
      ? encodeURIComponent('Yes') 
      : encodeURIComponent('No');
    
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+2348106471754&text=${message}`;
    window.location.href = whatsappUrl;
  }
  
  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Random duration between 3 and 5 seconds
    document.querySelector(".heart-container").appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 5000); // Remove the heart after 5 seconds
  }
  
  setInterval(createHeart, 300); // Create a new heart every 300 milliseconds
  