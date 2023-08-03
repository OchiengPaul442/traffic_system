import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { PenIcon, KeyIcon, LockIcon, Loader } from '../../components'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            const res = await axios.post('http://localhost:8081/login', {
                username,
                password,
            })
            if (res.status === 200) {
                // localStorage.setItem('userData', JSON.stringify(res.data.user))
                setTimeout(() => {
                    window.location.href = '/dashboard'
                    setLoading(false)
                }, 1000)
            }
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
    }

    return (
        <div className="flex justify-center items-center h-screen bg-slate-200">
            <div className="w-full mx-1">
                <form
                    onSubmit={handleSubmit}
                    className="lg:max-w-md bg-gray-50 rounded-lg shadow-md border-2 border-gray-300 mx-auto"
                >
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
                                htmlFor="username"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Username:
                            </label>
                            <input
                                type="username"
                                id="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Your username"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex">
                            <button
                                type="submit"
                                className="text-white flex justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto m-1 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                {loading ? (
                                    <div className="pl-2">
                                        <Loader fill={'red'} />
                                    </div>
                                ) : (
                                    <>
                                        <span className="mx-1">
                                            <KeyIcon />
                                        </span>
                                        <span>Login</span>
                                    </>
                                )}
                            </button>
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
