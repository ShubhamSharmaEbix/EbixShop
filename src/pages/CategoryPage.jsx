import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from 'react-bootstrap'
import { useEffect, useState, useTransition } from "react";
import { useDispatch } from "react-redux";
import { action_creators } from "../redux/actions_creators/action_creators";



const CategoryPage = ({category})=>{

    const [products,setProducts] = useState();
    const [isPending, setTransitioin] = useTransition();
    const dispatch = useDispatch();


    const getCategoryProducts = ()=>{
        const categoryProducts = products&&products.map((product,id)=>(
            <ProductCard key={id} product={product}/>
        ))

        return categoryProducts;
    }

    useEffect(()=>{
        switch(category){
            case 'men' : dispatch(action_creators.getMenCategory())
                        .then(res=>setTransitioin(()=>setProducts(res)));
                        break;

            case 'women' : dispatch(action_creators.getWomenCategory())
                           .then(res=>setTransitioin(()=>setProducts(res)));
                           break; 

            case 'jewelery' : dispatch(action_creators.getJewelleryCategory())
                            .then(res=>setTransitioin(()=>setProducts(res)));
                            break; 

            case 'electronics' : dispatch(action_creators.getElectronicsCategory())
                                 .then(res=>setTransitioin(()=>setProducts(res)));
                                break; 

            default : break;
                        
        }
    },[category])

    return(
        <Container fluid className='mt-5 px-lg-5 py-lg-3 bg-white'>
            <Row className="mt-5 p-lg-3 justify-content-lg-between">
                <Col className='col-12 m-3 text-capitalize border-bottom'>
                    <h1>{category.includes('women')?"Women's":(category.includes('men')?"Men's":category)}</h1> 
                </Col>
                {
                    !isPending?getCategoryProducts():<h3>Loading...</h3>
                }
            </Row>
        </Container>
    )
}


export default CategoryPage;