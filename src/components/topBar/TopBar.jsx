import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import User from '../../assets/icons/user.svg'
import Downarrow from '../../assets/icons/downarrow.svg'

const TopBar = ({ setIsSideBarOpen, value }) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <button
                            onClick={() => setIsSideBarOpen(!value)}
                            data-drawer-target="logo-sidebar"
                            data-drawer-toggle="logo-sidebar"
                            aria-controls="logo-sidebar"
                            type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            <span className="sr-only">Open sidebar</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                ></path>
                            </svg>
                        </button>
                        <Link to="/dashboard" className="flex ml-2 md:mr-24">
                            <span className="self-center text-xl font-bold sm:text-2xl whitespace-nowrap text-blue-600 dark:text-white">
                                DASHBOARD
                            </span>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center ml-3">
                            {/* menu */}
                            <Button
                                id="basic-button"
                                aria-controls="basic-menu"
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                variant="text"
                                className="flex items-center justify-center px-2 py-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            >
                                <img
                                    src={User}
                                    alt="user"
                                    className="w-3 h-3 mr-2"
                                />
                                <span className="text-sm">(Administator)</span>
                                <img
                                    src={Downarrow}
                                    alt="downarrow"
                                    className="w-3 h-3 ml-2"
                                />
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                    style: {
                                        width: '150px',
                                    },
                                }}
                            >
                                <MenuItem
                                    sx={{ justifyContent: 'center' }}
                                    onClick={handleClose}
                                >
                                    Profile
                                </MenuItem>
                                <MenuItem
                                    sx={{ justifyContent: 'center' }}
                                    onClick={handleClose}
                                >
                                    Logout
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default TopBar
