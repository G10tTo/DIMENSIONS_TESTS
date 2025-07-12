// Create a helper to group a list of blog posts by category
function groupByCategory(posts) {
  return posts.reduce((groupedPosts, post) => {
    const category = post.category;
    if (!groupedPosts[category]) {
      groupedPosts[category] = [];
    }
    groupedPosts[category].push(post);
    return groupedPosts;
  }, {});
}



/*################################################################################################################*/
// I tested the groupPostsByCategory function
const posts = [
    { id: 1, title: 'Post 1', category: 'Tech' },
    { id: 2, title: 'Post 2', category: 'Health' },
    { id: 3, title: 'Post 3', category: 'Tech' },
    { id: 4, title: 'Post 4', category: 'Lifestyle' },
];
const groupedPosts = groupByCategory(posts);
console.log(groupedPosts);  
// Output:
// {
//   Tech: [
//     { id: 1, title: 'Post 1', category: 'Tech' },
//     { id: 3, title: 'Post 3', category: 'Tech' }
//   ],
//   Health: [ { id: 2, title: 'Post 2', category: 'Health' } ],
//   Lifestyle: [ { id: 4, title: 'Post 4', category: 'Lifestyle' } ]
// }
