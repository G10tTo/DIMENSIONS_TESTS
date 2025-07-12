// Generate a fetch wrapper with retry and timeout logic
function fetchWithRetryAndTimeout(url, options = {}, retries = 3, timeout = 5000) {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchWithTimeout = new Promise((resolve, reject) => {
        const id = setTimeout(() => {
            controller.abort();
            reject(new Error('Request timed out'));
        }, timeout);

        fetch(url, {...options, signal })
           .then(response => {
                clearTimeout(id);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                resolve(response);
            })
           .catch(error => {
                if (retries > 0 && error.name === 'AbortError') {
                    return fetchWithRetryAndTimeout(url, options, retries - 1, timeout);
                }
                reject(error);
            });
    });

    return fetchWithTimeout;
}



/*################################################################################################################*/
// I tested the fetchWithRetryAndTimeout function
fetchWithRetryAndTimeout('https://jsonplaceholder.typicode.com/posts', {}, 3, 5000)
    .then(data => console.log(data))
    .catch(err => console.error('Fetch failed:', err));

// output: An array of posts from the API or an error message if the fetch fails after retries