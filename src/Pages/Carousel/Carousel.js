import Carousel from 'react-bootstrap/Carousel';
import pg1 from "../../Images/pg-1.jpg"
import pg2 from "../../Images/pg-2.jpg"
import pg3 from "../../Images/pg-3.webp"
import pg5 from "../../Images/pg-5.jpg"
import pg6 from "../../Images/pg-6.jpg"


function MyCarousel() {

    return (


        <Carousel data-bs-theme="dark" className='m-4 shadow' >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pg1}
                    alt="First slide"
                />
                <Carousel.Caption className="text-light">
                    <h5>Loarem, elit libero. </h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pg2}
                    alt="Second slide"
                />
                <Carousel.Caption className="text-light">
                    <h5>Loarem, elit libero. </h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pg3}
                    alt="Third slide"
                />
                <Carousel.Caption className="text-light">
                    <h5>Loarem, elit libero. </h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pg5}
                    alt="Third slide"
                />
                <Carousel.Caption className="text-light">
                    <h5>Loarem, elit libero. </h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pg6}
                    alt="Third slide"
                />
                <Carousel.Caption className="text-light">
                    <h5>Loarem, elit libero. </h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
}

export default MyCarousel;