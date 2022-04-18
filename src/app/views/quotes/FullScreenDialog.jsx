import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'
import { H6 } from 'app/components/Typography'
import { useTheme } from '@mui/system'

import SimpleForm from './SimpleForm'
import { SimpleCard } from 'app/components'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

export default function FullScreenDialog() {
    const theme = useTheme()
    const [open, setOpen] = React.useState(false)

    function handleClickOpen() {
        setOpen(true)
    }
    function handleClose() {
        setOpen(false)
    }

    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                onClick={handleClickOpen}
            >
                Create Quote
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="Close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <H6
                            sx={{
                                flex: 1,
                                marginLeft: theme.spacing(2),
                            }}
                        >
                            Create Quote
                        </H6>
                        <Button color="inherit" onClick={handleClose}>
                            Send Quote
                        </Button>
                    </Toolbar>
                </AppBar>


                <SimpleCard title="Create Quote">
                    <SimpleForm />
                </SimpleCard>


            </Dialog>
        </div>
    )
}
