import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import Product from "../components/Product";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import TruncateText from "../components/TruncateText";
import { useNavigate } from "react-router";



const CartPage = ()=>{

    const navigate = useNavigate();
    const cartList = useSelector(state=>state.getCart);
    let [totalAmount,setTotalAmount]= useState(0);

    const getProducts = ()=>{
        const productLists = cartList?.map((product,id)=>(<div key={id} className= 'border-bottom pb-2'>
                <Product product={product.product} item_count={product.item_count}/>
            </div>
        ))

        return productLists
    }

    const getItemRows = ()=>{
        const itemRows = cartList?.map((product,id)=>{
            return(<Row Key={id} className='mx-0 my-2'>
                    <Col className='col-6'>
                        <h6 className="d-inline">{id+1}.</h6>&nbsp;
                        <TruncateText 
                        HTMLTag = 'p'
                        containerClassName='d-inline'
                        text={product.product?.title}
                        line={2}/>
                    </Col>
                    <Col>{product.product?.price} &nbsp;<span className='text-secondary'>x{product.item_count}</span></Col>
                    <Col>{product.product?.price*product.item_count}</Col>
                </Row>
            )
        })

        return itemRows;
    }

    const makePaymentHandler = ()=>{
        navigate(`/payment?amount=${totalAmount}`)
    }
 
    useEffect(()=>{
        let total = cartList.reduce((total_all, productObj)=>{
           return total_all+=(productObj.product.price*productObj.item_count)
        },0)
        setTotalAmount(total.toFixed(2))
    },[cartList])
    

    return(
        
        cartList.length!==0?(
                <Container fluid className='mt-5 mx-auto d-flex flex-wrap mb-sm-5' >
                    <Container fluid className="mt-5 col-lg-8 col-12 bg-white">
                        {
                            getProducts()
                        }
                    </Container>
                    <Row className='mt-5 col-lg-4 col-12 mx-0 bg-white pt-lg-5 pt-3  border border-1 '>
                        <Col>
                            <h3 className='border-bottom'>Items : </h3>
                            <Row className='mx-0 border-bottom'>
                                <Col  className='fw-bold col-6'>Item</Col>
                                <Col  className='fw-bold'>Price</Col>
                                <Col  className='fw-bold'>Total</Col>
                            </Row>
                            {
                                getItemRows()
                            }
                            <Row className='mx-0 border-top p-lg-2 p-sm-3'>
                                <Col md={12} className="d-flex justify-content-around pe-sm-2">
                                    <h5 className="d-inline-block">Total Amount :</h5>
                                    <h5 className="d-inline-block"> <span>$ {totalAmount}</span> </h5>
                                </Col>
                                <Col md={12} className='mt-3'>
                                    <Button className='mx-auto w-100' onClick={makePaymentHandler} variant='outline-success'>Make Payment</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
            </Container>
            ):
            (
                <Container className='p-2 mt-5 d-flex flex-column justify-content-center'  style={{'height' :'100vh'}}>
                    <FontAwesomeIcon  className='mx-auto mb-2 fa-10x' icon={faShoppingBasket}></FontAwesomeIcon>
                    <h1 className='mx-auto'>Your Cart Is Empty</h1>
                </Container>
            )
        
    )
}


export default CartPage;