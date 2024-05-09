import { useContext } from "react"
import { UsersContext } from "../Components/UseContext/UserContext"

export const useUsersContext = () => {
    return useContext(UsersContext);
}