// Generate an input mask function for credit card data

function createCreditCardMask(input) {
  input.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    if (value.length > 16) {
      value = value.slice(0, 16);
    }
    e.target.value = value.replace(/(\d{4})(?=\d)/g, '$1 ').trim(); // Format in groups of 4 digits
  });
}

// Example usage (only works in a browser environment)
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Enter credit card number';
document.body.appendChild(input);

createCreditCardMask(input);