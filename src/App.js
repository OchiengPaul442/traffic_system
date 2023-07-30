import './App.css'
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Loader } from './components/'
import Error404 from './views/404/Error404'

// pages
const Login = React.lazy(() => import('./views/auth/Login'))
const Dashboard = React.lazy(() => import('./views/home/Home'))
const Register = React.lazy(() => import('./views/auth/Register'))

const App = () => {
    return (
        <Router>
            <Suspense
                fallback={
                    <div className="flex justify-center items-center h-screen">
                        <Loader width="50" height="50" fill={'blue'} />
                    </div>
                }
            >
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </Suspense>
        </Router>
    )
}

export default App
