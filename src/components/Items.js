import React from 'react';
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'

const Items = (props) => {
    return (
        <Card className='item'>
                <CardMedia
                    className='foodPic'
                    image={props.image}
                    title={props.name}
                />

                <div>
                    <CardContent className='show'>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            className="english"
                        >
                            {props.engName}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="h8"
                            component="div"
                            className="english"
                        >
                            {props.engDescription}
                        </Typography>
                    </CardContent>

                    <CardContent className='hide'>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            className="korean"
                        >
                            {props.korName}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="h4"
                            component="div"
                            className="korean"
                        >
                            {props.korDescription}
                        </Typography>
                    </CardContent>

                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            ${props.price}
                        </Typography>
                    </CardContent>
                </div>
        </Card>
    )
}

export default Items;