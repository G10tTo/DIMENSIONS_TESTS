// Validate email input with regex – check correctness and strictness
function validateEmail(email) {
    // Regular expression for validating an email address
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // Test the email against the regex
    return emailRegex.test(email);
}



// Test the validateEmail function
console.log(validateEmail("test@example.com")); // true
console.log(validateEmail("invalid-email")); // false