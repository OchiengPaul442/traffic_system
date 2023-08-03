import React from 'react'
import { TopBar, SideBar } from '../components'

const Page = ({ children }) => {
    const [isSideBarOpen, setIsSideBarOpen] = React.useState(false)
    return (
        <>
            <TopBar setIsSideBarOpen={setIsSideBarOpen} value={isSideBarOpen} />
            <SideBar isSideBarOpen={isSideBarOpen} />
            <div className="p-2 sm:ml-64 h-full">
                <div className="mt-14 mb-6">{children}</div>
            </div>
        </>
    )
}

export default Page
