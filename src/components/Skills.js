import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1025 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return(
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skills-bx">
                            <h2>
                                Habilidades
                            </h2>
                            <p>
                                Me encanta el desarrollo de paginas web, soy un entusiasta en este ambito, me considero una persona responsable, autodidacta, que le gusta aprender todos los dias
                                Tengo conocimiento en los lenguajes de programacion como JavaScript y Python, utilizo herramientas como HTML, CSS, Bootstrap, React, Django y php, he trabajado en diferentes campus virtuales y paginas en la que he utilizado diferentes bases de datos como lo son mysql y postgresql
                            </p>
                            <Carousel responsive={responsive} infinite={true} className='skills-slider'>
                                <div className="item">
                                    <img src={meter1} alt="skills-1"/>
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="skills-2"/>
                                    <h5>Brand Idendify</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="skills-3"/>
                                    <h5>Logo Design</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="skills-4"/>
                                    <h5>Web Development</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="background"/>
        </section>
    );
};