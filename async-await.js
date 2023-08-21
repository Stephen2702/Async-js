const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

async function createPost(post) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    posts.push(post);
    console.log('Post created:', post.title);
}

async function deletePost() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    if (posts.length > 0) {
        const deletedPost = posts.pop();
        console.log('Post deleted:', deletedPost.title);
    } else {
        console.log('No posts to delete');
    }
}

createPost({ title: 'Post Three', body: 'This is post three' })
    .then(() => deletePost())
    .then(() => deletePost())
    .catch((error) => console.log(error));
