import { useLoaderData, Link } from "react-router-dom";

const Post = () => {
  const { post } = useLoaderData();

  return (
    <>
      <h1>{post.title}</h1>
      <Link to="/Blog">Volver home</Link>
    </>
  );
};

export default Post;

export const loaderPost = async ({ params }) => {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  if (!resp.ok)
    throw {
      status: resp.status,
      statusText: "No encontrado",
    };
  const post = await resp.json();
  return { post };
};
