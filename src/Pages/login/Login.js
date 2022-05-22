import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { doLogin } from '../../store/actions/AuthAction';
export default function Login() {
const [password, setPassword] = useState('')
const [email, setEmail] = useState('')
const [loading, setLoading] = useState(false)
const Dispatch = useDispatch()

const signInHandeler =()=>{
    const user={
        password: password,
        email : email,
    }
Dispatch(doLogin(user ,setLoading))
}

    return (
        <Box style={{ margin: '50px auto', padding: '50px', width: '50vh', height: '50vh', border: '1px solid darkGray' }} sx={{ '& > :not(style)': { m: 1 } }}>
            <Typography variant='h6'>Login :</Typography>
            <FormControl variant="standard">
                Email
                <Input
                    id="input-with-icon-adornment"
                    onChange={(e)=> setEmail(e.target.value)}
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                />
                Password
                <Input
                    type='password'
                    onChange={(e)=> setPassword(e.target.value)}
                    startAdornment={
                        <InputAdornment position="start">
                        </InputAdornment>
                    }
                />
            <Button variant='contained' style={{margin: '20px'}} onClick={signInHandeler}>Sign in</Button>
            <Button variant='outlined' style={{margin: '0 20px'}}>Sign up</Button>
            </FormControl>
        </Box>
    );
}
