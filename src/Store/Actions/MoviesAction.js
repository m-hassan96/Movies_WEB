import axios from "axios";
import { axiosInstance } from "../../Network/axiosInstance"
export const getMoviesList = () => (dispatch)  => {

    return axiosInstance.get("")
    .then((res) =>  dispatch({
        type: "GET_MOVIES_LIST",
        payload: res.data
    })) 
    .catch((err) => console.log(err))
}
