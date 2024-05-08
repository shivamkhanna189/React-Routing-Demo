import ReactDOM from "react-dom/client"
import { createBrowserRouter ,RouterProvider, Link} from "react-router-dom"
import Layout  from "./component/Layout"
import ErrorPage from "./component/ErrorPage"

const App = () => {
    return <div>App Componentn
        <Link to="/layout">Link to Layout Page</Link>

    </div>
}

const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement : <ErrorPage></ErrorPage> // navigationg to error page when wrong url typed
    },
    {
        path: "/layout",
        element: <Layout></Layout>,
        children: [{
            path: ":id",  
            element : <h1>THis is child component</h1>
        }]  /** way or creating child route with param  */
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRoutes }></RouterProvider>)