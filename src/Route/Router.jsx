import {
  createBrowserRouter,
} from "react-router";
import App from "../App";
import Error from "../ErrorPage/Error";
import Doctors from "../Pages/Doctors";
import DoctorDetails from "../Pages/DoctorDetails";
import { Banner } from "../Components/Banner";
import Booking from "../Pages/Booking";
import Blog from "../Pages/Blog";
import DoctorError from "../ErrorPage/DoctorError";
import PageNotFound from "../ErrorPage/PageNotFound";
import LOading from "../Components/LOading";
export const router = createBrowserRouter([
  {
    hydrateFallbackElement: <LOading />,
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/api.json"),
        element: (<>
          <Banner />
          < Doctors />
        </>)
      }, {
        path: "blog",
        Component: Blog
      }, {
        hydrateFallbackElement: <LOading />,
        path: "/my-booking",
        Component: Booking
      },
      {
        hydrateFallbackElement: <LOading />,
        path: 'page-not-found',
        Component: PageNotFound
      }
      ,
      {
        path: "/doctor/:regNo",
        errorElement: <DoctorError />,
        loader: () => fetch("/api.json"),
        Component: DoctorDetails
      }
    ]
  }
]);