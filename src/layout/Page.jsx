import React from 'react'
import { TopBar, SideBar } from '../components'

const Page = ({ children }) => {
    return (
        <>
            <TopBar />
            <SideBar />
            <div className="p-2 sm:ml-64">
                <div className="mt-14">{children}</div>
            </div>
        </>
    )
}

export default Page
