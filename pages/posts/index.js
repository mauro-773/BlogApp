import AllPosts from '../../components/postsPage/AllPosts';

const PostsPage = () => {
   const dummy_posts = [
      {
         title: 'Getting Started with NextJS',
         image: 'getting-started-with-nextjs.png',
         excerpt: 'NextJS is the react framework for production!',
         date: '2022-08-02',
         slug: 'getting-started-with-nextjs',
      },
      {
         title: 'Getting Started with NextJS',
         image: 'getting-started-with-nextjs.png',
         excerpt: 'NextJS is the react framework for production!',
         date: '2022-08-02',
         slug: 'getting-started-with-nextjs2',
      },
      {
         title: 'Getting Started with NextJS',
         image: 'getting-started-with-nextjs.png',
         excerpt: 'NextJS is the react framework for production!',
         date: '2022-08-02',
         slug: 'getting-started-with-nextjs3',
      },
   ];

   return <AllPosts posts={dummy_posts} />;
};

export default PostsPage;
