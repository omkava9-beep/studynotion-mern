import { toast } from "react-hot-toast"
import { setUser } from "../../redux/slices/profileReducer"
import { apiConnector } from "../../../services/apiConnector"
import { profile } from "../../../services/apis"

export function updateDisplayPicture(token, formData) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        try {
            const response = await apiConnector(
                "POST",
                profile.UPLOAD_PROFILE_PICTURE_API,
                formData,
                {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                }
            )
            console.log(
                "UPDATE_DISPLAY_PICTURE_API RESPONSE............",
                response
            )

            if (!response.data.success) {
                throw new Error(response.data.message)
            }
            toast.success("Display Picture Updated Successfully")
            dispatch(setUser(response.data.data))
            localStorage.setItem("user", JSON.stringify(response.data.data))
        } catch (error) {
            console.log("UPDATE_DISPLAY_PICTURE_API ERROR............", error)
            toast.error("Could Not Update Display Picture")
        }
        toast.dismiss(toastId)
    }
}
