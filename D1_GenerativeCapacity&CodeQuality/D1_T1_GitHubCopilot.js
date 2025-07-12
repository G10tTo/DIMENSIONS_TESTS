// Write a debounce function in JavaScript
function debounce(func, delay) {
    let timeoutId;

    return function(...args) {
        // Clear the previous timeout
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // Set a new timeout
        timeoutId = setTimeout(() => {
            func.apply(this, args);
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