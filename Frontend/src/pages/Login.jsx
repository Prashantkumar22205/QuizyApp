import React, { useContext } from 'react'
import { useState } from 'react';
import Homepage from './Homepage';
import axios from 'axios';
import { useNavigate ,Link, Outlet} from 'react-router-dom';
import {logincontext} from '../context/Context';


const Login = () => {

    const [email, setEmail,password, setPassword,islogin,setIslogin] = useContext(logincontext); 
  
    const navigate= useNavigate()

    const handleSubmit =async(e)=>{
        e.preventDefault();

        try{
          const res = await axios.post("http://localhost:3000/api/auth/login",{
            email,
            password
          },
            {
            withCredentials: true, // ✅ MUST for cookies
            }
        );
        
        console.log("Sumbit succssfull");
        setIslogin(true)
        navigate("/");

        }catch(err){
             console.log(err.response?.data || err.message);
             alert("Invalid credentials");
        }
      
  }
  return (
   <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
        {/* Logo / Title */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-slate-900">
            Quiz Portal Login
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Sign in to create and attempt quizzes.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm font-medium text-slate-700">
                Password
              </label>
              <button
                type="button"
                className="text-xs text-purple-500 hover:underline"
              >
                Forgot password?
              </button>
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="••••••••"
            />
          </div>

          {/* Remember + Login */}
          <div className="flex items-center justify-between text-sm mt-1">
            <label className="flex items-center gap-2 text-slate-600">
              <input
                type="checkbox"
                className="rounded border-slate-300"
              />
              <span>Remember me</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full mt-4 inline-flex items-center justify-center rounded-lg bg-purple-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-purple-600 transition"
          >
            Log In
          </button>
        </form>

        {/* Footer */}
        <p className="mt-4 text-center text-sm text-slate-500">
          Don&apos;t have an account?{" "}
          {/* <button
            type="button"
            className="text-blue-600 hover:underline"
          >
            Register
          </button> */}
          <Link  className="text-blue-600 hover:underline" to='/register'>Register</Link>
        </p>
      </div>
     
    </div>
  )
}

export default Login
