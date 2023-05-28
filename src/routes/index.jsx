import { createBrowserRouter } from "react-router-dom";
import WebLayout from "~/layouts/web";
import Articles from "~/pages/articles";
import Category from "~/pages/category";
import Discover from "~/pages/discover";
import Home from "~/pages/home";
import LectureRequests from "~/pages/lecture-requests";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <WebLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/kesfet',
        element: <Discover />
      },
      {
        path: '/makaleler',
        element: <Articles />
      },
      {
        path: '/ders-istekleri',
        element: <LectureRequests />
      },
      {
        path: '/:categorySlug',
        element: <Category />
      }
    ]
  }
])

export default routes
