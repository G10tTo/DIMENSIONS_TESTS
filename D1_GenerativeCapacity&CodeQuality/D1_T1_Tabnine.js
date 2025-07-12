// Write a debounce function in JavaScript
function debounce(func, delay) {
  let debounceTimer;

  return function() {
    const context = this;
    const args = arguments;

    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}



/*################################################################################################################*/
// test the debounce function
function logMessage(message) {
    console.log(message);
}
const debouncedLog = debounce(logMessage, 1000);
debouncedLog('Hello, World!'); // This will log 'Hello, World!' after 1 second
debouncedLog('Hello, again!'); // This will cancel the previous call; and log 'Hello, again!' after 1 second
debouncedLog('Hello, once more!'); // This will cancel the previous call; and log 'Hello, once more!' after 1 second

// Output: Hello, once more!