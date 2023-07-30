import React from 'react'
import { TopBar, SideBar } from '../components'

const Page = ({ children }) => {
    const [isSideBarOpen, setIsSideBarOpen] = React.useState(false)
    return (
        <>
            <TopBar setIsSideBarOpen={setIsSideBarOpen} value={isSideBarOpen} />
            <SideBar isSideBarOpen={isSideBarOpen} />
            <div className="p-2 sm:ml-64 h-screen bg-slate-100">
                <div className="mt-14">{children}</div>
            </div>
        </>
    )
}

export default Page
