import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, FormControlLabel, FormControl, FormLabel} from '@material-ui/core'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Signup = () => {
    const paperStyle = { padding: 20, height:'70vh', width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#FD752C ' }
    const marginTop = { marginTop: 10 }
    const btnstyle={margin:'8px 0',marginTop: 10 }
    const selectWidth = { height:40, marginTop: 4 }

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AccountBoxIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder="Enter your name" />
                    <TextField fullWidth label='Email' placeholder="Enter your email" />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset" >
                        <FormLabel component="legend">College</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="aec" control={<Radio />} label="AEC" />
                            <FormControlLabel value="acet" control={<Radio />} label="ACET" />
                            <FormControlLabel value="acoe" control={<Radio />} label="ACOE" />
                        </RadioGroup>
                    </FormControl>

                    <FormControl fullWidth >
                    <FormLabel component="legend">Department</FormLabel>
                        <Select style={selectWidth} >
                        <MenuItem value="dept">DEPT</MenuItem>
                        <MenuItem value="cse">CSE</MenuItem>
                        <MenuItem value="it">IT</MenuItem>
                        <MenuItem value="ece">ECE</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
                    <TextField fullWidth label='OTP' placeholder="Enter OTP"/>
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;