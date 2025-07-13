// Validate email input with regex – check correctness and strictness

function isValidEmail(email) {
  const strictEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return strictEmailRegex.test(email);
}

// Test examples
const testEmails = [
  'test@example.com',              // valid
  'user.name+tag@sub.domain.com', // valid
  'invalid@@example.com',         // invalid
  'no-at-symbol.com',             // invalid
  'user@.com',                    // invalid
  'user@domain',                  // invalid
  'user@domain.c',                // invalid (too short TLD)
  'user@domain.co.uk',            // valid
];

testEmails.forEach(email => {
  console.log(`${email} → ${isValidEmail(email)}`);
});
