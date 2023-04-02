import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Figure from 'react-bootstrap/Figure';
import Badge from 'react-bootstrap/Badge';

function Examples() {
    /* Popover (Tooltip) that is triggered later by a Button */
    const popover = (
        <Popover>
            <Popover.Header as="h3">Hello there</Popover.Header>
            <Popover.Body>
                A Popover is basically a tooltip on steroides.
            </Popover.Body>
        </Popover>
    );

    return(
        <>
        <Row className="my-2"> {/* className="my-2" for top and bottom margin of .5 rem */}
            <h1 className="text-center">Sample Components</h1>
        </Row>


        {/* Row and Col for easy Layouting */}
        <Row className="justify-content-center mx-5 mb-5">
            <Col>
                {/* Card component with top image, header and text */}
                <Card border="primary">
                    <Card.Img variant="top" src={require("../images/React Banner.png")} />
                    <Card.Header className="text-center">
                        <Card.Title>This is a Card</Card.Title>
                        <Card.Subtitle>with a subtitle</Card.Subtitle>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            In the Card-Body, you can add some text. This text is very interesting and life-changing.
                        </Card.Text>
                        
                        <hr/>

                        {/* ListGroup for better styled ul */}
                        <ListGroup as="ul" variant="flush">
                            <ListGroup.Item>In addition, maybe add</ListGroup.Item>
                            <ListGroup.Item>a fancy list</ListGroup.Item>
                            <ListGroup.Item>called <strong className="code">ListGroup</strong>?</ListGroup.Item>
                        </ListGroup>

                        <hr/>

                        {/* Button that triggers the const popover (above return-function) */}
                        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                            <Button variant="success">Popover</Button>
                        </OverlayTrigger>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                {/* Image with caption */}
                <Figure className="text-center">
                    <Figure.Image alt="banner with react-bootstrap icon" src={require("../images/React-Bootstrap Banner.png")} fluid rounded />
                    <Figure.Caption>React-Bootstrap-Banner that is somehow not scaled properly...</Figure.Caption>
                </Figure>

                {/* extensible paragraphs */}
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion 1</Accordion.Header>
                        <Accordion.Body>
                            Accordions are vertically collapsing paragraphs with headers that you can always see. The content can be hidden by default and when you make the Accordion Item collapse.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion 2 with <Badge bg="secondary" className="mx-2">Badge</Badge></Accordion.Header>
                        <Accordion.Body>
                            When you add multiple Accordion Items to the same Accordion, only one Item is shown and the others are collapsed.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>
        </Row>
        </>
    );
}

export default Examples;