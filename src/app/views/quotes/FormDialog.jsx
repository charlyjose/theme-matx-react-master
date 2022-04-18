import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

export default function FormDialog() {
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
                Email Quote
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Email Quote</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Base Fare"
                        type="email"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="comments"
                        label="Comments"
                        type="email"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>
                    <Button variant="contained"
                        onClick={handleClose}
                        color="secondary">
                        Email Quote
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
