import ReactDOM from "react-dom/client"
import { createBrowserRouter ,RouterProvider, Link} from "react-router-dom"
import Layout  from "./component/Layout"
import ErrorPage from "./component/ErrorPage"
import { Suspense, lazy } from "react"

const App = () => {
    return <div>App Componentn
        <Link to="/layout">Link to Layout Page</Link> <br></br>
        <Link to ="/about"> Link to About Page</Link>
    </div>
}

/** Way of implementing Lazy loading in react */
const About = lazy(() => import('./component/About')) 


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
    },
    {
        path: "/about",
        element: <Suspense>
            <About></About>
        </Suspense>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRoutes }></RouterProvider>)