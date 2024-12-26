import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts, { loader as postsLoader } from "./routes/Posts";
import "./index.css";
import NewPost, { action as createPostAction } from "./routes/NewPost";
import RootLayout from "./routes/RootLayout";
import PostDetails, { loader as postDetailsLoader } from "./routes/PostDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader, // executes on the page load
        children: [
          {
            path: "/create-post",
            element: <NewPost />,
            action: createPostAction, // action triggers when a form is submitted
          },
          {
            path: "/post/:id",
            element: <PostDetails />,
            loader: postDetailsLoader,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
