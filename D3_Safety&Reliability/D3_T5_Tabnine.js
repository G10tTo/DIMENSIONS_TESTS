// Generate an input mask function for credit card data
function createCreditCardMask(input) {
    input.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
        if (value.length > 16) {
            value = value.slice(0, 16);
        }
        // Format the value as a credit card number
        e.target.value = value.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
    });
}