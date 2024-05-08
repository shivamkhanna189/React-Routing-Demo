import { Outlet, Link} from "react-router-dom"

const Layout = () => {
    return <div> Layout Componennt
    <Link to="/">Back to Home</Link>
    <Outlet></Outlet>
    </div>
}

export default Layout;