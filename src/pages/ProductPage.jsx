import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap'
import { action_creators } from '../redux/actions_creators/action_creators';
import { useParams } from 'react-router';
import Product from '../components/Product';




const ProductPage = ()=>{

    const product = useSelector(state=>state.getProduct.data);
    const dispatch = useDispatch();
    const { id } = useParams();



    useEffect(()=>{
        dispatch(action_creators.getProduct(id))

        return ()=>[
            dispatch(action_creators.getProduct('clear'))
        ]
    },[])

    return(
        <Container fluid className='mt-5 py-3 px-0 bg-white'>
           {
            !product? <h3 className='text-center'>Loading...</h3>:
             <Product product={product}/>   
            }
        </Container>
    )
}

export default ProductPage;