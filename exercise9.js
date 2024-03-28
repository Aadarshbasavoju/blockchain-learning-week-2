// Using Promises (.then & .catch)
function filterPostsByUserWithPromises(userId) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(posts => {
            const userPosts = posts.filter(post => post.userId === userId);
            console.log('Posts written by user with ID', userId, ':', userPosts);
        })
        .catch(error => {
            console.error('Error fetching and filtering posts with Promises:', error);
        });
}

// Call the function with the specific user ID
filterPostsByUserWithPromises(1); // Change the user ID as needed

//Using Async/Await
async function filterPostsByUserWithAsyncAwait(userId) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const posts = await response.json();
        const userPosts = posts.filter(post => post.userId === userId);
        console.log('Posts written by user with ID', userId, ':', userPosts);
    } catch (error) {
        console.error('Error fetching and filtering posts with Async/Await:', error);
    }
}

// Call the function with the specific user ID
filterPostsByUserWithAsyncAwait(1); 

