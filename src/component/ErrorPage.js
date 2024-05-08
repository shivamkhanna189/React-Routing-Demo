import { useRouteError} from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError(); // hook to get error response, get various info about error
    return <div>Error Page { error.statusText}</div>
}

export default ErrorPage; 