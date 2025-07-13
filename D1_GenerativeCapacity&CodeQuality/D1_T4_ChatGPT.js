
// Create a helper to group a list of blog posts by category
function groupPostsByCategory(posts) {
  return posts.reduce((acc, post) => {
    const category = post.category || 'Uncategorized';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(post);
    return acc;
  }, {});
}

// Example usage
const blogPosts = [
  { title: 'React Basics', category: 'React' },
  { title: 'Advanced JS', category: 'JavaScript' },
  { title: 'useEffect Guide', category: 'React' },
  { title: 'Understanding Closures', category: 'JavaScript' },
  { title: 'Intro to Programming' } // Uncategorized
];

const grouped = groupPostsByCategory(blogPosts);
console.log(grouped);

