import { toast } from "react-hot-toast"
import { deleteToken } from "../../redux/slices/authReducer"
import { setUser } from "../../redux/slices/profileReducer"
import { resetCart } from "../../redux/slices/cartReducer"

export function logout(navigate) {
    return (dispatch) => {
        dispatch(deleteToken())
        dispatch(setUser(null))
        dispatch(resetCart())
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        toast.success("Logged Out")
        navigate("/")
    }
}
