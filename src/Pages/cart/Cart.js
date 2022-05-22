import NavBar from '../../navBar/NavBar'
import CartList from '../../cartList/CartList'
import { Typography } from '@mui/material'

export default function Cart() {
  return (
    <>
        <NavBar />
      <Typography variant='h3' style={{margin: '50px'}}>Cart Items</Typography>
        <CartList/>

    </>
  )
}
