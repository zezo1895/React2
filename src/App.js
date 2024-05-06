import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import HTML from "./pages/About";


import { useContext } from "react";
import context from "../src/pages/context/context"
import Signuser from "./pages/Signuser";
import Signin from "./pages/Signin";
import Porfile from "./pages/Porfile";
import Error404 from "./pages/Error404";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404/>,
  },
  {
    path: "/signup",
    element: <Signuser/>,
    errorElement: <Error404/>,
  },
  {
    path: "/signin",
    element: <Signin/>,
    errorElement: <Error404/>,
  },


  {
    path: "/about",
    element: <HTML />,
  },


  {
    path: "/porfile",
    element: <Porfile/>,
  },
]);

function App() {
  const { theme } = useContext(context); 
  return (
    <div className={`${theme}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
