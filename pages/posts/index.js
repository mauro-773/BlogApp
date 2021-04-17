import AllPosts from '../../components/postsPage/AllPosts';

import { getAllPosts } from '../../lib/postsUtil';

const PostsPage = ({ allPosts }) => {
   return <AllPosts posts={allPosts} />;
};

export const getStaticProps = async () => {
   const allPosts = getAllPosts();

   return {
      props: {
         allPosts,
      },
   };
};

export default PostsPage;
