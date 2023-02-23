import Carousel from 'react-bootstrap/Carousel';
import BluebCookie from '../../images/bluebcookie.png'
import ChocChip from '../../images/chocchiplg.png'
import RaspCake from '../../images/raspcakeslg.png'

function Slideshow(props) {

    return (
        <div className="Slideshow container mb-3">
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={BluebCookie}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome to Capstone Cookies!</h3>
                        <p>Blueberry Cookies</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={RaspCake}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome to Capstone Cookies!</h3>
                        <p>Raspberry Cupcakes</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ChocChip}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome to Capstone Cookies!</h3>
                        <p>Chocolate Chip Cookies</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slideshow;
