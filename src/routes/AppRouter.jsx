import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorElement from "./ErrorElement/ErrorElement";
import PageLayout from "~/layouts/PageLayout";
import HomePage from "~/pages/Home/HomePage";
import AboutPage from "~/pages/About/AboutPage";
import SelectedWork from "~/pages/SelectedWork/SelectedWork";

export default function AppRouter() {
  const ErrorDisplay = () => {
    return (
      <PageLayout>
        <ErrorElement />
      </PageLayout>
    );
  };

  // ================= ROUTES ======================= //
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
        { path: "work/:id", element: <SelectedWork /> },
      ],

      errorElement: <ErrorDisplay />,
    },
  ]);

  return <RouterProvider router={router} />;
}
