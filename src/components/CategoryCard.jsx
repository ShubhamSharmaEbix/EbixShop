import { Card, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios';
import classes from '../scss/CategoryCard.module.scss';

const CategoryCard = ({link,title})=>{

    const [image,setImage] = useState(null);

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${title}`)
        .then(res=>{
            setImage(res.data[Math.ceil(Math.random()*res.data.length)]?.image)
        })
    },[])

 

    return(
        <Col xs={12} sm={8} className={[classes.card_container,'px-0'].join(' ')}>
            <LinkContainer to={link}>
                <Card className={classes.card}>
                    <Card.Img className='mx-auto mt-3' style={{'height':'70%', 'width' : '90%'}} variant="top" src={image} />
                    <Card.Body>
                        <Card.Title className={classes.title}>{image?title:'Loading...'}</Card.Title>
                    </Card.Body>
                </Card>
            </LinkContainer>
        </Col>
    )
}

export default CategoryCard;