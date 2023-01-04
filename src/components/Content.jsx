import { Col, Container, Row } from "react-bootstrap"
import Message from "./Message"

function Content() {
    return (
        <div className="content">
            <Container fluid>
                <Row>
                    <Col>
                        <iframe 
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyABdwZdExGfBfO7VMP1oQMVwBNBgTy55ro&q=Prospect+Park,Brooklyn+NY&zoom=14" 
                        frameborder="0"
                        allowFullScreen
                        height="500"
                        width="100%"
                        title="prospect park map"
                        ></iframe>
                    </Col>
                    <Col>
                        <img src="https://nycruns.com/wp-content/uploads/2022/10/NYCRUNS_logo_WEB_ProspectPark_Half_5K_over_navy.png" 
                        alt="logo"
                        height="500"
                        ></img>
                    </Col>
                    <Col>
                        <Message></Message>
                    </Col>
                </Row>
            </Container>
        </div>
        
    )
}

export default Content