import {
    Button,
    Icon,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,
} from '@mui/material'
import { Span, Small, H6 } from 'app/components/Typography'
import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { DatePicker } from '@mui/lab'
import { Box, styled } from '@mui/system'


const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const SimpleForm = () => {
    const [state, setState] = useState({
        date: new Date(),
    })

    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            console.log(value)

            if (value !== state.password) {
                return false
            }
            return true
        })
        return () => ValidatorForm.removeValidationRule('isPasswordMatch')
    }, [state.password])

    const handleSubmit = (event) => {
        // console.log("submitted");
        // console.log(event);
    }

    const handleChange = (event) => {
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    const handleDateChange = (date) => {
        setState({ ...state, date })
    }

    const H4 = styled('h4')(({ theme }) => ({
        fontSize: '1rem',
        fontWeight: '500',
        marginBottom: '16px',
        textTransform: 'capitalize',
        color: theme.palette.text.primary,
    }))

    const H5 = styled('h5')(({ theme }) => ({
        fontSize: '1rem',
        fontWeight: '400',
        marginBottom: '16px',
        textTransform: 'capitalize',
        color: theme.palette.text.primary,
    }))

    const ContentBox = styled('div')(({ theme }) => ({
        margin: '30px',
        [theme.breakpoints.down('sm')]: {
            margin: '16px',
        },
    }))


    const {
        pickupLocation,
        dropoffLocation,
        pickupDate,
        pickupTime,

        passengerFirstName,
        passengerLastName,
        passengerEmail,
        passengerPhone,

        vehicleType,

        flightNumber,
        flightArrivalTime,

        comments,
    } = state

    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>


                        {/* JOURNEY DETAILS */}
                        <H4>Journey Details</H4>

                        {/* Pickup Location */}
                        <TextField
                            type="text"
                            name="pickupLocation"
                            id="standard-basic"
                            onChange={handleChange}
                            value={pickupLocation || ''}
                            validators={[
                                'required',
                                'minStringLength: 4',
                                'maxStringLength: 9',
                            ]}
                            label="Pickup Location"
                            errorMessages={['this field is required']}
                        />

                        {/* Dropoff Location */}
                        <TextField
                            type="text"
                            name="pickupLocation"
                            id="standard-basic"
                            onChange={handleChange}
                            value={dropoffLocation || ''}
                            validators={[
                                'required',
                                'minStringLength: 4',
                                'maxStringLength: 9',
                            ]}
                            label="Dropoff Location"
                            errorMessages={['this field is required']}
                        />

                        {/* Pickup Date */}
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                value={pickupDate}
                                onChange={handleDateChange}
                                renderInput={(props) => (
                                    <TextField
                                        {...props}
                                        // variant="Outlined"
                                        id="mui-pickers-date"
                                        label="Date"
                                        sx={{ mb: 2, width: '100%' }}
                                    />
                                )}
                            />
                        </LocalizationProvider>

                        {/* Pickup Time */}
                        <TextField
                            type="text"
                            name="pickupTime"
                            id="standard-basic"
                            onChange={handleChange}
                            value={pickupTime || ''}
                            validators={[
                                'required',
                                'minStringLength: 4',
                                'maxStringLength: 9',
                            ]}
                            label="Time"
                            errorMessages={['this field is required']}
                        />



                        {/* PASSENGER DETAILS */}
                        <H4>Passenger Details</H4>

                        {/* Passenger First Name */}
                        <TextField
                            type="text"
                            name="passengerFirstName"
                            id="standard-basic"
                            onChange={handleChange}
                            value={passengerFirstName || ''}
                            validators={[
                                'required',
                                'minStringLength: 4',
                                'maxStringLength: 9',
                            ]}
                            label="Passenger First Name"
                            errorMessages={['this field is required']}
                        />

                        {/* Passenger Last Name */}
                        <TextField
                            type="text"
                            name="passengerLastName"
                            id="standard-basic"
                            onChange={handleChange}
                            value={passengerLastName || ''}
                            validators={[
                                'required',
                                'minStringLength: 4',
                                'maxStringLength: 9',
                            ]}
                            label="Passenger First Name"
                            errorMessages={['this field is required']}
                        />

                        {/* Passenger Email */}
                        <TextField
                            label="Email"
                            onChange={handleChange}
                            type="email"
                            name="passengerEmail"
                            value={passengerEmail || ''}
                            validators={['required', 'isEmail']}
                            errorMessages={[
                                'this field is required',
                                'email is not valid',
                            ]}
                        />

                        {/* Passenger Phone Number */}
                        <TextField
                            label="Passenger Phone Number"
                            onChange={handleChange}
                            type="text"
                            name="passengerPhone"
                            value={passengerPhone || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />











                        {/* <TextField
                            type="text"
                            name="username"
                            id="standard-basic"
                            onChange={handleChange}
                            value={username || ''}
                            validators={[
                                'required',
                                'minStringLength: 4',
                                'maxStringLength: 9',
                            ]}
                            label="Username (Min length 4, Max length 9)"
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            label="First Name"
                            onChange={handleChange}
                            type="text"
                            name="firstName"
                            value={firstName || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            label="Email"
                            onChange={handleChange}
                            type="email"
                            name="email"
                            value={email || ''}
                            validators={['required', 'isEmail']}
                            errorMessages={[
                                'this field is required',
                                'email is not valid',
                            ]}
                        />

                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                value={date}
                                onChange={handleDateChange}
                                renderInput={(props) => (
                                    <TextField
                                        {...props}
                                        // variant="Outlined"
                                        id="mui-pickers-date"
                                        label="Date picker"
                                        sx={{ mb: 2, width: '100%' }}
                                    />
                                )}
                            />
                        </LocalizationProvider>

                        <TextField
                            sx={{ mb: 4 }}
                            label="Credit Card"
                            onChange={handleChange}
                            type="number"
                            name="creditCard"
                            value={creditCard || ''}
                            validators={[
                                'required',
                                'minStringLength:16',
                                'maxStringLength: 16',
                            ]}
                            errorMessages={['this field is required']}
                        /> */}

                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                        {/* VEHICLE DETAILS */}
                        <H4>Vehicle Details</H4>

                        {/* Vehicle Type */}
                        <TextField
                            label="Select Vehicle"
                            onChange={handleChange}
                            type="text"
                            name="vehicleType"
                            value={vehicleType || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />

                        {/* FLIGHT DETAILS */}
                        <H4>Flight Details</H4>

                        {/* Flight Number */}
                        <TextField
                            label="Flight Number"
                            onChange={handleChange}
                            type="text"
                            name="flightNumber"
                            value={flightNumber || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />

                        {/* Flight Arrival Time */}
                        <TextField
                            label="Flight Arrival Time"
                            onChange={handleChange}
                            type="text"
                            name="flightArrivalTime"
                            value={flightArrivalTime || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />

                        {/* Pickup Time */}
                        <TextField
                            type="text"
                            name="pickupTime"
                            id="standard-basic"
                            onChange={handleChange}
                            value={pickupTime || ''}
                            validators={[
                                'required',
                                'minStringLength: 4',
                                'maxStringLength: 9',
                            ]}
                            label="Pickup Time"
                            errorMessages={['this field is required']}
                        />



                        {/* FLIGHT DETAILS */}
                        <H4>Email Quote</H4>

                        <H5>Summary</H5>

                        <Grid container spacing={3} sx={{ mb: '24px' }}>
                            {/* DATE AND TIME */}
                            <Grid item xs={1} md={4}>
                                <ContentBox>
                                    <Box ml="1px">
                                        <Small>Name: Johnmack</Small>
                                    </Box>
                                    <Box ml="1px">
                                        <Small>Email: johnmack33@gmail.com</Small>
                                    </Box>
                                    <Box ml="1px">
                                        <Small>Phone Number: 0011 22 33333</Small>
                                    </Box>
                                    <Box ml="1px">
                                        <Small>Address: NY 11, Wales Road, North Wales</Small>
                                    </Box>
                                    <Box ml="1px">
                                        <Small>Pincode: CDX 112233</Small>
                                    </Box>
                                    <Box ml="1px">
                                        <Small>Flight Number: CD 12 XXXXXXXXX</Small>
                                    </Box>
                                    <Box ml="1px">
                                        <Small>Terminal: CD 12</Small>
                                    </Box>
                                </ContentBox>
                            </Grid>

                            <Grid item xs={1} md={4}>
                                <ContentBox>
                                    <Box ml="1px">
                                        <Small>From: London Airport</Small>
                                    </Box>
                                    <Box ml="1px">
                                        <Small>To: London Biggin Hill Airport</Small>
                                    </Box>
                                    <Box ml="1px">
                                        <Small>Date: 29-10-2021</Small>
                                    </Box>
                                    <Box ml="1px">
                                        <Small>Time: 13:30</Small>
                                    </Box>
                                    <Box ml="1px">
                                        <Small>Distance: 23.55 Miles</Small>
                                    </Box>
                                    <Box ml="1px">
                                        <Small>Duration: 01:53</Small>
                                    </Box>
                                    <Box ml="1px">
                                        <Small>Car: Mercedes Benz S Class</Small>
                                    </Box>
                                    <Box ml="1px">
                                        <H4>Total Price: £51</H4>
                                    </Box>
                                </ContentBox>
                            </Grid>

                            <Grid item xs={1} md={4}>
                                <ContentBox>
                                    <Box ml="1px">
                                        <TextField
                                            type="text"
                                            name="comments"
                                            id="standard-basic"
                                            onChange={handleChange}
                                            value={comments || ''}
                                            label="comments"
                                            errorMessages={['this field is required']}
                                        />

                                    </Box>
                                </ContentBox>

                                <ContentBox>
                                    <Button color="secondary" variant="contained" type="submit">
                                        <Icon>send</Icon>
                                        <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                                            Send Quote
                                        </Span>
                                    </Button>
                                </ContentBox>
                                
                            </Grid>
                        </Grid>



                    </Grid>
                </Grid>


            </ValidatorForm>
        </div>
    )
}

export default SimpleForm
