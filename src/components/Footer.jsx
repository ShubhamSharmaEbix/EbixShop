import { Navbar,Container } from 'react-bootstrap';


const Footer = ()=>{
    return(
        <Navbar fixed='bottom' className='position-relative' expand="lg" variant="light" bg="light">
            <Container className='justify-content-center'>
                <Navbar.Brand className='text-center' >Fake Store API</Navbar.Brand>
            </Container>
        </Navbar>
    )
}


export default Footer;