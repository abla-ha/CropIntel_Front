import { useDispatch, useSelector } from "react-redux";
import { login } from "../../slices/userSlice";


export default function Unauthenticated({ children }) {
    const userToken = useSelector(state => state.user);
    if(userToken) {
        window.location.href = '/home';
        return <>Loading...</>;
    }
    return children
}