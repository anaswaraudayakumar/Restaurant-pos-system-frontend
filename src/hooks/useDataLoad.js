import { useEffect, useState } from "react"
import { singleUserAPI } from "../services/allApi"
import { useDispatch } from "react-redux"
import { removeUser, setUser } from "../redux/slices/userSlice"
import { useNavigate } from "react-router-dom"


const useLoadData = ()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isLoading,setIsLoading] = useState(true)
    useEffect(()=>{
        const fetchUser = async ()=>{
            try {
                const { data } = await singleUserAPI()
                
                const {user} = data
                 const{_id,name,email,phone,role} = user
                    dispatch(setUser({_id,name,email,phone,role}))
            } catch (error) {
                console.log(error);
                dispatch(removeUser())
                navigate("/auth")
            }finally{
                setIsLoading(false)
            }
        }
        fetchUser()
    },[dispatch,navigate])
    return isLoading
}

export default useLoadData