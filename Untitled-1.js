// Function 1: Sticky Header Effect
// When the user scrolls down 50px, add a shadow to the header
window.addEventListener('scroll', function() {
    const header = document.getElementById('navbar');
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Function 2: Download Button Interaction
function triggerDownload() {
    // In a real app, this would link to the App Store
    const isConfirmed = confirm("This would take you to the App Store. Ready to boost your productivity?");
    
    if (isConfirmed) {
        alert("Redirecting to download...");
    }
}

// Function 3: Console message for developers
console.log("CampusPulse Website Loaded Successfully");