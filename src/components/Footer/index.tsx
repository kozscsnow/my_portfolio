import { Container, Row, Col } from 'react-bootstrap';
import logo from '~/assets/img/logo.svg';
import navIcon1 from '~/assets/img/nav-icon1.svg';
import navIcon2 from '~/assets/img/nav-icon2.svg';
import navIcon3 from '~/assets/img/nav-icon3.svg';
import githubIcon from '~/assets/img/github.svg';
import { MailchimpForm } from '../MailchimpForm';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/kozscsnow" target="_blank">
                <img src={githubIcon} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/khanhnn/" target="_blank">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://www.facebook.com/nnkhanh0209/" target="_blank">
                <img src={navIcon2} alt="" />
              </a>
              <a
                href="https://www.instagram.com/nguyennhat.khanh/"
                target="_blank"
              >
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
