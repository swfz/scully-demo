exports.config = {
  projectRoot: "./src/app",
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
    "/users/:userId": {
      type: "json",
      userId: {
        url: 'https://jsonplaceholder.typicode.com/users',
        property: 'id'
      }
    }
  }
};
