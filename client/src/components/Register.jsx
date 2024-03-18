import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    userName: '',
    fullName: '',
    email: '',
    password:''
  });

  const handleInputChange = (event) => {
    let { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit=async (e)=>{
    e.preventDefault();
    const response = axios
      .post("/user/register",formData)
      .then(res => console.log("user registerred Succesfully",res) )
      .catch(err => console.error("error while registering user",err));
  }

  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-lg 2xl:max-w-xl border border-gray-300 rounded-lg p-8">
          <h2 className="text-center text-2xl font-bold leading-tight text-white">
            Sign up to create account
          </h2>
          <p className="mt-2 text-center text-base text-gray-400">
            Already have an account?{' '}
            <Link
              to="/login"
              title=""
              className="font-medium text-blue-400 transition-all duration-200 hover:underline"
            >
              LogIn
            </Link>
          </p>
          <form action="" method="POST" onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-5">
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-[#191926] px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  name='userName'
                  value={formData.userName}
                  onChange={handleInputChange}
                  placeholder="Enter your UserName"
                  id="userName"
                  required
                ></input>
              </div>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-[#191926] px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Enter Your Full Name"
                  id="name"
                  value={formData.fullName}
                  name='fullName'
                  onChange={handleInputChange}
                  required
                ></input>
              </div>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-[#191926] px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Enter Your Email"
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  id="email"
                  required
                ></input>
              </div>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-[#191926] px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="password"
                  name='password'
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter Your Password"
                  id="password"
                  required
                ></input>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-blue-900 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-blue-900/80"
                >
                  Create Account <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
