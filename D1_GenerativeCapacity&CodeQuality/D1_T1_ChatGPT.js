// Write a debounce function in JavaScript
function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}



// Example usage
function logMessage(message) {
  console.log('Logged:', message);
}

const debouncedLog = debounce(logMessage, 1000);

// These calls simulate rapid user input; only the last one will be logged after 1 second
debouncedLog("Input 1");
debouncedLog("Input 2");
debouncedLog("Final input");

