import matter from 'gray-matter';

const fs = require('fs');
const path = require('path');

const postsDirectory = path.join(process.cwd(), 'posts');

export const getPostsFiles = () => fs.readdirSync(postsDirectory);

export const getPostData = (postIdentifier) => {
   const postSlug = postIdentifier.replace(/\.md$/, '');
   const filePath = path.join(postsDirectory, `${postSlug}.md`);
   const fileContent = fs.readFileSync(filePath, 'utf8');
   const { data, content } = matter(fileContent);

   const postData = {
      slug: postSlug,
      ...data,
      content,
   };

   return postData;
};

export const getAllPosts = () => {
   // Se leen los nombre de los archivos de la carpeta posts -> regresa un []
   const postFiles = getPostsFiles();
   const allPosts = postFiles.map((postFile) => getPostData(postFile));

   const sortedPosts = allPosts.sort((postA, postB) =>
      postA.date > postB.date ? -1 : 1
   );

   return sortedPosts;
};

export const getFeaturedPosts = () => {
   const allPosts = getAllPosts();
   const featuredPosts = allPosts.filter((post) => post.isFeatured);

   return featuredPosts;
};
