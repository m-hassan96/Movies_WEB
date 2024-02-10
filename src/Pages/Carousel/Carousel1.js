import Carousel from 'react-bootstrap/Carousel';
import "../Home/MyCSS.css"

function Carousel1(props) {
    return (
        <Carousel data-bs-theme="dark " className=' Carousel.card'>

            <Carousel.Item>
                < img src={props.image} alt="..." />
            </Carousel.Item>

        </Carousel>
    );
}

export default Carousel1;