import { Carousel } from "react-bootstrap";
import img from '../img_lights.jpg/'


const ImageCarousel = ()=>{
    return(
        <Carousel  indicators={false}>
            <Carousel.Item>
                <img className="d-block w-100"
                style={{'height':'85vh'}}
                src={img}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100"
                style={{'height':'85vh'}}
                src={img}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100"
                style={{'height':'85vh'}}
                src={img}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>

    )
}


export default ImageCarousel;