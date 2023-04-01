import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

function About(props) {
    return(
        <>
        <Row className="my-2"> {/* className="my-2" for top and bottom margin of .5 rem */}
            <h1 className="text-center">What is React?</h1>
        </Row>

        <Row md={2} className="justify-content-center mx-5 mb-5 g-4"> {/*mx-5: left and right margin to 3rem; mb-5: bottom margin to 3rem; g-4: grid of 4 components*/}
            <Col>
                <Card border="info">
                    <Card.Img variant="top" src={require("../images/React Banner.png")} />
                    <Card.Header>
                        <Card.Title as="h3" className="text-center">JavaScript Library</Card.Title>
                        <Card.Subtitle className="text-center">created by Meta</Card.Subtitle>
                    </Card.Header>
                    <ListGroup as="ul" variant="flush">
                        <ListGroup.Item>build user interfaces</ListGroup.Item>
                        <ListGroup.Item>component-based</ListGroup.Item>
                        <ListGroup.Item>build web or native apps</ListGroup.Item>
                        <ListGroup.Item>use JSX</ListGroup.Item>
                        {' '}
                    </ListGroup>
                </Card>
            </Col>
            <Col>
                <Card border="info">
                    <Card.Img variant="top" src={require("../images/Components.png")}/>
                    <Card.Header>
                        <Card.Title as="h3" className="text-center">Component-Based</Card.Title>
                        <Card.Subtitle className="text-center">Developtment</Card.Subtitle>
                    </Card.Header>
                    <ListGroup as="ul" variant="flush">
                        <ListGroup.Item>create your own components</ListGroup.Item>
                        <ListGroup.Item>use frameworks like Bootstrap</ListGroup.Item>
                        <ListGroup.Item>combine component into screens/pages/apps</ListGroup.Item>
                        <ListGroup.Item>resuse components multiple times</ListGroup.Item>
                        {' '}
                    </ListGroup>
                </Card>
            </Col>
            <Col>
                <Card border="info">
                    <Card.Img variant="top" src={require("../images/JSX-Code.png")}/>
                    <Card.Header>
                        <Card.Title as="h3" className="text-center">JSX</Card.Title>
                        <Card.Subtitle className="text-center">Syntax</Card.Subtitle>
                    </Card.Header>
                    <ListGroup as="ul" variant="flush">
                        <ListGroup.Item>syntax extension for JavaScript used in React</ListGroup.Item>
                        <ListGroup.Item>use code and markup (JS and HTML)</ListGroup.Item>
                        <ListGroup.Item>use <strong className="code">functions</strong> to <strong className="code">return</strong> HTML</ListGroup.Item>
                        <ListGroup.Item>use <strong className="code">{"{ }"}</strong> for JS expressions inside the HTML</ListGroup.Item>
                        {' '}
                    </ListGroup>
                </Card>
            </Col>
            <Col>
                <Card border="info">
                    <Card.Img variant="top" src={require("../images/React-Bootstrap Banner.png")}/>
                    <Card.Header>
                        <Card.Title as="h3" className="text-center">React-Bootstrap</Card.Title>
                        <Card.Subtitle className="text-center">Frontend Framework</Card.Subtitle>
                    </Card.Header>
                    <ListGroup as="ul" variant="flush">
                        <ListGroup.Item>replaces Bootstrap JavaScript</ListGroup.Item>
                        <ListGroup.Item>no dependencies needed (e.g. jQuery)</ListGroup.Item>
                        <ListGroup.Item>many components like buttons, cards or navs</ListGroup.Item>
                        <ListGroup.Item>easy to install and use</ListGroup.Item>
                        {' '}
                    </ListGroup>
                </Card>
            </Col>
        </Row>
        </>
    );
}

export default About;