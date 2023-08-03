import * as React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import TablePagination from '@mui/material/TablePagination'

const TableComponent = ({ columns, rows, onDelete, title }) => {
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(5)
    const [searchQuery, setSearchQuery] = React.useState('')

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value)
        setPage(0) // Reset the page when the search query changes
    }

    const displayedRows = rows
        .filter((row) =>
            Object.values(row)
                .join(' ')
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
        )
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <div className="p-4 w-full flex justify-between">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        {title}
                    </h1>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        style={{
                            borderRadius: '0.375rem',
                            width: 'auto',
                        }}
                    />
                </div>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {displayedRows.map((row) => {
                            return window.location.pathname === '/dashboard' ? (
                                <TableRow key={row.Username}>
                                    <TableCell>
                                        <Avatar
                                            alt={row.Username}
                                            src={row.profilePhoto}
                                        />
                                    </TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell align="center">
                                        {new Date(row.dob).toLocaleString(
                                            'en-US'
                                        )}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.Gender}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.Username}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.routes}
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button
                                            variant="contained"
                                            color="error"
                                            startIcon={<CloseOutlinedIcon />}
                                            onClick={() =>
                                                onDelete(row.clerkId)
                                            }
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                window.location.pathname === '/routes' && (
                                    <TableRow key={row.routeId}>
                                        <TableCell>{row.Name}</TableCell>
                                        <TableCell align="right">
                                            {row.no_lanes}
                                        </TableCell>
                                        <TableCell align="right">
                                            <Button
                                                variant="contained"
                                                color="error"
                                                startIcon={
                                                    <CloseOutlinedIcon />
                                                }
                                                onClick={() =>
                                                    onDelete(row.routeId)
                                                }
                                            >
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

export default TableComponent
