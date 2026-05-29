import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation } from "@tanstack/react-query";
import { loginAPI} from '../../services/allApi'
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { setUser } from "../../redux/slices/userSlice"
import {useNavigate} from "react-router-dom"
function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: Yup.object({  
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      }),
  
      onSubmit: (values) => {
        console.log(values)
        loginMutation.mutate(values)
      },
    })
    const loginMutation = useMutation({
      mutationFn:(loginDetails)=> loginAPI(loginDetails),
      onSuccess:(response)=>{
        toast.success(response.data.message)
        formik.resetForm()
        console.log(response);
        const {user}= response.data
        const{_id,name,email,phone,role} = user
        dispatch(setUser({_id,name,email,phone,role}))
         setTimeout(()=>{

        navigate('/')

    },6000)
      },
      onError:(error)=>{
         toast.error( error.response?.data?.message || "Invalid Email or Password")
        console.log(error); 
      }
    })
  
      
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {/* Email */}
        <div>
          <label className='block text-gray-400 mb-1 mt-1 text-sm font-medium'>
            Email id
          </label>
          <div className='flex items-center rounded-lg p-3 px-4 bg-neutral-700'>
            <input
              type="email"
              name='email'
              placeholder="Email"
              className='bg-transparent flex-1 text-white focus:outline-none'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>
          {
            formik.touched.email && formik.errors.email && (
              <p className='text-amber-600 text-sm mt-1'>
                {formik.errors.email}
              </p>
            )
          }
        </div>

        {/* Password */}
        <div>
          <label className='block text-gray-400 mb-1 mt-1 text-sm font-medium'>
            Password
          </label>
          <div className='flex items-center rounded-lg p-3 px-4 bg-neutral-700'>
            <input
              type="password"
              name='password'
              placeholder="Password"
              className='bg-transparent flex-1 text-white focus:outline-none'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </div>
          {
            formik.touched.password && formik.errors.password && (
              <p className='text-amber-600 text-sm mt-1'>
                {formik.errors.password}
              </p>
            )
          }
        </div>
        {/* Submit */}
        <button
          type='submit'
          className='w-full mt-6 py-3 text-lg rounded-lg font-black bg-amber-500'
        >
          Sign In
        </button>

      </form>
    </div>
  )
}

export default Login 