import { Col, Container, Row } from "react-bootstrap"
import Message from "./Message"

function Content(props) {
    return (
        <div className="content">
            <Container fluid>
                <Row className="flex flex-align-center">
                    <Col lg={4}>
                        <iframe className="iframe-br"
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyABdwZdExGfBfO7VMP1oQMVwBNBgTy55ro&q=Prospect+Park,Brooklyn+NY&zoom=14" 
                        frameBorder="0"
                        allowFullScreen
                        height="500"
                        width="100%"
                        title="prospect park map"
                        ></iframe>
                    </Col>
                    <Col lg={4}>
                        <div className="flex flex-justify-center">
                            <img src="https://nycruns.com/wp-content/uploads/2022/10/NYCRUNS_logo_WEB_ProspectPark_Half_5K_over_navy.png" 
                            alt="logo"
                            className="marathon-logo"
                            ></img>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <Row>
                            <div className="goodluck">
                                Send a message to Abby!
                            </div>
                        </Row>
                        <Row>
                            <Message handleSubmit={props.handleSubmit}></Message>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
        
    )
}

export default Content