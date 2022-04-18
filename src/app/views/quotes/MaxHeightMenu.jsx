import React from 'react'
import { Icon, Menu, MenuItem, IconButton } from '@mui/material'
import DialogTitle from '@mui/material/DialogTitle'

const options = [
    'Edit',
    'Delete',
]

const ITEM_HEIGHT = 48

function MaxHeightMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)

    function handleClick(event) {
        setAnchorEl(event.currentTarget)
    }

    function handleClose() {
        setAnchorEl(null)
    }

    return (
        <div>
            <IconButton
                aria-label="More"
                aria-owns={open ? 'long-menu' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <Icon>more_vert</Icon>
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: 200,
                    },
                }}
            >
                <DialogTitle id="form-dialog-title">Change status</DialogTitle>
                {options.map((option) => (
                    <MenuItem
                        key={option}
                        selected={option === 'Pyxis'}
                        onClick={handleClose}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}

export default MaxHeightMenu
