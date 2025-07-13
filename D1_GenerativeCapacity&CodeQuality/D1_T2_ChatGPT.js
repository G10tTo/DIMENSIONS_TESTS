// Generate a fetch wrapper with retry and timeout logic
function fetchWithRetryAndTimeout(url, options = {}, retries = 3, timeout = 5000) {
  const controller = new AbortController();
  const { signal } = controller;

  const fetchWithTimeout = new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      controller.abort();
      reject(new Error('Request timed out'));
    }, timeout);

    fetch(url, { ...options, signal })
      .then((response) => {
        clearTimeout(timeoutId);
        resolve(response);
      })
      .catch((error) => {
        clearTimeout(timeoutId);
        reject(error);
      });
  });

  return fetchWithTimeout.catch((error) => {
    if (retries > 0) {
      console.warn(`Retrying... attempts left: ${retries}`);
      return fetchWithRetryAndTimeout(url, options, retries - 1, timeout);
    }
    throw error;
  });
}

// Example usage
fetchWithRetryAndTimeout('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log('Data:', data))
  .catch(error => console.error('Error:', error));

