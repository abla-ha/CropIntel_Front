import { useSelector } from "react-redux";

export default function Authenticated({ children }) {
    const userToken = useSelector(state => state.user);
    console.log(userToken)
    if(!userToken) {
        window.location.href = '/login';
        return <>Loading...</>;
    }
    return children
}