import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";


import driverImg from "../../assets/all-images/toyota-offer-2.png";

const BecomeDriverSection = () => {
  // const navigate = useNavigate();
  // const navigateToBecomeDriver = () => {
  //   //  navigate to /Customer
  //   navigate('/Driver');
  // };
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={driverImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Do You Want to Earn With Us? So Don't Be Late
            </h2>
            {/* <Link to= "/BecomeDriverForm">
              Become
            </Link> */}

            <button  className="btn become__driver-btn mt-4">    
              <span>Become a Driver</span>
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
