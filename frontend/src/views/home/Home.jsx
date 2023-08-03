import React, { useEffect, useState } from 'react'
import { TableComponent, Loader } from '../../components'
import Page from '../../layout/Page'
import Button from '@mui/material/Button'
import axios from 'axios'

const Home = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dob, setDob] = useState('')
    const [Gender, setGender] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [route, setRoute] = useState('')

    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            firstName,
            lastName,
            dob,
            Gender,
            username,
            password,
            route,
        }
        try {
            setLoading(true)
            const res = await axios.post('http://localhost:8081/addClerk', data)

            setFirstName('')
            setLastName('')
            setDob('')
            setGender('')
            setUsername('')
            setPassword('')
            setRoute('')

            setTimeout(() => {
                setLoading(false)
            }, 1000)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (id) => {
        // alert('Are you sure you want to delete this clerk?', id)
        try {
            const res = await axios.delete(
                `http://localhost:8081/deleteClerk/${id}`
            )
            console.log(res)
        } catch (error) {
            console.log(error)
        }
        fetchClerkData()
    }

    const fetchClerkData = async () => {
        try {
            const res = await axios.get('http://localhost:8081/clerks')
            setData(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchClerkData()
    }, [])

    const columns = [
        { id: 'PROFILE', label: 'PROFILE', minWidth: 170 },
        { id: 'NAME', label: 'NAME', minWidth: 100 },
        {
            id: 'DOB',
            label: 'DATE OF BIRTH',
            minWidth: 170,
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'GENDER',
            label: 'GENDER',
            minWidth: 170,
            align: 'right',
        },
        {
            id: 'USERNAME',
            label: 'USERNAME',
            minWidth: 170,
            align: 'right',
        },
        {
            id: 'ROUTE',
            label: 'ROUTE',
            minWidth: 170,
            align: 'right',
        },
        {
            id: 'ACTION',
            label: 'ACTION',
            minWidth: 170,
            align: 'right',
        },
    ]

    return (
        <Page>
            <div
                style={{
                    borderRadius: '10px',
                }}
            >
                <div className="lg:mx-7 mb-4">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        Add Clerk
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-6 mb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <div>
                                <label
                                    htmlFor="first_name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    First name:
                                </label>
                                <input
                                    onChange={(e) => {
                                        setFirstName(e.target.value)
                                    }}
                                    value={firstName}
                                    type="text"
                                    id="first_name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder=""
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="last_name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Last name:
                                </label>
                                <input
                                    onChange={(e) => {
                                        setLastName(e.target.value)
                                    }}
                                    value={lastName}
                                    type="text"
                                    id="last_name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder=""
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="gender"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Gender:
                                </label>
                                <select
                                    onChange={(e) => {
                                        setGender(e.target.value)
                                    }}
                                    value={Gender}
                                    id="gender"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option selected>*** Select ***</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Date Of Birth:
                                </label>
                                <input
                                    onChange={(e) => {
                                        setDob(e.target.value)
                                    }}
                                    value={dob}
                                    type="date"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-1 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="dd/mm/yyyy"
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid gap-6 mb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <div>
                                <label
                                    htmlFor="username"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Username:
                                </label>
                                <input
                                    onChange={(e) => {
                                        setUsername(e.target.value)
                                    }}
                                    value={username}
                                    type="text"
                                    id="username"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder=""
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="pass"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password:
                                </label>
                                <input
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                    value={password}
                                    type="password"
                                    id="pass"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder=""
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="file_input"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Profile Image:
                                </label>
                                <input
                                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    id="file_input"
                                    type="file"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="route"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Route:
                                </label>
                                <select
                                    onChange={(e) => {
                                        setRoute(e.target.value)
                                    }}
                                    value={route}
                                    id="route"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option selected>
                                        *** Choose Route ***
                                    </option>
                                    <option value="Clerk1">Clerk1</option>
                                    <option value="Clerk2">Clerk2</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full">
                            <Button
                                color="success"
                                type="submit"
                                variant="contained"
                            >
                                {loading ? (
                                    <div className="pl-2">
                                        <Loader fill={'blue'} />
                                    </div>
                                ) : (
                                    <span>save</span>
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <div className="lg:mx-7 mt-10">
                    <TableComponent
                        title="Users Info"
                        columns={columns}
                        rows={data && data}
                        onDelete={(id) => handleDelete(id)}
                    />
                </div>
            </div>
        </Page>
    )
}

export default Home
