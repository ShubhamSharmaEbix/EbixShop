import { Container, Navbar, Nav, NavDropdown, Offcanvas, Badge} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { action_creators } from '../redux/actions_creators/action_creators';


const Navigationbar = ()=>{

 
    const categories = useSelector(state=>state.getCategories.data);
    const cartListItems = useSelector(state=>state.getCart?.length);
    const dispatch = useDispatch()

    const getCategories = ()=>{
        return categories&&categories?.map((category,id)=>{
            const link = category.includes('women')?'women':(category.includes('men')?'men':category);
            return(
                <LinkContainer key={id} to={link} className='text-capitalize'>
                    <NavDropdown.Item >{category}</NavDropdown.Item>
                </LinkContainer> 
            )
        })
    }

    useEffect(()=>{
        dispatch(action_creators.getCategories())
    },[]);

 

    return(
        <Navbar expand={'sm'} fixed='top' bg={'light'}>
            <Container fluid={'lg'}>
                <LinkContainer to='/'>
                    <Navbar.Brand>EBIXShop</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle />
                <Navbar.Offcanvas id={`offcanvasNavbar-expand-lg`} aria-labelledby={`offcanvasNavbarLabel-expand-lg`} placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                            Menu
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="justify-content-end ">
                        <Nav className="gap-sm-2 gap-5 me-1">
                            <NavDropdown className='fs-5' title="Categories" id="basic-nav-dropdown">
                                {
                                    getCategories()
                                }
                            </NavDropdown>
                            <LinkContainer to='/cart'>
                                <Nav.Link>
                                    <span className='me-lg-2 fs-sm-3 fs-5 me-2'>Cart</span>
                                    <FontAwesomeIcon size='lg' icon={faShoppingCart}/>
                                    <Badge bg='secondary' className='position-absolute left-100'>{cartListItems!==0&&cartListItems}</Badge>
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
      </Navbar>
    )
}


export default Navigationbar;

