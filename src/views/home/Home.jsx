import React, { useEffect } from 'react'
import 'jquery/dist/jquery.min.js'
import 'datatables.net-dt/js/dataTables.dataTables'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import $ from 'jquery'
import Page from '../../layout/Page'

const Home = () => {
    useEffect(() => {
        $('#example').DataTable()
    }, [])

    return (
        <Page>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Users Info
            </h1>
            <div className="lg:mx-7">
                <table
                    id="example"
                    className="display"
                    style={{ width: '100%' }}
                >
                    <thead>
                        <tr>
                            <th>PROFILE</th>
                            <th>NAME</th>
                            <th>DATE OF BIRTH</th>
                            <th>GENDER</th>
                            <th>USERNAME</th>
                            <th>ROUTE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array(4)
                            .fill()
                            .map((_, index) => (
                                <tr key={index}>
                                    {Array(7)
                                        .fill()
                                        .map((_, index) => (
                                            <td key={index}>prof</td>
                                        ))}
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </Page>
    )
}

export default Home
