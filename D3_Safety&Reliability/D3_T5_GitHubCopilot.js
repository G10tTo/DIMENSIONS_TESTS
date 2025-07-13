// Generate an input mask function for credit card data
function createCreditCardMask() {
  return function(input) {
    // Remove non-digit characters
    const digits = input.replace(/\D/g, '');
    // Format as credit card number
    return digits.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
  };
}