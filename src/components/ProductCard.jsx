import {  Col, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import classes from '../scss/ProductCard.module.scss'
import TruncateText from "./TruncateText";


const ProductCard = ({ product })=>{
    

    return(
        <LinkContainer to ={`/product/${product.id}`}>
            <Col sm='12' md='6' lg='4' className='mb-4'>
                <Card className={classes.productCard}>
                    <Card.Img className='p-2' variant="top" src={product.image}/>
                    <Card.Body>
                        <Card.Title className='text-justify'>{product.title}</Card.Title>
                            <TruncateText containerClassName='card-text text-justify'  line={4} HTMLTag='p' text={product.description} />
                    </Card.Body>
                    <Card.Footer className='bg-dark text-center '>
                        <big className="text-white">${product.price}</big>
                    </Card.Footer>
                </Card>
            </Col> 
        </LinkContainer>
        
    )
}

export default ProductCard;