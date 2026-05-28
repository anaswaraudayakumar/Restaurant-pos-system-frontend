import axios from 'axios'

const axiosInstance = axios.create({
     baseURL: import.meta.env.VITE_BASE_URL,
     
    //  for cookies
    withCredentials: true,

    headers: {
        "Content-Type": "application/json"
    }
})
console.log(import.meta.env.VITE_BASE_URL)

//response interceptors.response :Handling Global/common Errors
axiosInstance.interceptors.response.use(
    (response)=>{
        console.log("response recived");
        return response
        
    },
    (error)=>{
        if(error.response){
            const status =error.response.status
            if(status==401){
                console.log("Unathourised access-invalid token!!!")     
            }else if (status==404){
                console.log("API not found!!");
                
            }else if(status==500){
                console.log("Server Error!!!");
                
            }else if (error.request){
                console.log("Client error");
                return error.request

            }else{
                console.log("Error: "+error.message);
                
            }
            return Promise.reject(error)
        }
    }
)
export default axiosInstance
