import React, { useState, useEffect } from 'react'
import { TableComponent, Loader } from '../../components'
import Page from '../../layout/Page'
import Button from '@mui/material/Button'
import axios from 'axios'

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

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    const [routeName, setRouteName] = useState('')
    const [numberOfLanes, setNumberOfLanes] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const { data } = await axios.post(
                'http://localhost:8081/addRoute',
                {
                    routeName,
                    numberOfLanes,
                }
            )
            console.log(data)
            setTimeout(() => {
                setLoading(false)
            }, 1000)

            setRouteName('')
            setNumberOfLanes('')
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const onDelete = async (id) => {
        try {
            const { data } = await axios.delete(
                `http://localhost:8081/deleteRoute/${id}`
            )
            console.log(data)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }

        fetchAllRoutes()
    }

    const fetchAllRoutes = async () => {
        try {
            const { data } = await axios.get('http://localhost:8081/routes')
            setData(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAllRoutes()
    }, [])

    return (
        <Page>
            <div>
                <div className="lg:mx-7 mb-4">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        Add Route
                    </h1>
                    <form onSubmit={handleSubmit}>
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
                                    value={routeName}
                                    onChange={(e) =>
                                        setRouteName(e.target.value)
                                    }
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
                                    value={numberOfLanes}
                                    onChange={(e) =>
                                        setNumberOfLanes(e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <Button
                                    type="submit"
                                    color="success"
                                    variant="contained"
                                    className="lg:top-4"
                                >
                                    {loading ? (
                                        <div className="pl-2">
                                            <Loader fill={'blue'} />
                                        </div>
                                    ) : (
                                        <span>Save</span>
                                    )}
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <div className="lg:mx-7">
                    <TableComponent
                        title="All Routes"
                        columns={columns}
                        rows={data}
                        onDelete={(id) => onDelete(id)}
                    />
                </div>
            </div>
        </Page>
    )
}

export default Route
