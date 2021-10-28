import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '@/components/Layout';
import Post from '@/components/Post';
import { sortByDate } from '@/utils/index';
import { getPosts } from '@/lib/posts';
import CategoryList from '@/components/CategoryList';

export default function CategoryBlogPage({ posts, categoryName, categories }) {
  return (
    <Layout>
      <div className="flex-col flex lg:flex-row justify-between">
        <div className="lg:w-3/4 lg:mr-10 mr-0">
          <h1 className="text-4xl md:text-5xl border-b-4 p-5 font-bold">
            Posts In {categoryName}
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm: m-4">
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/4">
          <CategoryList categories={categories} />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));
  const categories = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);
    return frontmatter.category.toLowerCase();
  });

  const paths = categories.map((category) => ({
    params: {
      category_name: category,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { category_name } }) {
  const posts = getPosts();

  //Get categories
  const categories = posts.map((post) => post.frontmatter.category);

  const uniquwCategories = [...new Set(categories)];

  // Filter Posts by gategory

  const categoryPosts = posts.filter(
    (post) => post.frontmatter.category.toLowerCase() === category_name
  );

  return {
    props: {
      posts: categoryPosts,
      categoryName: category_name,
      categories: uniquwCategories,
    },
  };
}
