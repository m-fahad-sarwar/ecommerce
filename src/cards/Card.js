import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItem } from '../store/actions/ItemAction';
import { Grid, Box  } from '@mui/material';
import { useEffect, useState } from 'react';
import { addItem } from '../store/actions/CartAction';
export default function MediaCard() {
  const Dispatch = useDispatch()
  const [laoder, setLaoder] = useState(false)
  const addToCart = (item)=>{
const itemAdd = {
name : item.name,
imgSrc: item.imgSrc
}
Dispatch(addItem(itemAdd , setLaoder))

  }

  useEffect(() => { Dispatch(fetchItem(setLaoder)) }, [])
  const item = useSelector((store) => store.ItemReducer.data)
  console.log(item, 'cards')
  return (<>
    <Grid container spacing={2}>
      {
        item.map((item) => {
          return (

            <Grid item sx={12} md={3} style={{padding: '50px'}}>
              <Box>

                <Card sx={{ maxWidth: 345 }} >

                  <CardMedia
                    component="img"
                    height="140"
                    image={item.imgSrc}
                    alt={item.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.discription}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={()=>addToCart(item)}>Add to cart</Button>
                  </CardActions>
                </Card>
              </Box>
            </Grid>

          )
        })
      }

    </Grid>
  </>)
}