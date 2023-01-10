import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const Blog = () => {
  const { post } = useLoaderData();
  return (
    <ul>
      {post.length > 0 ? (
        post.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))
      ) : (
        <li>No blogs found</li>
      )}
    </ul>
  );
};

export default Blog;

export const loaderBlog = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
 
  const post = await resp.json();

  return { post };
};
