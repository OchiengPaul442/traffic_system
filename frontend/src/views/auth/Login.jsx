import React from 'react'
import { Link } from 'react-router-dom'
import { PenIcon, KeyIcon, LockIcon } from '../../components'

const Login = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-slate-200">
            <div className="w-full mx-1">
                <form className="lg:max-w-md bg-gray-50 rounded-lg shadow-md border-2 border-gray-300 mx-auto">
                    <div
                        className="bg-blue-800 mb-4 "
                        style={{
                            borderTopLeftRadius: '8px',
                            borderTopRightRadius: '8px',
                        }}
                    >
                        <h1 className="flex justify-center text-2xl p-2 font-semibold text-white dark:text-white">
                            <span className="mt-1 mx-1">
                                <LockIcon fill="white" />
                            </span>
                            <span>Traffic Control - Login Panel</span>
                        </h1>
                    </div>
                    <div className="p-3">
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Username:
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Your username"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Password:
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Your password"
                                required
                            />
                        </div>
                        <div className="flex">
                            <Link
                                to="/dashboard"
                                type="submit"
                                className="text-white flex justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto m-1 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                <span className="mx-1">
                                    <KeyIcon />
                                </span>
                                <span>Login</span>
                            </Link>
                            <Link
                                to="/register"
                                className="text-white flex justify-center bg-gray-500 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto m-1 px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                            >
                                <span className="mx-1">
                                    <PenIcon fill="white" />
                                </span>
                                <span>Register</span>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
