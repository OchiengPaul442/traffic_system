import React from 'react'
import { Link } from 'react-router-dom'
import Clerks from '../../assets/icons/users.svg'
import Motorists from '../../assets/icons/motorists.svg'
import Road from '../../assets/icons/road.svg'
import Routes from '../../assets/icons/server.svg'

const SideBar = ({ isSideBarOpen }) => {
    return (
        <aside
            id="logo-sidebar"
            className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
                !isSideBarOpen ? '-translate-x-full' : 'translate-x-0'
            } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
            aria-label="Sidebar"
        >
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    <li>
                        <Link
                            to={'/dashboard'}
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <img src={Clerks} width={24} alt="" />
                            <span className="ml-3">Clerks</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'/motorists'}
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <img src={Motorists} width={24} alt="" />
                            <span className="flex-1 ml-3 whitespace-nowrap">
                                Motorists
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'/routes'}
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <img src={Routes} width={24} alt="" />
                            <span className="flex-1 ml-3 whitespace-nowrap">
                                Routes
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'/traffic'}
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <img src={Road} width={24} alt="" />
                            <span className="flex-1 ml-3 whitespace-nowrap">
                                View Traffic
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default SideBar
