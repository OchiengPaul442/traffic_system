import React from 'react'
import { Table } from '../../components'
import Page from '../../layout/Page'
import Button from '@mui/material/Button'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'

const Route = () => {
    const columns = [
        { id: 'name', label: 'ROUTENAME', minWidth: 170 },
        {
            id: 'NO OF LANES',
            label: 'NO OF LANES',
            minWidth: 170,
            align: 'right',
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
            name: 'Route 1',
            'NO OF LANES': 2,
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
            name: 'Route 2',
            'NO OF LANES': 4,
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
            name: 'Route 3',
            'NO OF LANES': 3,
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
            name: 'Route 4',
            'NO OF LANES': 2,
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
            name: 'Route 5',
            'NO OF LANES': 1,
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
            name: 'Route 6',
            'NO OF LANES': 6,
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
            name: 'Route 7',
            'NO OF LANES': 5,
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
            name: 'Route 8',
            'NO OF LANES': 4,
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
                    Add Route
                </h1>
                <div className="lg:mx-7 mb-4">
                    <form>
                        <div className="items-center grid gap-6 mb-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            <div>
                                <label
                                    htmlFor="username"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Route Name:
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
                                    htmlFor="lanenumber"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    No. of Lanes:
                                </label>
                                <input
                                    type="number"
                                    id="lanenumber"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder=""
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <Button
                                    color="success"
                                    variant="contained"
                                    className="lg:top-4"
                                >
                                    save
                                </Button>
                            </div>
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

export default Route
