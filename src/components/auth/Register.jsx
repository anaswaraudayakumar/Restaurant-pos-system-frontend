import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { setUser } from "../../redux/slices/userSlice"
import {useNavigate} from "react-router-dom"

import * as Yup from 'yup'
import { registerAPI } from '../../services/allApi';

function Register({SetIsRegister}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [selectedRole, setSelectedRole] = useState('')

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      role: '',
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Minimum 3 characters')
        .required('Employee name is required'),

      email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),

      phone: Yup.string()
        .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
        .required('Phone number is required'),

      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),

      role: Yup.string()
        .required('Please select a role'),
    }),

    onSubmit: (values) => {
      // console.log(values)
      registerMutation.mutate(values)
    },
  })
   const registerMutation = useMutation({
        mutationFn:(loginDetails)=> registerAPI(loginDetails),
        onSuccess:(response)=>{
          toast.success(response.data.message)
          formik.resetForm()
          setSelectedRole('')
          const {data} = response
          // console.log(data);
          setTimeout(()=>{
             SetIsRegister(false)
          },2000)
          
          
          
        },
        onError:(error)=>{
           toast.error( error.response?.data?.message || "User Already present please sign in")
          console.log(error); 
        }
      })
   

  return (
    <div className=''>

      <form onSubmit={formik.handleSubmit}>

        {/* Employee Name */}
        <div>
          <label className='block text-gray-400 mb-1 text-sm font-medium'>
            Employee Name
          </label>

          <div className='flex items-center rounded-lg p-3 px-4 bg-neutral-700'>
            <input
              type="text"
              name='name'
              placeholder="Enter Employee Name"
              className='bg-transparent flex-1 text-white focus:outline-none'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </div>

          {
            formik.touched.name && formik.errors.name && (
              <p className='text-amber-600 text-sm mt-1'>
                {formik.errors.name}
              </p>
            )
          }
        </div>

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

        {/* Phone */}
        <div>
          <label className='block text-gray-400 my-1 text-sm font-medium'>
            Phone Number
          </label>

          <div className='flex items-center rounded-lg p-3 px-4 bg-neutral-700'>
            <input
              type="text"
              name='phone'
              placeholder="Enter Valid Phone Number"
              className='bg-transparent flex-1 text-white focus:outline-none'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
          </div>

          {
            formik.touched.phone && formik.errors.phone && (
              <p className='text-amber-600 text-sm mt-1'>
                {formik.errors.phone}
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

        {/* Roles */}
        <div>
          <label className='block text-gray-400 mt-3 text-sm font-medium'>
            Choose your Role
          </label>

          <div className='flex justify-center items-center gap-3 mt-3'>

            {
              ["Team Lead", "Cashier", "Chef", "Admin"].map((role) => {

                return (
                  <button
                    key={role}
                    type='button'
                    onClick={() => {
                      setSelectedRole(role)
                      formik.setFieldValue('role', role)
                    }}
                    className={`px-4 py-3 w-full rounded-lg transition
                      
                      ${
                        selectedRole === role
                          ? 'bg-amber-500 text-black'
                          : 'bg-neutral-800 text-gray-400'
                      }
                    `}
                  >
                    {role}
                  </button>
                )
              })
            }

          </div>

          {
            formik.touched.role && formik.errors.role && (
              <p className='text-amber-600 text-sm mt-1'>
                {formik.errors.role}
              </p>
            )
          }
        </div>

        {/* Submit */}
        <button
          type='submit'
          className='w-full mt-6 py-3 text-lg rounded-lg font-black bg-amber-500'
        >
          Sign Up
        </button>

      </form>

    </div>
  )
}

export default Register