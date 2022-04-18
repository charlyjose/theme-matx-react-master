import React from 'react'
import { Grid, Icon, IconButton } from '@mui/material'
import { Box, styled } from '@mui/system'
import { Small } from 'app/components/Typography'
import FormDialog from './FormDialog'
import MaxHeightMenu from './MaxHeightMenu'

const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
}))


export default function QuotesContent() {
    return (
        <Grid container spacing={3} sx={{ mb: '24px' }}>
            {/* DATE AND TIME */}
            <Grid item xs={1} md={2}>
                <ContentBox>
                    <Box ml="1px">
                        <Small>12/12/12</Small>
                    </Box>
                    <Box ml="1px">
                        <Small>12:00</Small>
                    </Box>
                </ContentBox>
            </Grid>

            {/* VEHICLE NUMBER AND VEHICLE CLASS */}
            <Grid item xs={1} md={2}>
                <ContentBox>
                    <Box ml="1px">
                        <Small>XX1122XX</Small>
                    </Box>
                    <Box ml="1px">
                        <Small>First Class</Small>
                    </Box>
                    <Box ml="1px">
                        {/* <Small>Vehicle Image</Small> */}
                    </Box>
                </ContentBox>
            </Grid>

            {/* ROUTE, DISTANCE, TIME AND MAP */}
            <Grid item xs={1} md={3}>
                <ContentBox>
                    {/* ROUTE */}
                    <Box ml="1px">
                        <Small>Routes</Small>
                    </Box>
                    {/* DISTANCE AND TIME */}
                    <Box ml="1px">
                        {/* DISTANCE */}
                        <Small>50 Miles</Small> |
                        {/* TIME */}
                        <Small>1 Hour</Small>
                    </Box>
                    {/* MAP */}
                    <Box ml="1px">
                        <Small>Open in Map</Small>
                    </Box>
                </ContentBox>
            </Grid>

            {/* PASSENGER DETAILS, FLIGHT DETAILS, COMMENTS AND BOOKER DETAILS */}
            <Grid item xs={1} md={3}>
                <ContentBox>
                    {/* PASSENGER DETAILS */}
                    <Box ml="1px">
                        <Small>Routes</Small>
                    </Box>
                    {/* FLIGHT DETAILS */}
                    <Box ml="1px">
                        {/* Distance */}
                        <Small>50 Miles</Small> |
                        {/* Time */}
                        <Small>1 Hour</Small>
                    </Box>
                    {/* COMMENTS */}
                    <Box ml="1px">
                        <Small>Comments</Small>
                    </Box>
                    {/* BOOKER DETAILS */}
                    <Box ml="1px">
                        <Small>Booker Details</Small>
                    </Box>
                </ContentBox>
            </Grid>

            {/* EMAIL QUOTE AND ACTION POPUP */}
            <Grid item xs={1} md={2}>
                <ContentBox>
                    <Box ml="1px">
                        <FormDialog />
                        <MaxHeightMenu />
                    </Box>
                </ContentBox>
            </Grid>

        </Grid>


    )
}
