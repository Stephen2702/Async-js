const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: something is wrong');
            }
        }, 2000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const lastActivityTime = new Date().toLocaleTimeString();
            console.log(`Last Activity Time: ${lastActivityTime}`);
            resolve(lastActivityTime);
        }, 1000);
    });
}

createPost({ title: 'Post three', body: 'this is post three' })
    .then(updateLastUserActivityTime)
    .then((lastActivityTime) => {
        getPosts();
        console.log(`Posts created at: ${lastActivityTime}`);
        return deleteLastPost();
    })
    .then(() => {
        console.log('Post deleted successfully');
        getPosts();
    })
    .catch((err) => console.log(err));

function deleteLastPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                console.log(`Deleted Post: ${deletedPost.title}`);
                resolve();
            } else {
                reject('No posts to delete');
            }
        }, 1000);
    });
}
