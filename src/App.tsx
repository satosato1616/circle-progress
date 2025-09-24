import { createBrowserRouter, RouterProvider } from "react-router";
import { Root } from "./Root.tsx";
import { SignUp } from "./SignUp.tsx";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: (
            <div>トップページ</div>
          ),
        },
        {
          path: "signUp",
          element: <SignUp />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;