// Create a helper to group a list of blog posts by category
function groupPostsByCategory(posts) {
    return posts.reduce((acc, post) => {
        const { category } = post;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(post);
        return acc;
    }, {});
}



// Example usage:
const blogPosts = [
    { id: 1, title: 'React Basics', category: 'React' },
    { id: 2, title: 'Advanced React', category: 'React' },
    { id: 3, title: 'Getting started with Node.js', category: 'Node.js' },
    { id: 4, title: 'Understanding Express.js', category: 'Node.js' },
    { id: 5, title: 'CSS Grid Layout', category: 'CSS' }
];

const grouped = groupPostsByCategory(blogPosts);
console.log(grouped);
/* Output:
{
  React: [
    { id: 1, title: 'React Basics', category: 'React' },
    { id: 2, title: 'Advanced React', category: 'React' }
  ],
  'Node.js': [
    {
      id: 3,
      title: 'Getting started with Node.js',
      category: 'Node.js'
    },
    { id: 4, title: 'Understanding Express.js', category: 'Node.js' }
  ],
  CSS: [ { id: 5, title: 'CSS Grid Layout', category: 'CSS' } ]
}
  */