import {
    createBrowserRouter,
    RouteProvider,
    Route,
} from "react-router-dom"

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>
    },
  ])

export const Router = () => (
    <RouterProvider router={router} />
)