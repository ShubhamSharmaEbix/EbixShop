import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import classes from '../scss/Product.module.scss';
import { useDispatch } from 'react-redux';
import { action_creators } from '../redux/actions_creators/action_creators';
import { useLocation } from 'react-router';
import { useRef } from 'react';
import TruncateText from './TruncateText';



const Product = ({ product, item_count })=>{

    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const inputRef = useRef();

    const addToCartHandler = ()=>{
        dispatch(action_creators.storeProductToCart(product,null))
    }

    const totalItemHandler = (args)=>{
        if(args==='add'){
            dispatch(action_creators.storeProductToCart(product,'add_item'))
            .then(res=>{
                inputRef.current.value=parseInt(inputRef.current.value) + 1;
            })
        }
        else if(args==='remove' && inputRef.current.value>0){
            dispatch(action_creators.storeProductToCart(product,'remove_item'))
            .then((res)=>{
                if(inputRef.current.value>=1){
                    inputRef.current.value=parseInt(inputRef.current.value) - 1;
                }
            })
        }
    }

    return(
        <Row className='mt-5 align-items-center overflow-lg-hidden mx-0'>
            <Col lg={5} md={4} className='p-lg-5 p-md-5 overflow-hidden'>
                <img style={{'height' : '100%', 'width' : '100%', 'maxHeight' : '70vh', 'margin':'0 auto'}} src={product?.image}/> 
            </Col>

            <Col lg={7} md={8} > 
                <Row>
                    <h2 className='fw-md-normal px-sm-3 px-md-2 text-justify'>{product.title}</h2>
                   {
                    pathname!=='/cart'?<p className='mt-2 px-sm-3 px-md-2 text-justify'>{product.description}</p>:
                        <TruncateText HTMLTag='p' text={product.description} 
                        containerClassName='mt-2 px-sm-3 px-md-2 text-lg-justify' line={4}/>
                    }
                </Row>  

                <Row>
                    <h3 className='fw-semibold text-secondary text-justify px-md-2 px-sm-3'>{product&&`Price : $${product.price}`}</h3>
                </Row>  
                <Row className='mt-2 align-items-center justify-content-center'>

                    {pathname!=='/cart'?(
                        <Col md='4' lg='6' className='d-flex justify-content-center'>
                            <button onClick={addToCartHandler} className={['py-2 px-3',classes.addToCart].join(' ')}>
                                Add to&nbsp;
                                <FontAwesomeIcon size='lg' icon={faShoppingCart} />
                            </button>
                        </Col>):(
                            <Col className='mt-3 d-flex justify-content-end'>
                                <h5 className='d-inline'>Items :&nbsp;&nbsp;</h5>
                                <button className={['border border-4 rounded', classes.button].join(' ')} onClick={()=>totalItemHandler('remove')}>-</button>
                                <input className={classes.total_item} readOnly disabled ref={inputRef} defaultValue={item_count}/>
                                <button className={['border border-4 rounded', classes.button].join(' ')} onClick={()=>totalItemHandler('add')}>+</button>
                            </Col>
                            
                        )}
                </Row>
            </Col>
        </Row>
    )
}

export default Product;