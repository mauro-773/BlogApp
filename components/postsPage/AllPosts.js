import PostsGrid from '../posts/PostsGrid';
import classes from './AllPosts.module.css';

const AllPosts = ({ posts }) => {
  return (
    <section className={classes.posts}>
      <h1>Todos los Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
