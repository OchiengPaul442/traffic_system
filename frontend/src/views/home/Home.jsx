import React, { useEffect } from 'react'
import { Table } from '../../components'
import Page from '../../layout/Page'
import Button from '@mui/material/Button'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import axios from 'axios'

const Home = () => {
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    useEffect(() => {
        setLoading(true)
        axios
            .get('http://localhost:8081/users')
            .then((res) => {
                setData(res.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }, [])

    console.log('-->', data, loading)

    const columns = [
        { id: 'profile', label: 'PROFILE', minWidth: 170 },
        { id: 'name', label: 'NAME', minWidth: 100 },
        {
            id: 'DOB',
            label: 'DATE OF BIRTH',
            minWidth: 170,
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'gender',
            label: 'GENDER',
            minWidth: 170,
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'username',
            label: 'USERNAME',
            minWidth: 170,
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'route',
            label: 'ROUTE',
            minWidth: 170,
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'action',
            label: 'ACTION',
            minWidth: 170,
            align: 'center',
        },
    ]

    const rows = [
        {
            profile: 'https://source.unsplash.com/random',
            name: 'Name 1',
            DOB: '01/01/2000',
            gender: 'Male',
            username: 'Username1',
            route: 'Route 1',
            action: (
                <Button onClick={() => {}} variant="contained" color="error">
                    <span className="flex items-center text-sm">
                        <CloseOutlinedIcon className="mr-1 w-1" />
                        Delete
                    </span>
                </Button>
            ),
        },
        {
            profile: 'https://source.unsplash.com/random',
            name: 'Name 2',
            DOB: '02/02/2001',
            gender: 'Female',
            username: 'Username2',
            route: 'Route 2',
            action: (
                <Button onClick={() => {}} variant="contained" color="error">
                    <span className="flex items-center text-sm">
                        <CloseOutlinedIcon className="mr-1 w-1" />
                        Delete
                    </span>
                </Button>
            ),
        },
        {
            profile: 'https://source.unsplash.com/random',
            name: 'Name 3',
            DOB: '03/03/2002',
            gender: 'Male',
            username: 'Username3',
            route: 'Route 3',
            action: (
                <Button onClick={() => {}} variant="contained" color="error">
                    <span className="flex items-center text-sm">
                        <CloseOutlinedIcon className="mr-1 w-1" />
                        Delete
                    </span>
                </Button>
            ),
        },
        {
            profile: 'https://source.unsplash.com/random',
            name: 'Name 4',
            DOB: '04/04/2003',
            gender: 'Female',
            username: 'Username4',
            route: 'Route 4',
            action: (
                <Button onClick={() => {}} variant="contained" color="error">
                    <span className="flex items-center text-sm">
                        <CloseOutlinedIcon className="mr-1 w-1" />
                        Delete
                    </span>
                </Button>
            ),
        },
        {
            profile: 'https://source.unsplash.com/random',
            name: 'Name 5',
            DOB: '05/05/2004',
            gender: 'Male',
            username: 'Username5',
            route: 'Route 5',
            action: (
                <Button onClick={() => {}} variant="contained" color="error">
                    <span className="flex items-center text-sm">
                        <CloseOutlinedIcon className="mr-1 w-1" />
                        Delete
                    </span>
                </Button>
            ),
        },
        {
            profile: 'https://source.unsplash.com/random',
            name: 'Name 6',
            DOB: '06/06/2005',
            gender: 'Female',
            username: 'Username6',
            route: 'Route 6',
            action: (
                <Button onClick={() => {}} variant="contained" color="error">
                    <span className="flex items-center text-sm">
                        <CloseOutlinedIcon className="mr-1 w-1" />
                        Delete
                    </span>
                </Button>
            ),
        },
        {
            profile: 'https://source.unsplash.com/random',
            name: 'Name7',
            DOB: '07/07/2006',
            gender: 'Male',
            username: 'Username7',
            route: 'Route7',
            action: (
                <Button onClick={() => {}} variant="contained" color="error">
                    <span className="flex items-center text-sm">
                        <CloseOutlinedIcon className="mr-1 w-1" />
                        Delete
                    </span>
                </Button>
            ),
        },
        {
            profile: 'https://source.unsplash.com/random',
            name: 'Name8',
            DOB: '08/08/2007',
            gender: 'Female',
            username: 'Username8',
            route: 'Route8',
            action: (
                <Button onClick={() => {}} variant="contained" color="error">
                    <span className="flex items-center text-sm">
                        <CloseOutlinedIcon className="mr-1 w-1" />
                        Delete
                    </span>
                </Button>
            ),
        },
        {
            profile: 'https://source.unsplash.com/random',
            name: 'Name9',
            DOB: '09/09/2008',
            gender: 'Male',
            username: 'Username9',
            route: 'Route9',
            action: (
                <Button onClick={() => {}} variant="contained" color="error">
                    <span className="flex items-center text-sm">
                        <CloseOutlinedIcon className="mr-1 w-1" />
                        Delete
                    </span>
                </Button>
            ),
        },
        {
            profile: 'https://source.unsplash.com/random',
            name: 'Name10',
            DOB: '10/10/2009',
            gender: 'Female',
            username: 'Username10',
            route: 'Route10',
            action: (
                <Button onClick={() => {}} variant="contained" color="error">
                    <span className="flex items-center text-sm">
                        <CloseOutlinedIcon className="mr-1 w-1" />
                        Delete
                    </span>
                </Button>
            ),
        },
        {
            profile: 'https://source.unsplash.com/random',
            name: 'Name11',
            DOB: '11/11/2010',
            gender: 'Male',
            username: 'Username11',
            route: 'Route11',
            action: (
                <Button onClick={() => {}} variant="contained" color="error">
                    <span className="flex items-center text-sm">
                        <CloseOutlinedIcon className="mr-1 w-1" />
                        Delete
                    </span>
                </Button>
            ),
        },
        {
            profile: 'https://source.unsplash.com/random',
            name: 'Name12',
            DOB: '12/12/2011',
            gender: 'Female',
            username: 'Username12',
            route: 'Route12',
            action: (
                <Button onClick={() => {}} variant="contained" color="error">
                    <span className="flex items-center text-sm">
                        <CloseOutlinedIcon className="mr-1 w-1" />
                        Delete
                    </span>
                </Button>
            ),
        },
        {
            profile: 'https://source.unsplash.com/random',
            name: 'Name13',
            DOB: '13/01/2012',
            gender: 'Male',
            username: 'Username13',
            route: 'Route13',
            action: (
                <Button onClick={() => {}} variant="contained" color="error">
                    <span className="flex items-center text-sm">
                        <CloseOutlinedIcon className="mr-1 w-1" />
                        Delete
                    </span>
                </Button>
            ),
        },
        {
            profile: 'https://source.unsplash.com/random',
            name: 'Name14',
            DOB: '14 /02 /2013',
            gender: 'Female',
            username: 'Username14',
            route: 'Route14',
            action: (
                <Button onClick={() => {}} variant="contained" color="error">
                    <span className="flex items-center text-sm">
                        <CloseOutlinedIcon className="mr-1 w-1" />
                        Delete
                    </span>
                </Button>
            ),
        },
        {
            profile: 'https://source.unsplash.com/random',
            name: 'Name15',
            DOB: '15 /03 /2014',
            gender: 'Male',
            username: 'Username15',
            route: 'Route15',
            action: (
                <Button onClick={() => {}} variant="contained" color="error">
                    <span className="flex items-center text-sm">
                        <CloseOutlinedIcon className="mr-1 w-1" />
                        Delete
                    </span>
                </Button>
            ),
        },
    ]

    return (
        <Page>
            <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Add Clerk
                </h1>
                <div className="lg:mx-7 mb-4">
                    <form>
                        <div className="grid gap-6 mb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <div>
                                <label
                                    htmlFor="first_name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    First name:
                                </label>
                                <input
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
                            <Button color="success" variant="contained">
                                save
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Users Info
                </h1>
                <div className="lg:mx-7">
                    <Table columns={columns} rows={rows} />
                </div>
            </div>
        </Page>
    )
}

export default Home
