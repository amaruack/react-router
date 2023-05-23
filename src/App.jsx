import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./pages/Root";
import {ErrorPage} from "./pages/ErrorPage";
import {Contact} from "./pages/Contact";
import {Videos} from "./pages/Videos";
import {Home} from "./pages/Home";
import {VideoDetail} from "./pages/VideoDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "contacts/:contactId",
                element: <Contact />,
            },
            {
                path: "/videos",
                element: <Videos/>
            },
            {
                path: "/videos/:videoId",
                element: <VideoDetail/>
            }
        ]
    },

]);

export const App = () =>{
    return(
        <RouterProvider router={router} />
    )
}