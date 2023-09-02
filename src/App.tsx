import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./components/ErrorPage";
import ContextProvider from "./context/context";
import TravelPage from "./pages/TravelPage";
import RequestsPage from "./pages/RequestsPage";
import Layout from "./components/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/travel",
          element: <TravelPage />,
        },
        {
          path: "/requests",
          element: <RequestsPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </>
  );
}

export default App;
