import React from 'react'
// import SimpleMenu from './SimpleMenu'
// import SelectedMenu from './SelectedMenu'
// import CustomizedMenu from './CustomizedMenu'
// import MaxHeightMenu from './MaxHeightMenu'

import QuotesContent from './QuotesContent'
import Button from '@mui/material/Button'
import FullScreenDialog from './FullScreenDialog'

import { SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))


const H4 = styled('h4')(({ theme }) => ({
    fontSize: '1rem',
    fontWeight: '500',
    marginBottom: '16px',
    textTransform: 'capitalize',
    color: theme.palette.text.primary,
}))


const Quotes = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <H4>Quotes</H4>
                <FullScreenDialog />
            </div>

            <SimpleCard>
                <QuotesContent />
            </SimpleCard>

            <Box py="12px" />

        </Container>
    )
}

export default Quotes
