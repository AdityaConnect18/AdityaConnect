import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const Login=({handleChange})=>{

    const paperStyle={padding :20,height:'70vh',width:300, margin:"0 auto"}
    const avatarStyle={backgroundColor:'#FD752C '}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper  style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><AccountCircleIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='E-Mail' placeholder='Enter Email' fullWidth required/>
                <TextField label='OTP' placeholder='Enter OTP' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" onClick={()=>handleChange("event",1)} >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login