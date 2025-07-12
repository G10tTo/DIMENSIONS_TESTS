// Generate a fetch wrapper with retry and timeout logic
function fetchWithRetryAndTimeout(url, options = {}, retries = 3, timeout = 5000) {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchWithTimeout = () => {
        return new Promise((resolve, reject) => {
            const timeoutId = setTimeout(() => {
                controller.abort();
                reject(new Error('Request timed out'));
            }, timeout);

            fetch(url, { ...options, signal })
                .then(response => {
                    clearTimeout(timeoutId);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    };

    const attemptFetch = (attemptsLeft) => {
        return fetchWithTimeout().catch(err => {
            if (attemptsLeft <= 1) {
                throw err;
            }
            return attemptFetch(attemptsLeft - 1);
        });
    };

    return attemptFetch(retries);
}



/*################################################################################################################*/
// I tested the fetchWithRetryAndTimeout function
fetchWithRetryAndTimeout('https://jsonplaceholder.typicode.com/posts', {}, 3, 5000)
    .then(data => console.log(data))
    .catch(err => console.error('Fetch failed:', err));

// output: An array of posts from the API or an error message if the fetch fails after retries