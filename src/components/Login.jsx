import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from "./index"
import { useDispatch } from 'react-redux'
import { authService } from '../appwrite/config'
import { useForm } from "react-hook-form"


function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(" ")

  //   giving the method name '''Login ''' instead of usual handleSubmit , trying to learn ofcourse
  const login = async (data) => {
    // the first thing to do, is empty out the error , its the basic functionality for Form
    setError("")
    try {
      // in this data object is going to be passed on.
      const session = await authService.login(data)
      if (session) {
        // userData humesha await se hi niklega.
        // because we are getting are data from calling getCurrentUser

        const userData = await authService.getCurrentUser()
        if (userData) dispatch(authLogin(userData));
        navigate("/")
      }
    } catch (error) {
      setError(error.message)
    }
  }


  return (
    <div className='flex items-center justify-center w-full'>

      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%"/>
          </span>
        </div>

      <h2 className="text-center text-2xl font-bold leading-tight">
        Sign in to your account</h2>

      <p className='mt-2 text-center text-base text-black/60'>
        Don&apos;t have any account?&nbsp;
        <Link
          to="/signup"
          className="font-medium text-primary transition-all duration-200 hover:underline"
        >
          Sign Up
        </Link>
      </p>
        {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}

{/* handleSubmit is a method in which you give your own method for applying inside the form i guess */}
      <form className='mt-8' onSubmit={handleSubmit(login)}></form>
        <div className='space=y-5'>
{/* making email input field */}
          <Input 
          label="Email: "
          placeholder='Enter your Email'
          type="Email"
          {...register("email", {
            required: true,
            validate: {
              matchPatern: (value)=> /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.
              test(value) || 
              "Email address must be valid address",
            }
          }
        )
        }
          />
{/* Making password input field */}
          <Input
          label="Password"
          type='password'
          placeholder='Enter your password'
          {...register("password", {
            required: true,
          })}
          />
          <Button
          type="Submit"
          className='w-full'
          
          >Sign In</Button>
        </div>
      </div>
    </div>
  )
}

export default Login