import React from 'react'
import { Col, Container, Form, Row, Card, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router'
import { useSearchParams } from 'react-router-dom';
import classes from '../scss/PaymentPage.module.scss';


const PaymentPage = () => {

    const navigate = useNavigate();
    // const params = useParams();
    const [searchParams,setSearchParams] = useSearchParams();
    console.log(searchParams.get('amount'));

  return (
    <Container className ='mt-5 py-5 mx-auto'>
        <div className="mb-4">
            <h2>Confirm order and pay</h2>
        </div>
        <Row>
            <Col md={8}>
                <Card className='p-3'>
                    <h6 className="text-uppercase">Payment details</h6>

                    <div className={['mt-3',classes.inputbox].join(' ')}>
                        <Form.Control type='text' name='name'
                        required 
                        //  placeholder='Name On Card'
                        className={classes.form_control}/>
                        <span>Name on card</span>
                    </div>
    
                    <Row>

                        <Col md={6}>
                            <div className={['mt-3 mr-2',classes.inputbox].join(' ')}>
                                <Form.Control type='text' name='name' required 
                                // placeholder='Card Number' 
                                className={classes.form_control}/>
                                <span>Card Number</span>
                                <i className="fa fa-credit-card"></i> 
                            </div>
                        </Col>

                        <Col md={6}>
                            <div className='d-flex flex-row'>

                                <div className={['mt-3 mr-2',classes.inputbox].join(' ')}>
                                    <Form.Control type='text' name='name' 
                                    // placeholder='Expiry' 
                                    required className={classes.form_control}/>
                                    <span>Expiry</span>
                                </div>
                                <div className={['mt-3 mr-2',classes.inputbox].join(' ')}>
                                    <Form.Control type='text' name='name' 
                                    // placeholder='CVV' 
                                    required className={classes.form_control}/>
                                    <span>CVV</span>
                                </div>
                            </div>
                        </Col>
                    </Row>


                    <div className="mt-4 mb-4">
                        <h6 className="text-uppercase">Billing Address</h6>
                        <Row className='mt-3'>
                            <Col md={6}>
                                <div className={['mt-3 mr-2',classes.inputbox].join(' ')}>
                                    <Form.Control required type='text' name='name' 
                                    // placeholder='Street Address' 
                                    className={classes.form_control}/>
                                    <span>Street Address</span>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className={['mt-3 mr-2',classes.inputbox].join(' ')}>
                                    <Form.Control type='text' name='name' 
                                    // placeholder='City' 
                                    required className={classes.form_control}/>
                                    <span>City</span>
                                </div>
                            </Col>
                        </Row>

                        <Row className='mt-2'>

                            <Col md={6}>
                                <div className={['mt-3 mr-2',classes.inputbox].join(' ')}>
                                    <Form.Control type="text" name="name" required 
                                    // placeholder='State/Province' 
                                    className={classes.form_control}/> 
                                    <span>State/Province</span>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className={['mt-3 mr-2',classes.inputbox].join(' ')}>
                                    <Form.Control type="text" name="name" 
                                    // placeholder='Zip Code' 
                                    className={classes.form_control}
                                     required="required"/> 
                                    <span>Pin Code</span>
                                </div>
                            </Col>                         
                        </Row>
                    </div>
                </Card>


                <div className="mt-4 mb-4 d-flex justify-content-between">
                    <Button variant='secondary' onClick={()=>navigate('/cart')}>Back to Cart</Button>
                    <Button variant='success' className='border-0 border-bottom px-3'>Pay Now</Button>
                </div>

            </Col>

            <Col md={4}>
                <Card bg='primary' className="p-3 text-white mb-3">
                    <span>You have to pay</span>
                    <Row className="align-items-end mb-3">
                        <h1 className="mb-0 yellow">${searchParams.get('amount')}</h1>
                    </Row>
                    <span>Enjoy Shopping with us, explore more deals and shop more.</span>
                    <a href="#" className="yellow decoration">Know all the features</a>

                    <div className="hightlight">
                        <span>100% Guaranteed support and excellent service.</span>
                    </div>
                </Card>
            </Col>

        </Row>


    </Container>
  )
}

export default PaymentPage