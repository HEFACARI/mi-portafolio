import {Container, Row, Col} from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={logo} alt="logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/hector-caez-a71057183/"> <img src={navIcon1} alt="nav-icon-1"/> </a>
                            <a href="https://www.facebook.com/hectorfabio.caezrivas/"> <img src={navIcon2} alt="nav-icon-2"/> </a>
                            <a href="https://www.instagram.com/hefa_cari/"> <img src={navIcon3} alt="nav-icon-3" /> </a>
                        </div>
                        <p>Copyright 2024. All Right Reserved. HEFACARI</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};