import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./AppContex.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PostList from "./PostList.jsx";
import Info from "./Info.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/mypost",
    element: <PostList />,
  },
  {
    path: "/myinfo",
    element: <Info />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </AppProvider>
);
