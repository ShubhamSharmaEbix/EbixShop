import { Container, Stack, Button, Carousel } from 'react-bootstrap';
import classes from '../scss/CategoryRow.module.scss';
import { LinkContainer } from 'react-router-bootstrap';
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const CategoryRow = ({category, data})=>{

    const rowRef = useRef(null);

    const getListItems = ()=>{
        return data&&data.map((item,id)=>(
            <LinkContainer key={id} to={`/product/${item.id}`} className={classes.product}>
                <Container className='text-center' >
                    <img src={item.image} className={classes.categoryRow_image}/>
                    <h6 className='mt-1 text-secondary'><strike>${item.price}</strike></h6>
                    <h6 className='mt-1 bg-dark text-light p-1'>Deal of the day : ${Math.ceil(item.price>20?item.price-20:item.price-5)}</h6>
                </Container>
            </LinkContainer>
        ))
    }


    const scrollRow = (args, scrollOffset)=>{
        if(args==='next'){
            rowRef.current.scrollLeft += scrollOffset
        }
        else{
            rowRef.current.scrollLeft += scrollOffset
        }
    }

    const showButton = ()=>{
        document.getElementById(classes['next']).style.opacity = 1;
        document.getElementById(classes['prev']).style.opacity = 1;
    }

    const hideButton = ()=>{
        document.getElementById(classes['next']).style.opacity = 0;
        document.getElementById(classes['prev']).style.opacity = 0;
    }

    return(
        <Container fluid className='mt-5 ps-4 pe-1 bg-light'>

            <h2 className='my-3'>{category}</h2>
            <Stack onMouseOver={showButton} onMouseLeave={hideButton} direction='horizontal' className={classes.categoryRow}>
            
                <Button variant='light' id={classes['next']} onClick={()=>scrollRow('next',500)}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </Button>
            
                <Button variant='light' id={classes['prev']} onClick={()=>scrollRow('prev',-500)}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Button>
            
                <Container ref={rowRef} fluid className={['d-flex overflow-auto p-2 gap-2', classes.no_scrollbar].join(' ')}>
                    {
                        getListItems()
                    }
                </Container>

            </Stack>

        </Container>    
    )
}

export default CategoryRow;