import Head from 'next/head';
import AllPosts from '../../components/postsPage/AllPosts';

import { getAllPosts } from '../../lib/postsUtil';

const PostsPage = ({ allPosts }) => {
  return (
    <>
      <Head>
        <title>Todos mis posts!</title>
        <meta
          name='description'
          content='A list of all programming-related tutorials and posts!'
        />
      </Head>
      <AllPosts posts={allPosts} />
    </>
  );
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
