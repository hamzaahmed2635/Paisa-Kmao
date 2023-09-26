// Mock data: Maan lijiye yeh data aapko aapke server se milta hai
const posts = [
    { title: "Post Title 1", rank: 5 },
    { title: "Post Title 2", rank: 9 },
    { title: "Post Title 3", rank: 3 },
    { title: "Post Title 4", rank: 8 },
    { title: "Post Title 5", rank: 2 }
];

// Posts ko rank ke base par sort karna
const sortedPosts = posts.sort((a, b) => b.rank - a.rank);

// Top 3 ranked posts ko sidebar mein display karna
const topRankedPostsElement = document.getElementById('topRankedPosts');

for(let i = 0; i < 3; i++) {
    let post = sortedPosts[i];
    let listItem = document.createElement('li');
    listItem.textContent = post.title;
    topRankedPostsElement.appendChild(listItem);
}
