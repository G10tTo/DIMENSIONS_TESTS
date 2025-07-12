// Generate a fetch wrapper with retry and timeout logic
function fetchWithRetryAndTimeout(url, options = {}, retries = 3, timeout = 5000) {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchWithTimeout = new Promise((_, reject) => {
        const timer = setTimeout(() => {
            controller.abort();
            reject(new Error('Request timed out'));
        }, timeout);
    });

    const attemptFetch = (retryCount) => {
        return fetch(url, { ...options, signal })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response;
            })
            .catch(error => {
                if (retryCount > 0) {
                    return attemptFetch(retryCount - 1);
                } else {
                    throw error;
                }
            });
    };

    return Promise.race([
        attemptFetch(retries),
        fetchWithTimeout
    ]);
}



/*################################################################################################################*/
// I tested the fetchWithRetryAndTimeout function
fetchWithRetryAndTimeout('https://jsonplaceholder.typicode.com/posts', {}, 3, 5000)
    .then(data => console.log(data))
    .catch(err => console.error('Fetch failed:', err));

// Output: An array of posts from the API or an error message if the fetch fails after retries