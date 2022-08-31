import { Container, Row } from 'react-bootstrap'
import CategoryCard from '../components/CategoryCard';
import CategoryRow from '../components/CategoryRow';
import ImageCarousel from '../components/ImageCarousel';
import classes from '../scss/HomePage.module.scss';
import { useDispatch, useSelector  } from 'react-redux';
import { action_creators } from '../redux/actions_creators/action_creators';
import { useEffect } from 'react';


const HomePage = ()=>{

    const categories = useSelector(state=>state.getCategories.data);
    const allProducts = useSelector(state=>state.getAllProducts.data);
    const dispatch = useDispatch();
    
    const getCategory = ()=>{
        const category = categories&&categories.map((category,id)=>{
            const link = category.includes('women')?'women':(category.includes('men')?'men':category);
            return <CategoryCard key={id} link={link} title={category}/>
        })
        return category;
    }

    useEffect(()=>{
        dispatch(action_creators.getAllProducts())
    },[])


    return(
        <Container fluid className='mt-5 py-3 px-0'>
            <ImageCarousel/>
            <Row id={classes['categories']} className='justify-content-around gap-5 gap-lg-2 mx-0'>
                {
                    getCategory()
                }
            </Row>
            <CategoryRow data={allProducts} category="Shop Now"/>
        </Container>
    )
}

export default HomePage;