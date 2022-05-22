import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { deleteCart, fetchcart } from '../store/actions/CartAction';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function CartList() {
    
  const Dispatch = useDispatch()
  const [loading, setLoading] = useState()
  useEffect(() => {Dispatch(fetchcart(setLoading))}, [])
  

    const cartItems = useSelector((store) => store.CartReducer.data)
    const deleteCartItem = (item)=>{
Dispatch(deleteCart(setLoading, item.uid))
    }
    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={3} style={{margin: '50px'}}>

           {cartItems.map((item)=>{
               return(
                   <>
                   <Item style={{width: '50%', height: '50px'}}><Box>{item.name}
                   <Button variant="outlined" style={{marginLeft: '50px'}}>Check Out</Button>
                   <Button variant="outlined" style={{marginLeft: '50px'}} onClick={()=>deleteCartItem(item)}>Remove from cart</Button>
                   </Box></Item>
                    
                   </>
               )
            })}
            </Stack>
        </Box>
    );
}
