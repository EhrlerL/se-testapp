import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';

function Home() {
    return (
        <>
        {/* BACKGROUND IMAGE */}
        <Row className="justify-content-center">
            <Image src={require("../images/React-icon.png")} className="opacity-50" style={{ position: "fixed", zIndex: "-1"}}/>
        </Row>

        <Row className="my-2"> {/* className="my-2" for top and bottom margin of .5 rem */}
            <h1 className="text-center">Welcome</h1>
        </Row>
        
        <Row className="justify-content-center align-items-center mx-5 mb-3">
            <Col>
            <Card border="info">
                <Card.Body>
                    <Card.Text>
                        This simple web app is part of the Software Engineering presentation about React. It's purpose is to demonstrate some of the key functions of component-based development with React.
                        The following Tabs provide further information on the topics of the presentation:
                    <hr/>
                    <ListGroup as="ol" variant="flush" numbered>
                        <ListGroup.Item><strong>About React:</strong> general information about React and its key features</ListGroup.Item>
                        <ListGroup.Item><strong>Development:</strong> insights into React development particularities</ListGroup.Item>
                        <ListGroup.Item><strong>Code Examples:</strong> showroom of some components and their code snippets</ListGroup.Item>
                    </ListGroup>
                    <hr/>
                    For further information, you can check the GitHub Repository. In addition to the source code, you will also find the sources which provide useful stuff about React, Bootstrap and JSX.
                    </Card.Text>
                    {/**/}
                </Card.Body>

            </Card>
            </Col>
        </Row>
        <Row className="justify-content-center mb-5">
            <Col className="text-center">
                <Image src={require("../images/qr-code.png")} style={{height: "15rem", width: "auto"}} alt="GitHub Repository QR-Code" rounded/>
            </Col>
        </Row>
        </>
    );
}

export default Home;