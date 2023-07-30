import React from 'react'
import { Link } from 'react-router-dom'
import { KeyIcon, LockIcon } from '../../components'

const Register = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-slate-200">
            <div className="w-full mx-1 my-5">
                <form className="lg:max-w-xl bg-gray-50 rounded-lg shadow-md border-2 border-gray-300 mx-auto">
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
                            <span>Traffic Control - Registration</span>
                        </h1>
                    </div>
                    <div className="p-3">
                        <div className="mb-4">
                            <label
                                htmlFor="Fname"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                First Name:
                            </label>
                            <input
                                type="text"
                                id="Fname"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="Lname"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Last Name:
                            </label>
                            <input
                                type="text"
                                id="Lname"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="DOB"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Date of Birth:
                            </label>
                            <input
                                type="date"
                                id="DOB"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-1 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="dd/mm/yyyy"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="gender"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Gender:
                            </label>
                            <select
                                id="gender"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>*** Select ***</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="username"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Username:
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
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
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="NoPlate"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Number Plate:
                            </label>
                            <input
                                type="text"
                                id="NoPlate"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="flex">
                            <Link
                                to="/dashboard"
                                type="submit"
                                className="text-white flex justify-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto m-1 px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            >
                                <span>Register</span>
                            </Link>
                            <Link
                                to="/"
                                className="text-white flex justify-center bg-gray-500 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto m-1 px-5 py-2 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                            >
                                <span className="mx-1">
                                    <KeyIcon fill="white" />
                                </span>
                                <span>Login</span>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
