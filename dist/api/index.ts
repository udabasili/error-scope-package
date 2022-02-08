import axios from "axios"
import { BASEURL } from "../config"

const apiCall = axios.create({
    baseURL: BASEURL
})
export const sendError = (error: Error, errorInfo: any) => {
    const  data = {
        error,
        errorInfo
    }
    apiCall.post('/send-error', data, {
        headers: {

        }
    })
}