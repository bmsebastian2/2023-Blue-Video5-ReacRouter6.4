import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog, { loaderBlog } from "../pages/Blog";
import NotFound from "../pages/NotFound";
import LayaoutPublic from "../layout/LayaoutPublic";
import Post from "../pages/Post";
import { loaderPost } from "../pages/Post";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayaoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement:<NotFound/>,
        children:[
           {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
        loader: loaderBlog,
      },
      {
        path: "/blog/:id",
        element: <Post />,
        loader: loaderPost,
      },
          
        ]
      }
     
    ],
  },
]);
