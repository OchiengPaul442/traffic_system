import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <Link
                                to="/dashboard"
                                className="flex ml-2 md:mr-24"
                            >
                                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                                    TRAFFIC CONTROL
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-gray-800 mb-4">
                        404
                    </h1>
                    <h2 className="text-2xl font-semibold text-gray-600 mb-6">
                        {`This page couldn't be found.`}
                    </h2>
                    <p className="text-gray-500 mb-8">
                        The page you are looking for may have been moved or
                        deleted.
                    </p>
                    <Link
                        to="/dashboard"
                        className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600"
                    >
                        Back to Dashboard
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Error404
