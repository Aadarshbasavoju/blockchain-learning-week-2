// Function to fetch data using Promises (.then & .catch)
function fetchDataWithPromises() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data fetched with Promises:', data);
        })
        .catch(error => {
            console.error('Error fetching data with Promises:', error);
        });
}

// Function to fetch data using Async/Await
async function fetchDataWithAsyncAwait() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data fetched with Async/Await:', data);
    } catch (error) {
        console.error('Error fetching data with Async/Await:', error);
    }
}

// Calling the functions
fetchDataWithPromises();
fetchDataWithAsyncAwait();
