import Carousel from 'react-bootstrap/Carousel';
import home1 from '../../../assets/carouselImage/carasoul1.jpg';
import home2 from '../../../assets/carouselImage/carasoul2.jpg';
import home3 from '../../../assets/carouselImage/carasoul3.jpg';
import home4 from '../../../assets/carouselImage/carasoul4.jpg';
const Home = () => {
    return (
        <Carousel>
            <Carousel.Item className='Carousel'>
                <img
                    className="d-block w-100"
                    src={home1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Start Your Own career</h3>
                    <p>Join us and start your own career in programming.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='Carousel'>
                <img
                    className="d-block w-100"
                    src={home2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Programming First</h3>
                    <p>Our courses are programming first </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='Carousel'>
                <img
                    className="d-block w-100"
                    src={home3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Programme everyday</h3>
                    <p>
                        Create the practice of programming everyday.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='Carousel'>
                <img
                    className="d-block w-100"
                    src={home4}
                    alt="Fourth Slide"
                />

                <Carousel.Caption>
                    <h3>Code Like Pro</h3>
                    <p>
                        Learn to write programme like a professional
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Home;