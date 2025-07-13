// Validate email input with regex – check correctness and strictness
function validateEmail(email) {
    // Basic email regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}



// Test the validateEmail function
console.log(validateEmail("test@example.com")); // true
console.log(validateEmail("invalid-email")); // false